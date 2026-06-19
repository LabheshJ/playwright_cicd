import {test, expect} from '@playwright/test';

test('Check browser window size', async ({ page }) => {
  // Set the viewport size to a specific width and height
  await page.goto('https://playwright.dev/');

  await page.waitForTimeout(3000);

  await page.click('text=Get Started');

});