import { test } from "@playwright/test"
import excel from "exceljs"
import path from "path"
test("importing data from amazon to excel", async ({ page }) => {

    let book = new excel.Workbook()
    await book.xlsx.readFile(
        path.join(__dirname, "../testdata/readexcel.xlsx")
    )

    let sheet = book.getWorksheet("Sheet5")
    if (!sheet) {
        sheet = book.addWorksheet("Sheet5")
    }


    await page.goto("https://www.amazon.in/")
    await page.locator('input#twotabsearchtextbox').fill('mobile')
    await page.waitForSelector("div[role='gridcell']")
    const option = await page.locator("div[role='gridcell']").all()
    let i = 1
    for (const j of option) {
        const text = await j.textContent()
        sheet.getRow(i).getCell(1).value = text
        i++
    }

    await book.xlsx.writeFile(
        path.join(__dirname, "../testdata/readexcel.xlsx")
    )

})