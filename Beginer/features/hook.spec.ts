import { test, expect, Page } from '@playwright/test';

test.describe('Hooks Demo', () => {

    let email: string;

    // Runs once before all tests
    test.beforeAll(async () => {
        email = `user${Math.floor(Math.random() * 10000)}@example.com`;
        console.log(`Generated Email: ${email}`);
    });

    // Runs before every test
    test.beforeEach(async ({ page }) => {

        await page.goto(
            'https://naveenautomationlabs.com/opencart/index.php?route=account/login'
        );

        await page.locator('#input-email').fill(email);
        await page.locator('#input-password').fill('Simform@123');

        await page.screenshot({
            path: 'screenshots/masked.png',
            mask: [page.locator('#input-password')]
        });
    });

    // Runs after every test
    test.afterEach(async ({ page }, testInfo) => {

        const usedEmail = await page.locator('#input-email').inputValue();
        console.log(`Email used in test: ${usedEmail}`);

        if (testInfo.status !== testInfo.expectedStatus) {

            await page.screenshot({
                path: `screenshots/failure-${testInfo.title}.png`
            });

            console.log(`Screenshot captured for failed test`);
        }
    });

    // Runs once after all tests
    test.afterAll(async () => {
        console.log(`Email used for all tests: ${email}`);
    });

    test('Verify Email Field Is Filled', async ({ page }) => {

        await expect(page.locator('#input-email')).toHaveValue(email);

    });

    test('Verify Password Field Is Filled', async ({ page }) => {

        await expect(page.locator('#input-password'))
            .toHaveValue('Simform@123');

    });

});