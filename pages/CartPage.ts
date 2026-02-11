import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async openCart() {
    await this.page.click('[data-test="nav-cart"]');
  }

  async proceedToCheckout() {
    await this.page.click('[data-test="proceed-1"]');
  }
}
