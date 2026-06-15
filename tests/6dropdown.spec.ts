import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import {webkit, chromium, firefox}  from 'playwright'

test ('dropdown',async()=>{

    const fbrowser:Browser = await firefox.launch({headless: false});
    const page:Page = await fbrowser.newPage();

    await page.goto("https://proleed.academy/exercises/selenium/automation-practice-form-with-radio-button-check-boxes-and-drop-down.php");
    // scroll down
    await page.locator('id=nationality').scrollIntoViewIfNeeded();
    const NationalityDropdown = 'id=nationality';
    const countryDropdown= 'id=country';
    const countrycodeDropdown= 'id=country_code';
    await page.selectOption(NationalityDropdown,{value: 'indian'});
    await page.selectOption(countryDropdown,{label:'India'});
    await page.selectOption(countrycodeDropdown,{index:86});
    const allOption = await page.$$('#country_code > option');
    console.log(allOption.length);
    for(const e of allOption){
        const text = await e.textContent();
        console.log(text);
            if(text === 'Japan (+81)'){
                    await page.selectOption(countrycodeDropdown,{label:text});
                    break;

            }
    }
    await page.waitForTimeout(5000);

});
