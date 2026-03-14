import { test } from "@playwright/test";
import fs from "fs"
import path from "path"
import Example from "../PageObjectodel/example.page";

test("", async ({ page }) => {
    let examplepage = new Example(page)
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await examplepage.usernameTF.fill("student")
    await examplepage.passwordTF.fill("Password123")
    await examplepage.submitBtn.click()
    await page.waitForTimeout(5000)
})

test.only("json data", async ({ page }) => {
    let examplepage = new Example(page)
    let data = JSON.parse(fs.readFileSync(path.join(__dirname, "../testdata/data.json"), "utf-8"))
    await page.goto(data[0].url)
    await examplepage.usernameTF.fill(data[0].username)
    await examplepage.passwordTF.fill(data[0].password)
    await examplepage.submitBtn.click()
    await page.waitForTimeout(5000)
})