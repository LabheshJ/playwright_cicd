#!/usr/bin/env node

/**
 * Generate HTML report from Cucumber JSON report
 * Requires: npm install cucumber-html-reporter
 */

const reporter = require('cucumber-html-reporter');
const fs = require('fs');
const path = require('path');

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber-report.json',
  output: 'reports/cucumber-report-detailed.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    'App Version': '1.0.0',
    'Test Environment': process.env.TEST_ENV || 'DEV',
    'Browser': process.env.BROWSER || 'chromium',
    'Platform': process.platform,
    'Execution Time': new Date().toISOString()
  }
};

if (!fs.existsSync(options.jsonFile)) {
  console.error(`Error: JSON report not found at ${options.jsonFile}`);
  console.log('Please run the tests first using: npm test');
  process.exit(1);
}

try {
  const jsonFile = fs.readFileSync(options.jsonFile);
  reporter.generate(options);
  console.log(`✅ Report generated successfully: ${options.output}`);
} catch (error) {
  console.error(`❌ Error generating report: ${error.message}`);
  process.exit(1);
}
