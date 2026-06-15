export class TestConfig {
  static readonly BASE_URL = process.env.BASE_URL || 'https://example.com';
  static readonly BROWSER = process.env.BROWSER || 'chromium';
  static readonly HEADLESS = process.env.HEADLESS !== 'false';
  static readonly SLOW_MO = parseInt(process.env.SLOW_MO || '0', 10);
  static readonly TIMEOUT = parseInt(process.env.TIMEOUT || '30000', 10);
}
