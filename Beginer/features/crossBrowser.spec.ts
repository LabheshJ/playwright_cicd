import { test, expect } from '@playwright/test';

test('Cross Browser Test', async ({ page, browserName }, testInfo) => {

  console.log(`Project: ${testInfo.project.name}`);
  console.log(`Engine : ${browserName}`);

  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
// npx playwright test Beginer/features/crossBrowser.spec.ts