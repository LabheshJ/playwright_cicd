import { test, expect } from '@playwright/test';
import { executeQuery, closeConnection } from '../utils/db';

test.describe('Database Connection Tests', () => {
  test.afterAll(async () => {
    await closeConnection();
  });

  test('employees table should contain data', async () => {
    const employees = await executeQuery(
      'SELECT * FROM employees LIMIT 10'
    );

    console.log('Employees found:', employees.length);

    expect(employees.length).toBeGreaterThan(0);
  });
});