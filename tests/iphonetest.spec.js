import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 11'],
});

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?gws_rd=ssl');
  await page.locator('#mib').click();
  await page.locator('#mib').fill('dummy login portal');
  await page.locator('#mib').press('Enter');
  await page.getByRole('button', { name: 'Alle akzeptieren' }).click();
  await page.getByRole('link', { name: 'Test Login - Practice Test' }).click();
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('student');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('heading', { name: 'Logged In Successfully' }).click();
});

