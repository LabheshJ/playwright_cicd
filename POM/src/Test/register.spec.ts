import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { RegisterStep } from '../steps/register.step';

test('Register new user', async ({ page }) => {

    const registerPage = new RegisterPage(page);
    const registerStep = new RegisterStep(page);

    await registerPage.navigateToRegisterPage();

    await registerStep.registerUser();

    await expect(
        page.locator('text=Your account was created successfully. You are now logged in.')
    ).toBeVisible();
});