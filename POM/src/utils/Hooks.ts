import { Page } from '@playwright/test';

export class Hooks {
  static async clearCookies(page: Page): Promise<void> {
    await page.context().clearCookies();
  }

  static async clearLocalStorage(page: Page): Promise<void> {
    await page.evaluate(() => {
      localStorage.clear();
    });
  }

  static async clearSessionStorage(page: Page): Promise<void> {
    await page.evaluate(() => {
      sessionStorage.clear();
    });
  }

  static async acceptCookies(page: Page, cookieButtonSelector: string): Promise<void> {
    try {
      await page.click(cookieButtonSelector);
    } catch (error) {
      console.log('Cookie button not found or already accepted');
    }
  }
}
