import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'


test('navigation',async()=>{
    const fbrowser:Browser = await firefox.launch({headless: true});
    const page:Page = await fbrowser.newPage();

    await page.goto("https://playwright.dev/");
      await page.goBack();
  await page.goForward();

  // Reload the page
  await page.reload();

  // Read the current URL at any point
  const currentURL = page.url();
  console.log(currentURL);  // https://example.com

await page.getByRole('link', { name: 'Get Started' }).click();

await page.waitForURL('**/docs/intro');



});