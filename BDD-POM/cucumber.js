module.exports = {
  default: {
    require: ['src/stepDefinitions/**/*.ts', 'src/hooks/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: [
      'progress-bar',
      'html:reports/cucumber-report.html',
      'json:reports/cucumber-report.json',
      'junit:reports/cucumber-report.xml'
    ],
    formatOptions: { snippetInterface: 'async-await' },
    timeout: 30000
  },
  chrome: {
    require: ['src/stepDefinitions/**/*.ts', 'src/hooks/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: [
      'progress-bar',
      'html:reports/cucumber-report-chrome.html',
      'json:reports/cucumber-report-chrome.json'
    ],
    formatOptions: { snippetInterface: 'async-await' },
    timeout: 30000
  },
  firefox: {
    require: ['src/stepDefinitions/**/*.ts', 'src/hooks/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: [
      'progress-bar',
      'html:reports/cucumber-report-firefox.html',
      'json:reports/cucumber-report-firefox.json'
    ],
    formatOptions: { snippetInterface: 'async-await' },
    timeout: 30000
  },
  webkit: {
    require: ['src/stepDefinitions/**/*.ts', 'src/hooks/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: [
      'progress-bar',
      'html:reports/cucumber-report-webkit.html',
      'json:reports/cucumber-report-webkit.json'
    ],
    formatOptions: { snippetInterface: 'async-await' },
    timeout: 30000
  },
  ui: {
    require: ['src/stepDefinitions/**/*.ts', 'src/hooks/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: ['progress-bar'],
    timeout: 30000,
    formatOptions: { snippetInterface: 'async-await' },
    parallel: 1
  },
  debug: {
    require: ['src/stepDefinitions/**/*.ts', 'src/hooks/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: ['progress-bar', 'json:reports/cucumber-report-debug.json'],
    timeout: 30000,
    formatOptions: { snippetInterface: 'async-await' },
    dryRun: false
  }
};
