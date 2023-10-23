// @ts-check
const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('royal_email').click();
  await page.getByTestId('royal_email').fill('hoangthaininhpark.241102@gmail.com');
  await page.getByTestId('royal_pass').click();
  await page.getByTestId('royal_pass').fill('LilWxs021124');
  await page.getByTestId('royal_login_button').click();
  await expect(page).toHaveURL('https://www.facebook.com/');
});