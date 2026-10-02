import { expect, test } from '@playwright/test';

test('mobile composition survives rotation, browser chrome and longer text', async ({ page }, info) => {
  test.skip(info.project.name === 'desktop', 'Desktop has its own visual reference.');
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  await page.locator('.mobile-cat img').evaluate((img: HTMLImageElement) => img.decode());
  const original = page.viewportSize()!;
  const sizes = [original, { width: original.height, height: original.width }, original,
    { ...original, height: Math.max(300, original.height - 100) }];
  if (info.project.name === 'android-393x873') {
    sizes.push(...[384, 400, 420].map(width => ({ width, height: 873 })));
  }
  for (const size of sizes) {
    await page.setViewportSize(size);
    if (size.width > 1023) continue;
    const failures = await page.evaluate(() => {
      const rect = (selector: string) => document.querySelector(selector)!.getBoundingClientRect();
      const header = rect('.site-header');
      const eyebrow = rect('.mobile-hero-eyebrow');
      const title = rect('.mobile-motion-title');
      const cat = rect('.mobile-cat img');
      const caption = rect('.mobile-hero-caption');
      const projects = rect('#projects');
      const errors: string[] = [];
      if (header.bottom > eyebrow.top || eyebrow.bottom > title.top || title.bottom > cat.top || cat.bottom > caption.top || caption.bottom > projects.top) errors.push('Main content overlaps');
      if (cat.width < 150 || Math.abs(cat.width / cat.height - 1) > 0.02) errors.push('Cat size or aspect ratio');
      for (const selector of ['.site-header', '.mobile-motion-title', '.mobile-cat', '.mobile-hero-tagline', '#projects', '.video-card-preview']) {
        const box = rect(selector);
        if (box.left < -1 || box.right > innerWidth + 1) errors.push(`Overflow: ${selector}`);
      }
      const art = rect('.mobile-hero-visual');
      const edit = rect('.mobile-edit-background');
      const preview = rect('.video-card-preview');
      const projectGap = preview.top - caption.bottom;
      if (projectGap < 20 || projectGap > 64) errors.push('Hero-to-project spacing is unbalanced');
      // EDIT is a full-bleed decorative layer, intentionally cropped by the hero.
      if (edit.width <= art.width) errors.push('EDIT is no longer oversized background typography');
      if (getComputedStyle(document.querySelector('.mobile-hero')!).overflow !== 'hidden') errors.push('Decorative typography can overflow the page');
      if (edit.top > title.bottom || edit.bottom < cat.top + cat.height * 0.35) errors.push('EDIT is detached from title/cat composition');
      const layer = (selector: string) => Number(getComputedStyle(document.querySelector(selector)!).zIndex);
      if (layer('.mobile-edit-background') >= layer('.mobile-cat') || layer('.mobile-cat') >= layer('.mobile-motion-title')) errors.push('Foreground/backdrop stacking is incorrect');
      if (getComputedStyle(document.querySelector('.mobile-edit-background')!).scale !== 'none') errors.push('Distorted lettering');
      return errors;
    });
    expect(failures).toEqual([]);
  }
  await page.setViewportSize(original);
  await page.screenshot({ path: info.outputPath('mobile-hero.png') });
  await page.locator('.mobile-hero-tagline').evaluate(node => { node.textContent += ' — монтаж, внимание к деталям и выразительные кадры'; });
  const caption = (await page.locator('.mobile-hero-caption').boundingBox())!;
  const projects = (await page.locator('#projects').boundingBox())!;
  expect(caption.y + caption.height).toBeLessThanOrEqual(projects.y);
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  const positions = [];
  for (const time of [0, 3000]) {
    await page.locator('.mobile-cat').evaluate((node, currentTime) => {
      const float = node.getAnimations().find(animation => animation instanceof CSSAnimation && animation.animationName === 'float');
      if (!float) throw new Error('Cat animation missing');
      float.pause(); float.currentTime = currentTime;
    }, time);
    positions.push({ cat: (await page.locator('.mobile-cat').boundingBox())!, edit: (await page.locator('.mobile-edit-background').boundingBox())! });
  }
  expect(Math.abs(positions[0].cat.y - positions[1].cat.y)).toBeGreaterThan(10);
  expect(Math.abs(positions[0].edit.y - positions[1].edit.y)).toBeLessThan(0.5);
});
