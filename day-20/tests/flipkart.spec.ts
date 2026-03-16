import { test } from "@playwright/test";

test("Flipkart Gudi Padwa shopping", async ({ page }) => {

    await page.goto('https://www.flipkart.com');
    await page.waitForTimeout(3000);
    const closeBtn = page.getByRole('button', { name: '✕' });
    if (await closeBtn.isVisible()) {
        await closeBtn.click();
    }

    await page.locator('//div[text()="Home"]').click();

    await page.mouse.wheel(0, 2000);

    await page.locator('img[alt="Image"][srcset="https://rukminim2.flixcart.com/fk-p-flap/110/110/image/88e557198b04f01c.png?q=80 1x, https://rukminim2.flixcart.com/fk-p-flap/220/220/image/88e557198b04f01c.png?q=60 2x, "]').click();

    await page.locator('img[alt="Image"][srcset="https://rukminim2.flixcart.com/fk-p-flap/110/150/image/f63af45677b331e7.jpg?q=80 1x, https://rukminim2.flixcart.com/fk-p-flap/220/300/image/f63af45677b331e7.jpg?q=60 2x, "]').click();


    const products = page.locator('div[class="RGLWAk"]');

    const [page1] = await Promise.all([
        page.context().waitForEvent("page"),
        products.nth(4).click()
    ]);

    await page1.waitForLoadState();
    await page1.locator('//div[text()="Add to cart"]').click();
    await page1.close();

    const [page2] = await Promise.all([
        page.context().waitForEvent("page"),
        products.nth(7).click()
    ]);

    await page2.waitForLoadState();
    await page2.locator('//div[text()="Add to cart"]').click();
    await page2.close();

    await page.locator('//span[text()="Cart"]').click();
    await page.locator('button[class="YRzP7Q"]').nth(1).click();
    await page.locator('button[class="YRzP7Q"]').nth(1).click();
    await page.locator('button[class="YRzP7Q"]').nth(3).click();
    await page.locator('button[class="YRzP7Q"]').nth(3).click();
    await page.locator('button[class="YRzP7Q"]').nth(3).click();

    await page.locator('//span[text()="Place Order"]').click()


    await page.waitForTimeout(5000)
});