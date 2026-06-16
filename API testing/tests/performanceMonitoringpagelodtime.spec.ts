import { test, expect } from '@playwright/test';

test('measure page load performance', async ({ page }) => {
  await page.goto('https://playwright.dev/', { waitUntil: 'networkidle' });

  // Collect browser Navigation Timing metrics
  const metrics = await page.evaluate(() => {
    const t = performance.timing;
    return {
      // DNS lookup
      dnsLookup:        t.domainLookupEnd - t.domainLookupStart,
      // TCP connection
      tcpConnect:       t.connectEnd - t.connectStart,
      // Server response time (TTFB)
      ttfb:             t.responseStart - t.requestStart,
      // Page download
      pageDownload:     t.responseEnd - t.responseStart,
      // DOM parsing
      domParsing:       t.domInteractive - t.responseEnd,
      // DOM content loaded
      domContentLoaded: t.domContentLoadedEventEnd - t.navigationStart,
      // Full page load
      totalLoad:        t.loadEventEnd - t.navigationStart,
    };
  });

  console.table(metrics);

  // Assert performance thresholds
  expect(metrics.ttfb,             'TTFB should be under 800ms').toBeLessThan(800);
  expect(metrics.domContentLoaded, 'DCL should be under 3000ms').toBeLessThan(3000);
  expect(metrics.totalLoad,        'Total load under 5000ms').toBeLessThan(5000);
});