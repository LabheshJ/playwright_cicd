import { Page } from '@playwright/test';

export class TestUtils {
  static async waitForElement(page: Page, selector: string, timeout: number = 5000): Promise<void> {
    await page.waitForSelector(selector, { timeout });
  }

  static async takeScreenshot(page: Page, filename: string): Promise<void> {
    await page.screenshot({ path: `./test-results/screenshots/${filename}.png` });
  }

  static async getPageTitle(page: Page): Promise<string> {
    return await page.title();
  }

  static async goToURL(page: Page, url: string): Promise<void> {
    await page.goto(url);
  }

  static async getCurrentURL(page: Page): Promise<string> {
    return page.url();
  }
}
