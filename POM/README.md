# Playwright TypeScript POM BDD

A comprehensive test automation framework using **Playwright**, **TypeScript**, **Page Object Model (POM)**, and **BDD (Cucumber)**.

## 📁 Project Structure

```
├── src/
│   ├── pages/              # Page Object Model classes
│   │   ├── BasePage.ts     # Base page class with common methods
│   │   ├── LoginPage.ts    # Login page object
│   │   ├── HomePage.ts     # Home page object
│   │   └── index.ts        # Exports
│   ├── steps/              # Cucumber step definitions
│   │   └── login.steps.ts  # Login feature steps
│   └── utils/              # Utility classes and helpers
│       ├── TestConfig.ts   # Configuration
│       ├── TestUtils.ts    # Helper utilities
│       └── index.ts        # Exports
├── features/               # Cucumber feature files
│   ├── login.feature       # Login scenarios
│   └── dashboard.feature   # Dashboard scenarios
├── test-results/           # Test execution reports
├── playwright.config.ts    # Playwright configuration
├── cucumber.js             # Cucumber configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies
├── .env.example            # Environment variables example
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd POM-BDD
```

2. Install dependencies:
```bash
npm install
```

3. Setup environment variables:
```bash
cp .env.example .env
```

4. Update `.env` with your configuration:
```
BASE_URL=https://your-application-url.com
BROWSER=chromium
HEADLESS=true
TIMEOUT=30000
```

## 📝 Writing Tests

### Page Object Model (POM)

Create page objects in `src/pages/`:

```typescript
import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class YourPage extends BasePage {
  private elementSelector = '#selector';

  constructor(page: Page) {
    super(page);
  }

  async yourMethod(): Promise<void> {
    await this.click(this.elementSelector);
  }
}
```

### Cucumber Feature Files

Create `.feature` files in `features/`:

```gherkin
Feature: Your Feature
  Scenario: Your Scenario
    Given I navigate to the login page
    When I enter username "user@example.com" and password "password123"
    Then I should see the home page
```

### Step Definitions

Create step definitions in `src/steps/`:

```typescript
import { Given, When, Then } from '@cucumber/cucumber';
import { Page } from '@playwright/test';

Given('step definition', async function () {
  // Step implementation
});
```

## 🏃 Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode
```bash
npm run test:headed
```

### Run tests in parallel
```bash
npm run test:parallel
```

### Debug tests
```bash
npm run test:debug
```

### Generate report
```bash
npm run test:report
```

## 📊 Test Reports

Test results are generated in `test-results/` directory:
- **HTML Report**: `cucumber-report.html`
- **JSON Report**: `cucumber-report.json`
- **JUnit Report**: `junit.xml`

## 🔧 Configuration

### Playwright Config (`playwright.config.ts`)
- Define browser configurations
- Set timeout values
- Configure reporters
- Setup test retries

### Cucumber Config (`cucumber.js`)
- Define step definition paths
- Configure formatters
- Set parallel execution

### TypeScript Config (`tsconfig.json`)
- Compiler options
- Module resolution
- Source map settings

## 📚 Best Practices

1. **POM Pattern**: Keep page objects focused on UI interactions
2. **DRY Principle**: Use BasePage for common methods
3. **Meaningful Selectors**: Use stable, meaningful selectors
4. **Step Definitions**: Keep steps independent and reusable
5. **Data Management**: Use `@Before` and `@After` hooks for setup/teardown
6. **Error Handling**: Implement proper wait strategies and error handling

## 🐛 Debugging

### Enable Debug Mode
```bash
npm run test:debug
```

### View Traces
Traces are automatically saved on test failure in `test-results/`

### Screenshots and Videos
Enabled for failed tests by default

## 📦 Dependencies

- **@playwright/test**: ^1.40.0 - Browser automation
- **@cucumber/cucumber**: ^9.5.1 - BDD framework
- **typescript**: ^5.3.3 - Type safety
- **@types/node**: ^20.10.0 - Node.js types

## 🤝 Contributing

1. Create feature files for new scenarios
2. Implement page objects for new pages
3. Write step definitions following existing patterns
4. Ensure all tests pass before submitting

## 📄 License

ISC

## 🔗 Resources

- [Playwright Documentation](https://playwright.dev)
- [Cucumber Documentation](https://cucumber.io)
- [TypeScript Documentation](https://www.typescriptlang.org)

---

Happy Testing! 🎉
