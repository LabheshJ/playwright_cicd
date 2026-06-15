module.exports = {
  default: {
    require: ['src/steps/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: [
      'progress-bar',
      'html:test-results/cucumber-report.html',
      'json:test-results/cucumber-report.json',
      '@cucumber/pretty-formatter'
    ],
    formatOptions: { snippetInterface: 'async-await' },
    parallel: 2
  }
};
