import { expect, test, type Page } from '@playwright/test';

async function checkTextBounds(page: Page, selector: string) {
  const errors = await page.locator(selector).evaluateAll((elements) => elements.flatMap((el) => {
    const box = el.getBoundingClientRect();
    const width = document.documentElement.clientWidth;
    const range = document.createRange();
    range.selectNodeContents(el);
    const text = range.getBoundingClientRect();
    return box.left < -1 || box.right > width + 1 || text.left < box.left - 2 || text.right > box.right + 2
      ? [`${el.textContent?.trim()}: box=${box.left}..${box.right}, text=${text.left}..${text.right}, viewport=${width}`]
      : [];
  }));
  expect(errors).toEqual([]);
}

test('readable hero, stable header, cards and about in every viewport', async ({ page }, info) => {
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  const viewport = page.viewportSize()!;
  await expect(page.locator('.hero-object img')).toBeVisible();
  await expect.poll(() => page.locator('.hero-object img').evaluate((img: HTMLImageElement) => img.naturalWidth)).toBeGreaterThan(0);
  await page.locator('.hero-object img').evaluate((img: HTMLImageElement) => img.decode());
  await checkTextBounds(page, '.hero-title, .hero-eyebrow, .hero-tagline');
  const eyebrow = (await page.locator('.hero-eyebrow').boundingBox())!;
  for (const control of await page.locator('.site-header .header-enter').all()) {
    const box = (await control.boundingBox())!;
    const overlapX = Math.min(box.x + box.width, eyebrow.x + eyebrow.width) - Math.max(box.x, eyebrow.x);
    const overlapY = Math.min(box.y + box.height, eyebrow.y + eyebrow.height) - Math.max(box.y, eyebrow.y);
    expect(overlapX > 0 && overlapY > 0).toBe(false);
  }
  const cat = await page.locator('.hero-object img').boundingBox();
  expect(cat!.height).toBeGreaterThan(160);
  if (viewport.width < 640 && viewport.height >= 568) {
    const firstVideo = await page.locator('video').first().boundingBox();
    expect(firstVideo!.y).toBeLessThan(viewport.height - 25);
  }
  const contacts = page.getByRole('button', { name: 'Контакты', exact: true });
  const logo = page.getByRole('button', { name: 'BLDRN', exact: true });
  const before = await contacts.boundingBox();
  for (let i = 0; i < 2; i++) {
    await contacts.click();
    await expect(contacts).toHaveAttribute('aria-expanded', 'true');
    const menu = await page.locator('.contact-dropdown').boundingBox();
    expect(menu!.x).toBeGreaterThanOrEqual(0);
    expect(menu!.x + menu!.width).toBeLessThanOrEqual(viewport.width + 1);
    expect(menu!.y + menu!.height).toBeLessThanOrEqual(viewport.height + 1);
    await contacts.click();
    expect((await contacts.boundingBox())!.y).toBeCloseTo(before!.y, 0);
    await logo.click();
    await expect(logo).toHaveCSS('opacity', '1');
  }
  await page.screenshot({ path: info.outputPath('hero.png') });
  await expect(page.locator('.video-card')).toHaveCount(6);
  for (const card of await page.locator('.video-card').all()) {
    await card.scrollIntoViewIfNeeded();
    const title = await card.locator('h3').boundingBox();
    const caption = card.locator('.video-youtube-caption');
    if (await caption.count()) {
      const count = (await caption.boundingBox())!;
      const overlapX = Math.min(title!.x + title!.width, count.x + count.width) - Math.max(title!.x, count.x);
      const overlapY = Math.min(title!.y + title!.height, count.y + count.height) - Math.max(title!.y, count.y);
      expect(overlapX > 1 && overlapY > 1).toBe(false);
    }
  }
  await checkTextBounds(page, '.video-card h3, .video-youtube-caption');
  await page.locator('#about').scrollIntoViewIfNeeded();
  await expect.poll(() => page.locator('.about-portrait img').evaluate((img: HTMLImageElement) => img.naturalWidth)).toBeGreaterThan(0);
  await page.locator('.about-portrait img').evaluate((img: HTMLImageElement) => img.decode());
  await checkTextBounds(page, '.about-title, .about-content p');
  await page.locator('.about-panel').screenshot({ path: info.outputPath('about.png'), style: '.site-header { visibility: hidden; }' });
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  expect(overflow).toBe(false);
});

test('real entry animations do not hide or move controls after tapping', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');
  const logo = page.getByRole('button', { name: 'BLDRN', exact: true });
  const contacts = page.getByRole('button', { name: 'Контакты', exact: true });
  await expect(logo).toHaveCSS('opacity', '1');
  await expect(contacts).toHaveCSS('opacity', '1');
  await expect(page.locator('.hero-title')).toHaveCSS('opacity', '1');
  const logoBefore = (await logo.boundingBox())!;
  const contactBefore = (await contacts.boundingBox())!;
  for (let i = 0; i < 3; i++) {
    await contacts.click();
    await expect(contacts).toHaveAttribute('aria-expanded', 'true');
    await contacts.click();
    await logo.click();
    await expect(logo).toHaveCSS('opacity', '1');
    expect((await logo.boundingBox())!.y).toBeCloseTo(logoBefore.y, 0);
    expect((await contacts.boundingBox())!.y).toBeCloseTo(contactBefore.y, 0);
  }
  const firstCard = page.locator('[data-reveal="video"]').first();
  await firstCard.scrollIntoViewIfNeeded();
  await expect(firstCard).toHaveCSS('opacity', '1');
  await expect(firstCard.locator('video')).toHaveAttribute('autoplay', '');
  await expect(page.locator('.hero-backdrop')).toHaveAttribute('data-revealed', 'true');
});

test('rotation and portfolio filters retain readable cards', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  const original = page.viewportSize()!;
  await page.setViewportSize({ width: original.height, height: original.width });
  await checkTextBounds(page, '.hero-title, .hero-tagline');
  await page.setViewportSize(original);
  await page.goto('/portfolio');
  await page.getByRole('button', { name: 'UI Стиль', exact: true }).click();
  await expect(page.locator('.video-card')).toHaveCount(1);
  await expect(page.getByRole('heading', { name: 'Простой Motion' })).toBeVisible();
  await page.getByRole('button', { name: 'Все', exact: true }).click();
  await expect(page.locator('.video-card')).toHaveCount(6);
  await checkTextBounds(page, '.video-card h3, .video-youtube-caption');
});
