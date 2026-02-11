import { Page } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/'); // or whatever your products page URL is
  }

  async searchProduct(productName: string) {
    await this.page.fill('[data-test="search-query"]', productName);
    await this.page.click('[data-test="search-submit"]');
    //await this.page.waitForTimeout(3000); // wait for search results to load, adjust as needed
  }

  async selectFirstProduct() {
    await this.page.locator('.card-img-top').first().click();
  }
}