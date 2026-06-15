import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test';
import { chromium  } from 'playwright';

/*
// for adjusting auto waiting time for all the actions
test.use({
    actionTimeout: 10000
*/

test ('Auto waiting',async()=>{
    const browser:Browser = await chromium.launch({headless: false, channel:'chrome'});
    const page:Page = await browser.newPage();
    await page.goto("https://www.google.com/");
    // faulty selector to check auto waiting for 30 seconds
    await page.locator('#APjFqb123').focus();
    await page.locator('#APjFqb123').pressSequentially("iphone", {delay: 1000});
});