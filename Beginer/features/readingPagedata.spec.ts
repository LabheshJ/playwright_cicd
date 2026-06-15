import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'


test('Reading page data',async()=>{
    const fbrowser:Browser = await firefox.launch({headless: false});
    const page:Page = await fbrowser.newPage();

    await page.goto("https://playwright.dev/");
    /*// get page title
    const headingText = await page.locator('[class="hero__title heroTitle_ohkl"]').textContent();
    console.log(headingText); 
    // read an attribute value
    const href = await page.locator('[class="getStarted_Sjon"]').getAttribute('href');
    console.log(href);
        await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const emailID:Locator = await page.locator('#input-email');
    const password:Locator = await page.locator('#input-password');
    const loginBtn:Locator= await page.locator("[value='Login']");

    await emailID.fill("Abc@testing.com");
    const value = await page.locator('#input-email').inputValue();
    console.log(value); */

    // count how many links are there on the page
    const allLinks = await page.locator('a'); 
    const count = await allLinks.count();
    console.log("total links on the page: ", count);






});