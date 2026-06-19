import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('homepage has no accessibility violations', async ({ page }) => {
  await page.goto('https://www.patanjaliayurved.net/');

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa']) // WCAG standards
    .analyze();

  // Filter out known/acceptable violations
  const violations = results.violations.filter(
    v => v.id !== 'color-contrast' // example: known brand color issue
  );

  if (violations.length > 0) {
    console.log(
      'Accessibility violations:',
      violations.map(v => ({
        id:          v.id,
        impact:      v.impact,
        description: v.description,
        nodes:       v.nodes.length,
      }))
    );
  }

  expect(violations).toHaveLength(0);
});

