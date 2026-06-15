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
        await this.page.locator('[id="customer.firstName"]').fill(firstName);
        await this.page.locator('[id="customer.lastName"]').fill(lastName);
        await this.page.locator('[id="customer.address.street"]').fill(address);
        await this.page.locator('[id="customer.address.city"]').fill(city);
        await this.page.locator('[id="customer.address.state"]').fill(state);
        await this.page.locator('[id="customer.address.zipCode"]').fill(zipCode);
        await this.page.locator('[id="customer.phoneNumber"]').fill(phone);
        await this.page.locator('[id="customer.ssn"]').fill(ssn);
        await this.page.locator('[id="customer.username"]').fill(username);
        await this.page.locator('[id="customer.password"]').fill(password);
        await this.page.locator('[id="repeatedPassword"]').fill(password);
    }

    async submitRegistrationForm() {
        await this.page.locator('input[value="Register"]').click();
    }
}