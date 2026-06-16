import { test, expect, request } from '@playwright/test';

test('login and request loan', async () => {
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
        customerId: 22868,
        amount: 500,
        downPayment: 100,
        fromAccountId: 33990,
      },
    }
  );

  expect(loanResponse.status()).toBe(200);

  const body = await loanResponse.json();
  console.log(body);

  await apiContext.dispose();
});