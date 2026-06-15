import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'


test('taking screenshot',async()=>{
    const fbrowser:Browser = await firefox.launch({headless: false});
    const page:Page = await fbrowser.newPage();

    await page.goto("https://playwright.dev/");
    await page.screenshot({
    path: 'screenshots/full-page.png',
    fullPage: true, // false is default, captures only the visible viewport
  });
  /*// screenshot as buffer
    const buffer = await page.screenshot();
     // Screenshot of a SINGLE ELEMENT only
    const heading = page.getByRole('heading', { name: /Playwright/ });
    await heading.screenshot({ path: 'screenshots/heading-only.png' });

      // Screenshot with a custom clip area (x, y, width, height in pixels)
  await page.screenshot({
    path: 'screenshots/clipped.png',
    clip: { x: 0, y: 0, width: 800, height: 400 },
  });
  */
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
   const emailID:Locator = await page.locator('#input-email');
   const password:Locator = await page.locator('#input-password');
   const loginBtn:Locator= await page.locator("[value='Login']");

   await emailID.fill("Abc@testing.com");
   await password.fill("Simform@123");
    await page.screenshot({
    path: 'screenshots/masked.png',
    mask: [page.locator('#input-password')],  // blurs this element
  });





});