/**
 * Global Type Declarations
 */

import { Page } from '@playwright/test';

// Extend global namespace
declare global {
  namespace NodeJS {
    interface Global {
      page: Page;
      browser: any;
      context: any;
    }
  }

  interface Window {
    __testData__?: Record<string, any>;
  }
}

export {};
