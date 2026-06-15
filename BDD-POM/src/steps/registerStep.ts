import { RegisterPage } from '../pages/registerPage';
import testData from '../fixtures/testData.json';

export class RegisterStep {

    constructor(private registerPage: RegisterPage) {}

    async registerUser() {
        const username = `john${Date.now()}`;
        const newUser = testData.newUser;

        await this.registerPage.fillRegistrationForm(
            newUser.firstName,
            newUser.lastName,
            newUser.address,
            newUser.city,
            newUser.state,
            newUser.zipCode,
            newUser.phoneNumber,
            '123456789',
            username,
            newUser.password
        );
    }
}