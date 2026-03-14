import { test } from "@playwright/test"
import excel from "exceljs"
import path from "path"
test("Write in an excel file", async ({ page }) => {

  let book = new excel.Workbook()
  await book.xlsx.readFile(
    path.join(__dirname, "../testdata/readexcel.xlsx")
  )

  let sheet = book.getWorksheet("Sheet4")
  if (!sheet) {
    sheet = book.addWorksheet("Sheet4")
  }
  for (let i = 1; i <= 10; i++) {
    sheet.getRow(i).getCell(1).value = "Playwright"
  }
  await book.xlsx.writeFile(
    path.join(__dirname, "../testdata/readexcel.xlsx")
  )

})