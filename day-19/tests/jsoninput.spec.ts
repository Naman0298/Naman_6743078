import { test } from "@playwright/test"
import fs from "fs"
import path from "path"

let data = JSON.parse(fs.readFileSync(path.join(__dirname, "../testdata/data.json"), "utf-8"))

test("for application", async ({ page }) => {
    await page.goto(data[0].url)
    await page.locator("input#username").fill(data[0].username)
    await page.locator("input#password").fill(data[0].password)
    await page.locator("button#submit").click()
    await page.waitForTimeout(5000)
})


test.only("for application using json", async ({ page }) => {
    for (let d of data) {
        let url = d.url
        let username = d.username
        let password = d.password
        await page.goto(url)
        await page.locator("input#username").fill(username)
        await page.locator("input#password").fill(password)
        await page.locator("button#submit").click()
        await page.waitForTimeout(5000)
    }
})