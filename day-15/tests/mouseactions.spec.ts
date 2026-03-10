// import test from "@playwright/test";

// test("Mouse Actions", async ({ page }) => {
// await page.goto("https://demoapps.qspiders.com/ui/clickHold")
// await page.locator("#btn_a").click({ button: "right", clickCount: 2, force: true })
// await page.locator("#btn_a").dblclick()
// await page.locator("").hover()
// await page.locator("#btn_a").hover()
// await page.mouse.down()
// await page.mouse.up()
// await page.mouse.move(602.484375, 283.96875);
// await page.mouse.down();
// await page.waitForTimeout(4000);
// await page.mouse.up();





import { test } from "@playwright/test";

test("Mouse Actions", async ({ page }) => {

    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2");


    // Mobile Charger
    await page.locator("//div[text()='Mobile Charger']").hover();
    await page.mouse.down();
    await page.locator("//div[text()='Mobile Accessories']").hover();
    await page.mouse.up();


    // Laptop Charger
    await page.locator("//div[text()='Laptop Charger']").hover();
    await page.mouse.down();
    await page.locator("//div[text()='Laptop Accessories']").hover();
    await page.mouse.up();

    // Mobile Cover
    await page.locator("//div[text()='Mobile Cover']").hover();
    await page.mouse.down();
    await page.locator("//div[text()='Mobile Accessories']").hover();
    await page.mouse.up();

    // Laptop Cover
    await page.locator("//div[text()='Laptop Cover']").hover();
    await page.mouse.down();
    await page.locator("//div[text()='Laptop Accessories']").hover();
    await page.mouse.up();

    await page.waitForTimeout(5000);
});
