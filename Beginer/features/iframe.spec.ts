import { test, expect } from '@playwright/test';

test('iframe demo', async ({ page }) => {
  await page.goto('https://www.selenium.dev/selenium/web/iframes.html');

  const frame = page.frameLocator('#iframe1');

  await frame.locator('#email').fill('test@test.com');
});