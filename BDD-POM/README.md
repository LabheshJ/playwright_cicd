# BDD + POM Playwright TypeScript Framework

A comprehensive Behavior-Driven Development (BDD) framework using Playwright, TypeScript, and Cucumber for automated browser testing with the Page Object Model (POM) design pattern.

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Writing Tests](#writing-tests)
- [Reporting](#reporting)
- [Debugging](#debugging)

## ✨ Features

- **BDD Framework**: Uses Cucumber for Gherkin-style test scenarios
- **Page Object Model**: Clean separation of test logic and page interactions
- **TypeScript**: Full type safety and better code maintainability
- **Playwright**: Cross-browser testing support (Chromium, Firefox, WebKit)
- **Comprehensive Logging**: Detailed test execution logs
- **Screenshots on Failure**: Automatic screenshot capture when tests fail
- **Video Recording**: Optional video recording of test execution
- **Multiple Profiles**: Different configurations for various test scenarios
- **Test Data Management**: Centralized test data in JSON format
- **Hooks**: Pre and post-test setup/teardown

## 📦 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd BDD-POM
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers** (optional, automatic on first run)
   ```bash
   npx playwright install
   ```

## 📁 Project Structure

```
BDD-POM/
├── features/                      # Gherkin feature files
│   ├── register.feature
│   ├── login.feature
│   └── account.feature
│
├── src/
│   ├── pages/                     # Page Object classes
│   │   ├── RegisterPage.ts
│   │   ├── LoginPage.ts
│   │   └── AccountPage.ts
│   │
│   ├── stepDefinitions/           # Step definitions for Cucumber
│   │   ├── register.steps.ts
│   │   ├── login.steps.ts
│   │   └── account.steps.ts
│   │
│   ├── steps/                     # Business logic step classes
│   │   ├── RegisterStep.ts
│   │   ├── LoginStep.ts
│   │   └── AccountStep.ts
│   │
│   ├── hooks/                     # Before/After hooks
│   │   └── Hooks.ts
│   │
│   ├── utils/                     # Utility classes
│   │   ├── BasePage.ts            # Base page with common methods
│   │   ├── TestData.ts            # Test data management
│   │   └── Helper.ts              # Helper functions
│   │
│   └── fixtures/                  # Test data
│       └── testData.json
│
├── reports/                       # Test reports (generated)
├── screenshots/                   # Screenshot on failure (generated)
├── cucumber.js                    # Cucumber configuration
├── playwright.config.ts           # Playwright configuration
├── tsconfig.json                  # TypeScript configuration
├── package.json                   # Dependencies
└── README.md
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
BROWSER=chromium              # chromium, firefox, webkit
HEADLESS=true                # Run in headless mode
RECORD_VIDEO=false           # Record video during tests
BASE_URL=https://example.com # Base URL for tests
```

### Playwright Configuration

Edit `playwright.config.ts` to customize:
- Browser launch options
- Viewport size
- Screenshot/video settings
- Timeout values

### Cucumber Configuration

Edit `cucumber.js` to customize:
- Feature file location
- Step definition file location
- Report formats
- Parallel execution

## 🚀 Running Tests

### Run all tests
```bash
npm test
```

### Run tests on specific browser
```bash
npm run test:chrome
npm run test:firefox
npm run test:webkit
```

### Run tests with UI
```bash
npm run test:ui
```

### Run tests in debug mode
```bash
npm run test:debug
```

### Clean reports and screenshots
```bash
npm run clean:reports
```

## ✍️ Writing Tests

### 1. Create a Feature File

Create a new `.feature` file in the `features/` directory:

```gherkin
Feature: My Feature
  Scenario: My Scenario
    Given User navigates to login page
    When User logs in with valid credentials
    Then Account page should be loaded
```

### 2. Create Page Object

```typescript
export class MyPage extends BasePage {
  readonly myElement: Locator;

  constructor(page: Page) {
    super(page);
    this.myElement = page.locator('#my-element');
  }

  async myMethod(): Promise<void> {
    await this.click(this.myElement);
  }
}
```

### 3. Create Step Definition

```typescript
import { Given, When, Then } from '@cucumber/cucumber';

Given('my step', async function () {
  // Implementation
});
```

## 📊 Reporting

After test execution, reports are generated in the `reports/` directory:

- **HTML Report**: `cucumber-report.html`
- **JSON Report**: `cucumber-report.json`
- **JUnit Report**: `cucumber-report.xml`

Open the HTML report in a browser to view detailed test results.

## 🐛 Debugging

### Debug Single Test

```bash
npm run test:debug
```

### View Playwright Inspector

```bash
PWDEBUG=1 npm test
```

### Enable Detailed Logging

Set in your test:
```typescript
page.on('console', msg => console.log(msg.text()));
```

### Screenshots and Videos

- Screenshots are saved in `screenshots/` on test failure
- Videos are saved in `videos/` if enabled in configuration

## 📝 Best Practices

1. **Use Page Object Model**: Keep page elements and actions in dedicated classes
2. **Data-Driven Tests**: Use scenario outlines for multiple data sets
3. **Descriptive Names**: Use clear names for features, scenarios, and steps
4. **Wait Strategies**: Use appropriate wait conditions instead of hardcoded delays
5. **Error Handling**: Add meaningful error messages in assertions
6. **Cleanup**: Always cleanup test data and browser state in hooks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit and push
5. Create a pull request

## 📄 License

This project is licensed under the ISC License.

## 📧 Support

For issues and questions, please open an issue in the repository.

---

**Happy Testing! 🎉**
