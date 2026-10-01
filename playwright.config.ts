import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/responsive',
  fullyParallel: false,
  workers: 2,
  timeout: 45000,
  expect: { timeout: 10000 },
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'http://127.0.0.1:3100',
    reducedMotion: 'reduce',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    ...[
      [320, 568], [360, 740], [393, 851], [412, 915],
      [851, 393], [915, 412], [768, 1024],
    ].map(([width, height]) => ({
      name: `android-${width}x${height}`,
      use: { ...devices['Pixel 5'], viewport: { width, height }, deviceScaleFactor: 1 },
    })),
    { name: 'desktop', use: { browserName: 'chromium', viewport: { width: 1440, height: 900 } } },
  ],
  webServer: {
    command: 'npm run start -- --hostname 127.0.0.1 --port 3100',
    url: 'http://127.0.0.1:3100',
    reuseExistingServer: false,
    timeout: 60000,
  },
});
