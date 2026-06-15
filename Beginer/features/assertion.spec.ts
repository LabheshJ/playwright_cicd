import { test, expect } from '@playwright/test';

test('Practice Form Assertions', async ({ page }) => {

    await page.goto('https://proleed.academy/exercises/selenium/automation-practice-form-with-radio-button-check-boxes-and-drop-down.php');

    // ===== Text Fields =====

    const firstName = page.locator('#firstname');

    await firstName.fill('Labhesh');

    await expect(firstName).toHaveValue('Labhesh');
    await expect(firstName).toBeVisible();
    await expect(firstName).toBeEditable();
    await expect(firstName).toBeEnabled();

    await firstName.focus();
    await expect(firstName).toBeFocused();

    // ===== Radio Button =====

    const currentAccount = page.locator('#current');

    await currentAccount.check();

    await expect(currentAccount).toBeChecked();

    // Verify default radio is unchecked now

    const savingAccount = page.locator('#saving');

    await expect(savingAccount).not.toBeChecked();

    // ===== Checkbox =====

    const passportCheckbox = page.locator('#passport');

    await passportCheckbox.check();

    await expect(passportCheckbox).toBeChecked();

    await passportCheckbox.uncheck();

    await expect(passportCheckbox).not.toBeChecked();

    // ===== Dropdown =====

    const prefix = page.locator('#prefix');

    await prefix.selectOption('mr.');

    await expect(prefix).toHaveValue('mr.');

    // ===== DOB Month Dropdown =====

    const month = page.locator('#dob_month');

    await month.selectOption('January');

    await expect(month).toHaveValue('January');

    // ===== Mobile Field =====

    const mobile = page.locator('#mobile');

    await mobile.fill('9876543210');

    await expect(mobile).toHaveValue('9876543210');

    // ===== Country Dropdown =====

    const country = page.locator('#country');

    await country.selectOption('India');

    await expect(country).toHaveValue('India');

    // ===== URL Validation =====

    await expect(page).toHaveURL(/automation-practice-form/);

    console.log('Current URL : ', page.url());

    // ===== Page Title =====

    await expect(page).toHaveTitle(/Automation Practice Form/i);

    // ===== Submit Button =====

    const submitBtn = page.locator('input[type="submit"]');

    await expect(submitBtn).toBeVisible();
    await expect(submitBtn).toBeEnabled();

    // ===== Attribute Assertion =====

    await expect(firstName).toHaveAttribute(
        'placeholder',
        'First Name'
    );

    // ===== Count Assertion =====

    const allCheckboxes = page.locator(
        'input[type="checkbox"]'
    );

    await expect(allCheckboxes).toHaveCount(4);

    // ===== Count Radio Buttons =====

    const accountTypeRadios = page.locator(
        'input[name="accounttype"]'
    );

    await expect(accountTypeRadios).toHaveCount(3);

    await page.waitForTimeout(5000);
});