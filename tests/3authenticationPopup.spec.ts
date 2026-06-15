import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import {webkit, chromium, firefox}  from 'playwright'

test('auth test', async()=>{
    const fbrowser:Browser = await firefox.launch({headless: false});
    const browserContext: BrowserContext = await fbrowser.newContext();
    const page: Page = await browserContext.newPage();

    const username= 'admin';
    const password= 'admin';
    const authheader= 'Basic ' + btoa(username+':'+password);
    page.setExtraHTTPHeaders({Authorization: authheader});
    await page.goto('https://the-internet.herokuapp.com/basic_auth');
    //wait
    await page.waitForTimeout(2000);

});

