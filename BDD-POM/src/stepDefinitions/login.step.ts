import { Given, When, Then } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';

import { LoginPage } from '../pages/loginPage';
import { LoginStep } from '../steps/loginStep';

let page: Page;
let loginPage: LoginPage;
let loginStep: LoginStep;

Given('User is on Login Page', async function () {

    page = (global as any).page;

    if (!page) {
        throw new Error(
            'Page not initialized. Check Hooks.ts'
        );
    }

    loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
});

When('User enters valid credentials', async function () {

    loginStep = new LoginStep(loginPage);

    await loginStep.loginUser();
});

When('User clicks Login button', async function () {

    await loginPage.clickLoginButton();
});
// after login user will be redirect to the account overview page https://parabank.parasoft.com/parabank/overview.htm
Then('User should be logged in successfully', async function () {
    await expect(page).toHaveURL(/overview\.htm/);
    await expect(
        page.locator('text=Accounts Overview')
    ).toBeVisible();
});