import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import {webkit, chromium, firefox}  from 'playwright'

test('chaining locator',async()=>{
    const fbrowser:Browser = await firefox.launch({headless: false});
    const page:Page = await fbrowser.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  // chaining selector
    //  await page.locator('form.oxd-form >> input[name="username"] ').fill('labhesh');
     //   await page.waitForTimeout(2000);


     //chaining locator
     const form = page.locator('.oxd-form');
     const loginBtn = page.getByRole('button',{ name: 'Login'});

     await form.locator(loginBtn).click();
     await page.waitForTimeout(2000);

     //await page.locator('.oxd-form').getByRole('button',{ name: 'Login'}).click();


});