import { test } from '@playwright/test';

test('Top phone', async ({ page }) => {

  await page.goto('https://www.amazon.in/s?k=mobile+phones');

  const firstPhone = page.locator('[data-component-type="s-search-result"]').first();
  await firstPhone.waitFor();

  const name = await firstPhone.locator('h2 span').innerText();

  const price = await firstPhone.locator('.a-price-whole').first().innerText();

  console.log("Top Phone:", name);
  console.log("Price: ₹" + price);

});