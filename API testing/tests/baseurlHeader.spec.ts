import { test, expect, APIRequestContext, request as apiRequest } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

let apiContext: APIRequestContext;

test.beforeAll(async () => {
  console.log('JSESSIONID:', process.env.JSESSIONID);

  expect(process.env.JSESSIONID).toBeDefined();
  expect(process.env.JSESSIONID).not.toBe('');

  apiContext = await apiRequest.newContext({
    baseURL: 'https://parabank.parasoft.com',
    extraHTTPHeaders: {
      Cookie: `JSESSIONID=${process.env.JSESSIONID}`,
    },
  });
});

test.afterAll(async () => {
  await apiContext.dispose();
});

test('request loan', async () => {
const response = await apiContext.post(
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
  console.log('Status:', response.status());
  console.log('Status Text:', response.statusText());

  const body = await response.text();
  console.log('Body:', body);

  // Uncomment after debugging
  // expect(response.status()).toBe(200);
});