import { expect, test } from '@playwright/test';

test('portrait EDIT stays centred behind the cat at different browser heights', async ({ page }, info) => {
  const viewport = page.viewportSize()!;
  test.skip(viewport.width > 767 || viewport.height <= viewport.width, 'Portrait phones only.');
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  await page.locator('.hero-object img').evaluate((img: HTMLImageElement) => img.decode());
  for (const height of [viewport.height, Math.max(viewport.width + 80, viewport.height - 120)]) {
    await page.setViewportSize({ width: viewport.width, height });
    await expect(page.locator('.hero-backdrop')).toBeHidden();
    await expect(page.locator('.hero-mobile-backdrop')).toBeVisible();
    const cat = (await page.locator('.hero-object img').boundingBox())!;
    const edit = (await page.locator('.hero-mobile-backdrop span').boundingBox())!;
    expect(Math.abs(cat.y + cat.height / 2 - edit.y - edit.height / 2)).toBeLessThan(2);
    expect(Math.abs(cat.x + cat.width / 2 - edit.x - edit.width / 2)).toBeLessThan(2);
    expect(edit.x).toBeGreaterThanOrEqual(0);
    expect(edit.x + edit.width).toBeLessThanOrEqual(viewport.width);
  }
  await page.setViewportSize(viewport);
  await page.screenshot({ path: info.outputPath('portrait-hero.png') });
});
