import dotenv from 'dotenv';
import { LoginPage } from '../pages/loginPage';
import userCredentials from '../fixtures/userCredentials.json';

dotenv.config();

export class LoginStep {

    constructor(private loginPage: LoginPage) {}

    async loginUser() {

        const username = userCredentials.username;

        const password = userCredentials.password;

        console.log('======================');
        console.log(`Username: ${username}`);
        console.log(`Password: ${password}`);
        console.log('======================');

        await this.loginPage.login(
            username,
            password
        );
    }
}