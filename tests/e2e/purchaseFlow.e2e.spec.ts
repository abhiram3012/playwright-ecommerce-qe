import { test, expect } from '../../fixtures/testFixtures';
import { ProductsPage } from '../../pages/ProductsPage';
import { ProductDetailsPage } from '../../pages/ProductDetailsPage';
import { CartPage } from '../../pages/CartPage';
import { waitForCartResponse } from '../../utils/networkHelper';
import products from '../../test-data/products.json';

for (const productName of products.products) {
  test(`Customer purchase flow with backend validation for ${productName}`, async ({ loggedInPage }) => {
    const productsPage = new ProductsPage(loggedInPage);
    const productDetailsPage = new ProductDetailsPage(loggedInPage);
    const cartPage = new CartPage(loggedInPage);

    // Navigate + search (data-driven)
    await productsPage.goto();
    await productsPage.searchProduct(productName);
    await productsPage.selectFirstProduct();

    // Prepare to capture CART API call
    const cartResponsePromise = waitForCartResponse(loggedInPage);

    // UI action
    await productDetailsPage.addToCart();

    // BACKEND VALIDATION 🔥
    const cartResponse = await cartResponsePromise;
    const cartData = await cartResponse.json();

    console.log('Cart API response:', cartData);

    expect(cartData.result).toBeDefined();
    expect(cartData.result).toContain('item');

    // Continue UI flow
    await cartPage.openCart();
    await cartPage.proceedToCheckout();

    await expect(loggedInPage).toHaveURL(/checkout/);
  });
}
