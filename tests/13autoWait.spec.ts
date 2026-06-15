import {Page, expect, test, Browser} from '@playwright/test';
import {chromium} from 'playwright';

test.use({
    actionTimeout: 10000
})

test('auto wait', async()=>{
    const browser:Browser = await chromium.launch({headless: false, channel:'chrome'});
    const page = await browser.newPage();

    await page.goto("https://proleed.academy/exercises/selenium/automation-practice-form-with-radio-button-check-boxes-and-drop-down.php");
// soft assertion
   // await expect.soft(page.getByTestId('status')).toHaveText('Success');
    await page.locator('[type="checkbox"][id=passport]').check();
// custome expect message
    await expect(page.getByText('Passport'),'should be checked').toBeChecked();


    await page.waitForTimeout(5000);
});