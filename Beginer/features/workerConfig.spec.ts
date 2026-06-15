import { test, expect } from '@playwright/test';

const users = [
  {
    email: 'user1@test.com',
    password: 'Password1'
  },
  {
    email: 'user2@test.com',
    password: 'Password2'
  },
  {
    email: 'user3@test.com',
    password: 'Password3'
  }
];

test.describe.parallel('Login Tests', () => {

  for (const user of users) {

    test(`Login with ${user.email}`, async ({ page }) => {

      console.log(`Running on worker: ${test.info().workerIndex}`);

      await page.goto(
        'https://naveenautomationlabs.com/opencart/index.php?route=account/login'
      );

      await page.locator('#input-email').fill(user.email);
      await page.locator('#input-password').fill(user.password);

      await page.locator("[value='Login']").click();

      await expect(page).toHaveTitle(/Account Login/i);
    });

  }

});