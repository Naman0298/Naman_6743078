import test from "@playwright/test";

test("get by methods", async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.getByLabel("Username",{exact:true}).type("student")
    await page.getByLabel("Password").fill("Password123")
    await page.getByLabel("Password").isVisible()
    // await page.getByRole("textbox",{name:"username",exact:true}).fill("naman")
    // await page.getByPlaceholder("Enter your name")

})