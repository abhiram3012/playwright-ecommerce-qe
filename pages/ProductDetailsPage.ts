import { Page } from '@playwright/test';

export class ProductDetailsPage {
  constructor(private page: Page) {}

  async addToCart() {
    await this.page.click('[data-test="add-to-cart"]');
  }
}
