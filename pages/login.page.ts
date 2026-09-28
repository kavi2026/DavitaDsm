import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Davita Village Login Service' });
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByTitle('Login');
  }

  async goto(): Promise<void> {
    await this.page.goto('/dashboard/message');
  }

  async expectLoginForm(): Promise<void> {
    await expect(this.heading).toBeVisible();
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click({ force: true });
  }

  async expectSuccessfulLogin(): Promise<void> {
    await expect(this.page).toHaveURL(/staging\.sync-np\.davita\.com\/dashboard\/message/);
    await expect(this.page).toHaveTitle('DaVita Secure Messaging');
  }
}