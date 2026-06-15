import { Before, After } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium, firefox, webkit } from '@playwright/test';

let browser: Browser | null = null;
let context: BrowserContext;
let page: Page;
let browserInitialized = false;

// Extend global namespace
declare global {
  var page: Page;
  var browser: Browser;
  var context: BrowserContext;
}

/**
 * Hook to initialize browser and create context before each scenario
 */
Before(async function () {
  // Initialize browser only once
  if (!browserInitialized) {
    const browserType = process.env.BROWSER || 'chromium';
    
    switch (browserType.toLowerCase()) {
      case 'firefox':
        browser = await firefox.launch({ headless: !(process.env.HEADLESS === 'false') });
        break;
      case 'webkit':
        browser = await webkit.launch({ headless: !(process.env.HEADLESS === 'false') });
        break;
      case 'chromium':
      default:
        browser = await chromium.launch({ headless: !(process.env.HEADLESS === 'false') });
    }

    browserInitialized = true;
    console.log(`Browser ${browserType} launched`);
  }

  // Create new context and page for each scenario
  if (browser) {
    context = await browser.newContext({
      viewport: { width: 1280, height: 720 },
      recordVideo: process.env.RECORD_VIDEO === 'true' ? { dir: 'videos/' } : undefined,
    });

    page = await context.newPage();
    
    // Store page and browser in global scope for access in step definitions
    global.page = page;
    global.browser = browser;
    global.context = context;

    console.log('New browser context and page created');
  }
});

/**
 * Hook to close browser context and page after each scenario
 */
After(async function (scenario: any) {
  // Take screenshot on failure
  if (scenario.result?.status === 'FAILED' && page) {
    const screenshotPath = `screenshots/${scenario.pickle.name}-${Date.now()}.png`;
    try {
      await page.screenshot({ path: screenshotPath });
      console.log(`Screenshot taken: ${screenshotPath}`);
    } catch (error) {
      console.error(`Failed to take screenshot: ${error}`);
    }
  }

  if (page) {
    try {
      await page.close();
    } catch (error) {
      console.error(`Error closing page: ${error}`);
    }
  }

  if (context) {
    try {
      await context.close();
    } catch (error) {
      console.error(`Error closing context: ${error}`);
    }
  }

  console.log('Browser context and page closed');
});
