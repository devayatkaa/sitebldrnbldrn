import { expect, test } from '@playwright/test';

test('portrait EDIT stays below the heading independently of the floating cat', async ({ page }, info) => {
  const viewport = page.viewportSize()!;
  test.skip(viewport.width > 767 || viewport.height <= viewport.width, 'Portrait phones only.');
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  await page.locator('.hero-object img').evaluate((img: HTMLImageElement) => img.decode());
  for (const height of [viewport.height, Math.max(viewport.width + 80, viewport.height - 120)]) {
    await page.setViewportSize({ width: viewport.width, height });
    await expect(page.locator('.hero-backdrop')).toBeHidden();
    await expect(page.locator('.hero-mobile-backdrop span')).toBeVisible();
    const cat = (await page.locator('.hero-object img').boundingBox())!;
    const title = (await page.locator('.hero-title').boundingBox())!;
    const edit = (await page.locator('.hero-mobile-backdrop span').boundingBox())!;
    expect(edit.y - title.y - title.height).toBeGreaterThanOrEqual(7);
    expect(edit.y - title.y - title.height).toBeLessThanOrEqual(9);
    expect(Math.abs(cat.x + cat.width / 2 - edit.x - edit.width / 2)).toBeLessThan(2);
    expect(edit.x).toBeGreaterThanOrEqual(0);
    expect(edit.x + edit.width).toBeLessThanOrEqual(viewport.width);
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
