import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 120 * 1000,
  retries: 1,

  expect: {
    timeout: 40 * 1000,
  },

  use: {
    baseURL: 'https://practicesoftwaretesting.com',
    headless: false, 
    screenshot: 'only-on-failure',
    trace: process.env.CI ? 'retain-on-failure' : 'on-first-retry',
  },

  reporter: [['html', { open: 'never' }]],

  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
  ],
});
