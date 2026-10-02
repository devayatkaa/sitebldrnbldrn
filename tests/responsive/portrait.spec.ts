import { expect, test } from '@playwright/test';

test('mobile composition survives rotation, browser chrome and longer text', async ({ page }, info) => {
  test.skip(info.project.name === 'desktop', 'Desktop has its own visual reference.');
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  await page.locator('.hero-object img').evaluate((img: HTMLImageElement) => img.decode());
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
      const eyebrow = rect('.hero-eyebrow');
      const title = rect('.hero-title');
      const cat = rect('.hero-object img');
      const caption = rect('.hero-caption');
      const projects = rect('#projects');
      const errors: string[] = [];
      if (header.bottom > eyebrow.top || eyebrow.bottom > title.top || title.bottom > cat.top || cat.bottom > caption.top || caption.bottom > projects.top) errors.push('Main content overlaps');
      if (cat.width < 150 || Math.abs(cat.width / cat.height - 1) > 0.02) errors.push('Cat size or aspect ratio');
      for (const selector of ['.site-header', '.hero-title', '.hero-object', '.hero-tagline', '#projects', '.video-card-preview']) {
        const box = rect(selector);
        if (box.left < -1 || box.right > innerWidth + 1) errors.push(`Overflow: ${selector}`);
      }
      const art = rect('.hero-art');
      const edit = rect('.hero-mobile-backdrop span');
      if (edit.left < art.left || edit.right > art.right) errors.push('EDIT letters extend outside the artwork');
      if (edit.left < 0 || edit.right > innerWidth) errors.push('EDIT letters extend outside the screen');
      if (getComputedStyle(document.querySelector('.hero-art')!).overflow !== 'visible') errors.push('Artwork can clip EDIT');
      if (Math.abs(edit.left + edit.width / 2 - art.left - art.width / 2) > 1) errors.push('EDIT is off centre');
      if (getComputedStyle(document.querySelector('.hero-mobile-backdrop span')!).scale !== 'none') errors.push('Distorted lettering');
      return errors;
    });
    expect(failures).toEqual([]);
  }
  await page.setViewportSize(original);
  await page.screenshot({ path: info.outputPath('mobile-hero.png') });
  await page.locator('.hero-tagline').evaluate(node => { node.textContent += ' — монтаж, внимание к деталям и выразительные кадры'; });
  const caption = (await page.locator('.hero-caption').boundingBox())!;
  const projects = (await page.locator('#projects').boundingBox())!;
  expect(caption.y + caption.height).toBeLessThanOrEqual(projects.y);
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  const positions = [];
  for (const time of [0, 3000]) {
    await page.locator('.hero-object').evaluate((node, currentTime) => {
      const float = node.getAnimations().find(animation => animation instanceof CSSAnimation && animation.animationName === 'float');
      if (!float) throw new Error('Cat animation missing');
      float.pause(); float.currentTime = currentTime;
    }, time);
    positions.push({ cat: (await page.locator('.hero-object').boundingBox())!, edit: (await page.locator('.hero-mobile-backdrop span').boundingBox())! });
  }
  expect(Math.abs(positions[0].cat.y - positions[1].cat.y)).toBeGreaterThan(10);
  expect(Math.abs(positions[0].edit.y - positions[1].edit.y)).toBeLessThan(0.5);
});
