import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import {webkit, chromium, firefox}  from 'playwright'

test('mouse hover', async()=>{

    const fbrowser:Browser = await firefox.launch({headless: false});
    const page:Page = await fbrowser.newPage();
  await page.goto("https://vinothqaacademy.com/mouse-event/");

    // double click
    await page.locator('#doubleBtn').dblclick();
 await page.waitForTimeout(3000);
    // right click
    await page.locator('#rightBtn').click({button:'right'});
    await page.getByRole('button', { name: 'Edit' }).click();
 await page.waitForTimeout(3000);
   // shift click
    await page.goto('https://playwright.dev/');
    await page.getByText('TypeScript').click({modifiers: ["Shift"]});

    // mouse hover + shift click
        await page.goto('https://playwright.dev/');
        await page.getByRole('button', { name: 'Node.js' }).hover();
        await page.locator('[data-language-prefix="/python/"]').click({modifiers: ["Shift"]});



 await page.waitForTimeout(3000);



});