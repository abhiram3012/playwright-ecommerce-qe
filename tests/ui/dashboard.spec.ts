import { test, expect } from '../../fixtures/testFixtures';

test('User lands on dashboard after login', async ({ loggedInPage }) => {
  await expect(loggedInPage).toHaveURL(/account/);
});
