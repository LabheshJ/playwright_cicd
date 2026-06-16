import { test, expect } from '@playwright/test';

test.use({
  storageState: 'playwright/.auth/user.json'
});

test('TC01 Products Page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.title')).toHaveText('Products');
});

test('TC02 Add To Cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  await page.click('#add-to-cart-sauce-labs-backpack');
});

test('TC03 Cart Page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/cart.html');
  await expect(page.locator('.title')).toHaveText('Your Cart');
});