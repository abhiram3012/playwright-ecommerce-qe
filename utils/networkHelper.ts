import { Page, APIResponse } from '@playwright/test';

export async function waitForCartResponse(page: Page): Promise<APIResponse> {
  return page.waitForResponse(
    response =>
      response.url().includes('/carts') &&
      response.status() === 200
  );
}
