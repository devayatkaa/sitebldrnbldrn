import { expect, test } from '@playwright/test';

test('desktop design remains unchanged', async ({ page }, info) => {
  test.skip(info.project.name !== 'desktop', 'Reference is for the approved desktop layout.');
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  await page.locator('.hero-object img').evaluate((img: HTMLImageElement) => img.decode());
  await expect(page.locator('.hero')).toHaveScreenshot('desktop-hero.png', {
    animations: 'disabled', maxDiffPixelRatio: 0.001,
  });
  await page.locator('#about').scrollIntoViewIfNeeded();
  await page.locator('.about-portrait img').evaluate((img: HTMLImageElement) => img.decode());
  await page.addStyleTag({ content: '.site-header { visibility: hidden; }' });
  await expect(page.locator('.about-panel')).toHaveScreenshot('desktop-about.png', {
    animations: 'disabled', maxDiffPixelRatio: 0.001,
  });
});
