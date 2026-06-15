import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test';
import { chromium  } from 'playwright';

test ('Type character sequentially',async()=>{
    const browser:Browser = await chromium.launch({headless: false, channel:'chrome'});
    const page:Page = await browser.newPage();
    await page.goto("https://www.google.com/");
    await page.locator('#APjFqb').focus();
    await page.locator('#APjFqb').pressSequentially("iphone", {delay: 1000});

    
    await page.waitForTimeout(5000);

});