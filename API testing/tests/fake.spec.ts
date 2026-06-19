import {test} from '@playwright/test';
import {faker} from '@faker-js/faker';

test('Generate random user data', async () => {
  const user = {
    firstName: faker.person.firstName(),
    lastName:  faker.person.lastName(),
    email:     faker.internet.email(),
    password:  faker.internet.password({ length: 12, memorable: false }),
    phone:     faker.phone.number(),
    address:   faker.location.streetAddress(),
  };

    console.log('Random User Data:', user);
});