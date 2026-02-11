import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: 1,
  use: {
    baseURL: 'https://practicesoftwaretesting.com',
    headless: true, // visible Chrome
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  reporter: [['html', { open: 'never' }]],
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
  ],
});
