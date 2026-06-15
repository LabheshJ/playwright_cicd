import {test, Browser, Page} from '@playwright/test';
import {chromium} from 'playwright';
import path from 'Path';
import { Buffer } from 'buffer';

test('file upload', async()=>{
    const browser:Browser = await chromium.launch({headless: false, channel:'chrome'});
    const page:Page = await browser.newPage();
   
    await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html");
   /* const filePath = "C:\\Users\\labhesh\\Downloads\\image (1).png";
    await page.setInputFiles('input[name="upfile"]', filePath);
      await page.waitForTimeout(2000);
    // deselect the file
    await page.locator('input[name="upfile"]').setInputFiles([]);
    await page.waitForTimeout(2000);
*/
    // buffer file upload
    await page.locator("input[name='upfile']").setInputFiles({
        name: 'image.png',
        mimeType: 'image/png',
        buffer: Buffer.from('this is a sample file upload test')
    });
    await page.waitForTimeout(5000);


    await page.waitForTimeout(5000);
    await browser.close();
});
// test for multiple file upload
test('multiple file upload', async () => {
    const browser: Browser = await chromium.launch({
        headless: false,
        channel: 'chrome'
    });

    const page: Page = await browser.newPage();

    await page.goto('https://www.ilovepdf.com/pdf_to_word');

    await page.locator('input[type="file"]').setInputFiles([
        'C:\\Users\\labhesh\\Downloads\\Invoice-EXC2RP4N-0002.pdf',
        'C:\\Users\\labhesh\\Downloads\\Invoice-OANSK5QO-0002.pdf'
    ]);

    await page.waitForTimeout(5000);

    await browser.close();
});