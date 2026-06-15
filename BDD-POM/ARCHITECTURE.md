/**
 * Project Structure and Architecture Guide
 */

# BDD + POM Framework - Architecture Documentation

## Overview
This is a comprehensive Behavior-Driven Development (BDD) framework using Playwright with TypeScript, following the Page Object Model (POM) design pattern.

## Directory Structure Explained

### `/features` - Gherkin Scenarios
Contains feature files written in Gherkin language (human-readable BDD syntax).
- **Purpose**: Define business-readable test scenarios
- **Format**: `.feature` files
- **Example**: `register.feature`, `login.feature`, `account.feature`

### `/src/pages` - Page Objects
Contains page object classes that encapsulate page elements and interactions.

**Best Practices:**
- One class per page/screen
- Extend `BasePage` for common functionality
- Use descriptive locator names
- Keep methods focused and reusable
- Document complex interactions

**Files:**
- `RegisterPage.ts` - All register page interactions
- `LoginPage.ts` - All login page interactions
- `AccountPage.ts` - All account page interactions

### `/src/stepDefinitions` - Cucumber Steps
Maps Gherkin steps to TypeScript implementation.

**Best Practices:**
- Follow Given/When/Then pattern
- Keep step implementations simple
- Delegate business logic to Step classes
- Use descriptive step names
- Handle parameters in step expressions

**Files:**
- `register.steps.ts` - Registration feature steps
- `login.steps.ts` - Login feature steps
- `account.steps.ts` - Account feature steps

### `/src/steps` - Business Logic
Contains business logic and orchestration of page interactions.

**Best Practices:**
- Separate test logic from page interactions
- Combine multiple page actions for a single business operation
- Handle test data transformation
- Implement complex assertions
- Act as bridge between steps and pages

**Files:**
- `RegisterStep.ts` - Registration business logic
- `LoginStep.ts` - Login business logic
- `AccountStep.ts` - Account business logic

### `/src/hooks` - Test Lifecycle
Manages browser setup/teardown and test fixtures.

**Features:**
- Browser initialization before tests
- Page context creation per scenario
- Screenshot capture on failure
- Video recording (optional)
- Cleanup after tests

**File:**
- `Hooks.ts` - Before/After hooks for scenarios

### `/src/utils` - Utilities
Shared utilities and helper functions.

**BasePage.ts:**
- Common page interactions (click, fill, wait, etc.)
- Navigation helpers
- Element verification methods
- Screenshot functionality
- Base class for all pages

**TestData.ts:**
- Load test data from JSON
- Generate random test data
- Provide data access methods
- Email/string generation

**Helper.ts:**
- Page load waiting
- Logging utilities
- Email/password validation
- Retry logic
- Test report generation

### `/src/fixtures` - Test Data
JSON files containing test data used across scenarios.

**testData.json:**
- Valid user credentials
- Invalid user credentials
- New user registration data
- Test URLs
- Other static test data

### `/reports` - Test Results
Generated automatically after test execution.

**Contains:**
- `cucumber-report.html` - HTML report
- `cucumber-report.json` - JSON format
- `cucumber-report.xml` - JUnit XML format

### `/screenshots` - Failure Screenshots
Automatically captured when tests fail.
- Named with timestamp and scenario name
- Useful for debugging failures

## Design Patterns Used

### 1. Page Object Model (POM)
```
Feature File (Gherkin)
    ↓
Step Definition
    ↓
Step Class (Business Logic)
    ↓
Page Object (UI Interactions)
    ↓
Playwright/Browser
```

### 2. Single Responsibility Principle
- Pages: UI element interaction only
- Steps: Business logic orchestration
- Step Definitions: Gherkin mapping only
- Hooks: Lifecycle management

### 3. DRY (Don't Repeat Yourself)
- BasePage for common methods
- TestData for centralized test data
- Helper for reusable utilities

## Configuration Files

### `cucumber.js`
- Defines Cucumber profiles (chrome, firefox, webkit)
- Sets up reporting formats
- Configures feature/step file paths
- Parallel execution settings

### `playwright.config.ts`
- Browser configuration
- Viewport settings
- Screenshot/video options
- Timeout configurations
- Device emulation

### `tsconfig.json`
- TypeScript compilation settings
- Path aliases for imports (@pages, @steps, etc.)
- Source map generation
- Strict type checking

### `package.json`
- Project metadata
- npm scripts for running tests
- Dependencies and dev dependencies
- Test profiles

### `.env.example`
- Template for environment variables
- Browser selection
- Headless mode
- Video recording options
- Base URL configuration

## Execution Flow

1. **Test Initialization**
   - Hook: BeforeAll - Launch browser
   - Hook: Before - Create context and page

2. **Scenario Execution**
   - Given: Setup test state
   - When: Perform actions
   - Then: Verify results

3. **Error Handling**
   - Hook: After (on failure) - Take screenshot
   - Collect error details

4. **Cleanup**
   - Hook: After - Close page and context
   - Hook: AfterAll - Close browser
   - Generate reports

## Adding New Tests

### 1. Create Feature File
```gherkin
Feature: New Feature
  Scenario: New Scenario
    Given precondition
    When action
    Then verification
```

### 2. Create Page Object
```typescript
export class NewPage extends BasePage {
  readonly element: Locator;
  async interaction(): Promise<void> { }
}
```

### 3. Create Step Class
```typescript
export class NewStep {
  async businessLogic(): Promise<void> { }
}
```

### 4. Create Step Definitions
```typescript
Given('step text', async function () {
  await newStep.businessLogic();
});
```

## Running Tests

```bash
npm test                    # All tests
npm run test:chrome        # Chrome only
npm run test:firefox       # Firefox only
npm run test:webkit        # WebKit only
npm run test:ui            # UI mode
npm run test:debug         # Debug mode
npm run clean:reports      # Clean reports
```

## Tips & Best Practices

1. **Naming Conventions**
   - Use descriptive, action-oriented names
   - Example: `clickLoginButton()` not `click()`

2. **Assertions**
   - Verify state changes, not implementation
   - Use meaningful error messages

3. **Test Data**
   - Keep sensitive data in .env file
   - Use fixtures for reusable data
   - Generate dynamic data when needed

4. **Wait Strategies**
   - Wait for elements to be visible/stable
   - Avoid hardcoded setTimeout
   - Use waitForNavigation when appropriate

5. **Error Handling**
   - Provide clear error messages
   - Capture screenshots on failure
   - Log important steps for debugging

6. **Performance**
   - Parallelize tests when possible
   - Reuse browser contexts
   - Minimize test dependencies

7. **Maintainability**
   - Keep pages focused on UI
   - Keep steps focused on business logic
   - DRY principle throughout
   - Document complex scenarios
