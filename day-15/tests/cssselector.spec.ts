import {test} from "@playwright/test"

test("MX player click", async({page})=>{
    await page.goto('https://www.amazon.com/')
    await page.waitForTimeout(2000);
    await page.getByTestId('nav_avod_desktop_topnav').waitFor({state:"detached"})
    await page.waitForSelector("//a[text()='MX Player']");
})