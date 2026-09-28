import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import users from '../test-data/users.json';

function requiredEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

for (const user of users) {
  test(`logs in as ${user.name}`, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.expectLoginForm();
    await loginPage.login(
      requiredEnv(user.usernameEnv),
      requiredEnv(user.passwordEnv),
    );
    await loginPage.expectSuccessfulLogin();
  });
}