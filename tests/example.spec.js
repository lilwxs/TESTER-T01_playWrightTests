// @ts-check
const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('royal_email').click();
  await page.getByTestId('royal_email').fill('hoangthaininhpark.241102@gmail.com');
  await page.getByTestId('royal_pass').click();
  await page.getByTestId('royal_pass').fill('LilWxs021124');
  await page.getByTestId('royal_login_button').click();
  await page.getByRole('button', { name: 'Bellies ơi, bạn đang nghĩ gì thế?' }).click();
  await page.getByRole('paragraph').click();
  await page.getByLabel('Bellies ơi, bạn đang nghĩ gì thế?').fill('Hãy thường xuyên ngủ sớm nhé, chứ thức nhiều có hại sk!');
  await page.getByLabel('Đăng', { exact: true }).click();
});