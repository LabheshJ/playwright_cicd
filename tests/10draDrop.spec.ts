import { test, Page, Browser, expect } from '@playwright/test';
import { firefox } from 'playwright';

test("slider demo", async () => {
    let fbrowser!: Browser;
    let fpage!: Page;

    await test.step("goto website", async () => {
        fbrowser = await firefox.launch({ headless: false });
        fpage = await fbrowser.newPage();
        await fpage.goto("https://vinothqaacademy.com/mouse-event/");
        await fpage.waitForLoadState('networkidle');
    });

    await test.step("handle drag & Drop", async () => {

        await fpage.locator('#dragItem').dragTo(fpage.locator('#dropZone'));
        await expect(fpage.locator("#dragStatus")).toContainText("Dropped Successfully");


 
    });
});