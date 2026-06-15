import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('browser context',async()=>{
   const fbrowser:Browser = await firefox.launch({headless: false});
   const browserContext_1: BrowserContext = await fbrowser.newContext();
   const page1: Page = await browserContext_1.newPage();
   // browsercontext 2
   const browserContext_2: BrowserContext = await fbrowser.newContext();
   const page2: Page = await browserContext_2.newPage();


   // browser1

   await page1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
   const emailID1:Locator = await page1.locator('#input-email');
   const password1:Locator = await page1.locator('#input-password');
   const loginBtn1:Locator= await page1.locator("[value='Login']");

   await emailID1.fill("Abc@testing.com");
   await password1.fill("Simform@123");
   await loginBtn1.click();

   // browser 2

   await page2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
   const emailID2:Locator = await page2.locator('#input-email');
   const password2:Locator = await page2.locator('#input-password');
   const loginBtn2:Locator= await page2.locator("[value='Login']");

   await emailID2.fill("admin1242@gmail.com");
   await password2.fill("123456");
   await loginBtn2.click();
   
   //need to close context and after close to parent browser
   await browserContext_1.close();
   await browserContext_2.close();
   fbrowser.close();




    




});