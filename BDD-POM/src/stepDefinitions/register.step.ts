import { Given, When, Then } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';

import { RegisterPage } from '../pages/registerPage';
import { RegisterStep } from '../steps/registerStep';

let page: Page;
let registerPage: RegisterPage;
let registerStep: RegisterStep;

Given('User is on Register Page', async function () {
    // Get page from global scope (set by Hooks.ts)
    page = (global as any).page;
    if (!page) {
      throw new Error('Page not initialized. Check if Hooks are being executed.');
    }
    registerPage = new RegisterPage(page);
    await registerPage.navigateToRegisterPage();
});

When('User enters valid registration details', async function () {
    registerStep = new RegisterStep(registerPage);
    await registerStep.registerUser();
});

When('User clicks Register button', async function () {
    await registerPage.clickRegisterButton();
});

Then('User account should be created successfully', async function () {
    await expect(
        page.locator(
            'text=Your account was created successfully. You are now logged in.'
        )
    ).toBeVisible();
});