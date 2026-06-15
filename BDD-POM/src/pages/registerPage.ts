import { Page } from '@playwright/test';

export class RegisterPage {

    constructor(private page: Page) {}

    async navigateToRegisterPage() {
        await this.page.goto(
            'https://parabank.parasoft.com/parabank/register.htm'
        );
    }

    async fillRegistrationForm(
        firstName: string,
        lastName: string,
        address: string,
        city: string,
        state: string,
        zipCode: string,
        phone: string,
        ssn: string,
        username: string,
        password: string
    ) {
        // Fixed locators - removed dot notation, using proper CSS selectors
        await this.page.locator('input[name="customer.firstName"]').fill(firstName);
        await this.page.locator('input[name="customer.lastName"]').fill(lastName);
        await this.page.locator('input[name="customer.address.street"]').fill(address);
        await this.page.locator('input[name="customer.address.city"]').fill(city);
        await this.page.locator('input[name="customer.address.state"]').fill(state);
        await this.page.locator('input[name="customer.address.zipCode"]').fill(zipCode);
        await this.page.locator('input[name="customer.phoneNumber"]').fill(phone);
        await this.page.locator('input[name="customer.ssn"]').fill(ssn);
        await this.page.locator('input[name="customer.username"]').fill(username);
        await this.page.locator('input[name="customer.password"]').fill(password);
        await this.page.locator('input[name="repeatedPassword"]').fill(password);
    }

    async clickRegisterButton() {
        await this.page.locator('input[value="Register"]').click();
    }
}