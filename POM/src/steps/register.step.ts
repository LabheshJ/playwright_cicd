import { Page } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';

export class RegisterStep {
    private registerPage: RegisterPage;

    constructor(page: Page) {
        this.registerPage = new RegisterPage(page);
    }

    async registerUser() {
        const username = `john${Date.now()}`;

        await this.registerPage.fillRegistrationForm(
    'John',
    'Doe',
    '123 Main St',
    'Ahmedabad',
    'Gujarat',
    '380001',
    '9876543210',
    '123456789',
    username,
    'Password123'
        );

        await this.registerPage.submitRegistrationForm();
    }
}