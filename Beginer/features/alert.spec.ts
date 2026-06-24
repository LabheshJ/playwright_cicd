import { test, expect } from '@playwright/test';

test('Handle Alert', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');

  page.once('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept();
  });

  await page.locator('#alertButton').click();
});

test('Handle Confirm', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');

  page.once('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.dismiss(); // Cancel
  });

  await page.locator('#confirmButton').click();

  await expect(page.locator('#confirmResult'))
    .toContainText('Cancel');
});

test('Handle Prompt', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');

  page.once('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept('Labhesh');
  });

  await page.locator('#promtButton').click();

  await expect(page.locator('#promptResult'))
    .toContainText('Labhesh');
});