import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/auth/login', { waitUntil: 'networkidle' });
  }

  async login(email: string, password: string) {
    const emailInput = this.page.locator('[data-test="email"]');
    const passwordInput = this.page.locator('[data-test="password"]');

    // ✅ Explicit wait (critical for CI stability)
    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();

    await emailInput.fill(email);
    await passwordInput.fill(password);

    await this.page.locator('[data-test="login-submit"]').click();
  }
}
