import { test, expect } from '@playwright/test';

test('Auth Example', async ({ browser }) => {
  let context = await browser.newContext({ httpCredentials: { username: "admin", password: "admin" } })
  let page = await context.newPage()
  await page.goto('https://the-internet.herokuapp.com/basic_auth')

  const locator = page.locator('//*[@id="content"]/div/p');
  await expect(locator).toHaveText(/Congratulations! You must have the proper credentials./);
  await page.waitForTimeout(3000)
});
