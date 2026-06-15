import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import {webkit, chromium, firefox}  from 'playwright'

test('mouse hover', async()=>{

    const fbrowser:Browser = await firefox.launch({headless: false});
    const page:Page = await fbrowser.newPage();
    await page.goto("https://vinothqaacademy.com/mouse-event/");


    await page.locator("[class='collapse navbar-collapse pull-right'] [class='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-14046']").hover();

    await page.locator("[class='collapse navbar-collapse pull-right'] [class='menu-item menu-item-type-post_type menu-item-object-page menu-item-8462']").click();



 await page.waitForTimeout(5000);



});