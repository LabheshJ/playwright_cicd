import { test, expect, request } from '@playwright/test';

test('Create account via API and verify in UI', async ({ page }) => {
  const apiContext = await request.newContext({
    baseURL: 'https://parabank.parasoft.com',
  });

  // Login
  const loginResponse = await apiContext.post('/parabank/login.htm', {
    form: {
      username: 'Test',
      password: 'Test@123',
    },
  });

  expect(loginResponse.ok()).toBeTruthy();

  // Request loan using same context
  const loanResponse = await apiContext.post(
    '/parabank/services_proxy/bank/requestLoan',
    {
      params: {
        customerId: 12434,
        amount: 1,
        downPayment: 1,
        fromAccountId: 15342,
      },
    }
  );

  expect(loanResponse.status()).toBe(200);

  const body = await loanResponse.json();
  console.log(body);

  await apiContext.dispose();

  // Login through UI
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  await page.locator('input[name="username"]').fill('Test');
  await page.locator('input[name="password"]').fill('Test@123');
  await page.locator('input[value="Log In"]').click();

  // Open Accounts Overview
  await page.goto('https://parabank.parasoft.com/parabank/overview.htm');
  // Verify newly created account is visible
    const accountId = body.accountId;
    const accountLink = page.locator(`a:has-text("${accountId}")`);
    await expect(accountLink).toBeVisible();

});