import { test } from '@playwright/test';

test('Login and save session', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  await page.locator('input[name="username"]').fill('john');
  await page.locator('input[name="password"]').fill('demo');
  await page.locator('input[value="Log In"]').click();

  // Wait for successful login
  await page.waitForURL('**/overview.htm');

  // Save cookies, localStorage, sessionStorage
  await page.context().storageState({
    path: 'test-results/user.json'
  });
});