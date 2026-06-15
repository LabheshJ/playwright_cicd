import { test, Page, Browser } from '@playwright/test';
import { firefox } from 'playwright';

test("slider demo", async () => {
    let fbrowser!: Browser;
    let fpage!: Page;

    await test.step("goto website", async () => {
        fbrowser = await firefox.launch({ headless: false });
        fpage = await fbrowser.newPage();
        await fpage.goto("https://groww.in/calculators/sip-calculator");
        await fpage.waitForLoadState('networkidle');
    });

    await test.step("handle slider", async () => {
        await fpage.waitForSelector("#MONTHLY_INVESTMENT");

        // Set Monthly Investment to 50000
        await setInputValue(fpage, "#MONTHLY_INVESTMENT", "88500");

        // Set Return Rate to 18
        await setInputValue(fpage, "#RETURN_RATE", "11");

        // Set Time Period to 25
        await setInputValue(fpage, "#TIME_PERIOD", "25");

        // Verify results are visible
        console.log('Monthly:', await fpage.locator("#MONTHLY_INVESTMENT").inputValue());
        console.log('Rate:',    await fpage.locator("#RETURN_RATE").inputValue());
        console.log('Period:',  await fpage.locator("#TIME_PERIOD").inputValue());

        await fpage.waitForTimeout(2000); // pause to see result
        await fbrowser.close();
    });
});

async function setInputValue(page: Page, selector: string, value: string) {
    const input = page.locator(selector);

    // Triple click selects all existing text, then type new value
    await input.click({ clickCount: 3 });
    await input.fill(value);
    await input.press('Tab'); // Tab triggers React's onChange to sync slider

    // Verify it took
    const actual = await input.inputValue();
    console.log(`Set ${selector} → expected: ${value}, actual: ${actual}`);
}