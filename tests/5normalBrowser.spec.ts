// open browser without incognito mode
import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('login test',async()=>{
  
  // const fbrowser:Browser = await firefox.launch({headless: false});
   const fbrowser: BrowserContext = await chromium.launchPersistentContext('',{headless: false, channel: 'chromium'});
   // const fbrowser:Browser = await chromium.launch({headless: false, channel: 'chromium'});
    //const page:Page = await fbrowser.newPage();
    const pages =fbrowser.pages();// 2 page
    
    const page: Page = pages[0] as Page ;


   await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
   //await page.pause();
    const emailID:Locator = await page.locator('#input-email');
   const password:Locator = await page.locator('#input-password');
   const loginBtn:Locator= await page.locator("[value='Login']");

   await emailID.fill("Abc@testing.com");
   await password.fill("Simform@123");
   await loginBtn.click();
   

   const title= await page.title();
   console.log("home page title: ", title);

   await page.screenshot({path: 'homepage.png'});

   expect(title).toEqual('My Account');


   
   
    // Open new tab in same persistent context
    const page2: Page = await fbrowser.newPage();

    await page2.goto(
        'https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=20_27'
    );
await page.close();
    console.log('Second Tab Title:', await page2.title());

    await page2.pause();
   
   fbrowser.close();

    




});