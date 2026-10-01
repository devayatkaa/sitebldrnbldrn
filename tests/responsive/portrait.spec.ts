import { expect, test } from '@playwright/test';

test('portrait EDIT stays below the heading independently of the floating cat', async ({ page }, info) => {
  const viewport = page.viewportSize()!;
  test.skip(viewport.width > 767 || viewport.height <= viewport.width, 'Portrait phones only.');
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  await page.locator('.hero-object img').evaluate((img: HTMLImageElement) => img.decode());
  const sizes = [
    ...[320, 360, 375, 384, 393, 412, 430, 480, 600, 767].map(width => ({ width, height: Math.max(851, width + 120) })),
    viewport,
    { width: viewport.width, height: Math.max(viewport.width + 80, viewport.height - 120) },
  ];
  for (const size of sizes) {
    await page.setViewportSize(size);
    await expect(page.locator('.hero-backdrop')).toBeHidden();
    await expect(page.locator('.hero-mobile-backdrop span')).toBeVisible();
    const cat = (await page.locator('.hero-object img').boundingBox())!;
    const title = (await page.locator('.hero-title').boundingBox())!;
    const edit = (await page.locator('.hero-mobile-backdrop span').boundingBox())!;
    const fontSize = await page.locator('.hero-mobile-backdrop span').evaluate(node => parseFloat(getComputedStyle(node).fontSize));
    // Desktop image/text proportions, allowing a small rounding tolerance.
    expect(cat.width / edit.width).toBeGreaterThan(0.28);
    expect(cat.width / edit.width).toBeLessThan(0.32);
    expect(title.width / edit.width).toBeGreaterThan(0.63);
    expect(title.width / edit.width).toBeLessThan(0.69);
    // The font's empty top bearing needs compensation, proportional to type size.
    expect((edit.y - title.y - title.height) / fontSize).toBeCloseTo(-0.14, 2);
    expect(Math.abs(cat.x + cat.width / 2 - edit.x - edit.width / 2)).toBeLessThan(2);
    expect(edit.x).toBeGreaterThanOrEqual(0);
    expect(edit.x + edit.width).toBeLessThanOrEqual(size.width);
  }
  await page.setViewportSize(viewport);
  await page.screenshot({ path: info.outputPath('portrait-hero.png') });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  const positions = [];
  for (const time of [0, 3000]) {
    await page.locator('.hero-object').evaluate((node, currentTime) => {
      const float = node.getAnimations().find(animation =>
        animation instanceof CSSAnimation && animation.animationName === 'float');
      if (!float) throw new Error('Cat float animation is missing');
      float.pause();
      float.currentTime = currentTime;
    }, time);
    positions.push({
      cat: (await page.locator('.hero-object').boundingBox())!,
      edit: (await page.locator('.hero-mobile-backdrop span').boundingBox())!,
    });
  }
  expect(Math.abs(positions[0].cat.y - positions[1].cat.y)).toBeGreaterThan(10);
  expect(Math.abs(positions[0].edit.y - positions[1].edit.y)).toBeLessThan(0.5);
});
