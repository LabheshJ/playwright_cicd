// tests/performance/lighthouse.spec.ts
import { test } from '@playwright/test';
import { playAudit } from 'playwright-lighthouse';
import { chromium } from '@playwright/test';

test('Lighthouse audit — homepage', async () => {
  // Must use Playwright with a debugging port for Lighthouse
  const browser = await chromium.launch({
    args: ['--remote-debugging-port=9222'],
  });

  const page = await browser.newPage();
  await page.goto('https://playwright.dev/');

  const result = await playAudit({
    page,
    port: 9222,
    thresholds: {
      performance:   80,   // Score out of 100
      accessibility: 90,
      'best-practices': 85,
      seo:           80,
    },
    reports: {
      formats: { html: true, json: true },
      directory: 'lighthouse-reports',
      name: 'homepage-audit',
    },
  });

  // Assertions on specific metrics
const audits = result.lhr.audits;

console.log(
  'LCP:',
  audits['largest-contentful-paint']?.displayValue
);

console.log(
  'CLS:',
  audits['cumulative-layout-shift']?.displayValue
);

console.log(
  'FCP:',
  audits['first-contentful-paint']?.displayValue
);

console.log(
  'TTFB:',
  audits['server-response-time']?.displayValue
);

  await browser.close();
});