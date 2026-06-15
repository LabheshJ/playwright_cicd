import * as fs from 'fs';
import * as path from 'path';

export class TestData {
  private static testData: any = null;

  /**
   * Load test data from JSON file
   */
  static loadTestData(): any {
    if (this.testData === null) {
      const filePath = path.join(__dirname, '../fixtures/testData.json');
      const rawData = fs.readFileSync(filePath, 'utf-8');
      this.testData = JSON.parse(rawData);
    }
    return this.testData;
  }

  /**
   * Get valid user data
   */
  static getValidUser(): any {
    return this.loadTestData().validUser;
  }

  /**
   * Get invalid user data
   */
  static getInvalidUser(): any {
    return this.loadTestData().invalidUser;
  }

  /**
   * Get new user data for registration
   */
  static getNewUser(): any {
    return this.loadTestData().newUser;
  }

  /**
   * Get test URLs
   */
  static getTestUrls(): any {
    return this.loadTestData().testUrls;
  }

  /**
   * Get specific data by key
   */
  static getDataByKey(key: string): any {
    return this.loadTestData()[key];
  }

  /**
   * Generate random email
   */
  static generateRandomEmail(): string {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 10000);
    return `testuser${timestamp}${randomNum}@example.com`;
  }

  /**
   * Generate random string
   */
  static generateRandomString(length: number = 10): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
}
