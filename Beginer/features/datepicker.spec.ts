import { test, expect } from '@playwright/test';

test('datepicker demo', async ({ page }) => {
  await page.goto('https://jqueryui.com/datepicker/');

  const frame = page.frameLocator('.demo-frame');

  await frame.locator('#datepicker').click();

  const targetMonth = 'July';
  const targetYear = '2026';

  while (true) {
    const month = await frame.locator('.ui-datepicker-month').textContent();
    const year = await frame.locator('.ui-datepicker-year').textContent();

    if (month === targetMonth && year === targetYear) {
      break;
    }

    await frame.locator('.ui-datepicker-next').click();
  }

  await frame.getByRole('link', { name: '15' }).click();

  await expect(frame.locator('#datepicker'))
    .toHaveValue('07/15/2026');
});