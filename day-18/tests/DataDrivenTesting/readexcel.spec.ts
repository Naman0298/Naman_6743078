import test from "@playwright/test";
import excel from "exceljs"
import path from "node:path"
test("reading test data", async ({ page }) => {
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname, "../../testdata/readexcel.xlsx"))
    let sheet = await book.getWorksheet("Sheet1")
    let data = await sheet?.getRow(1).getCell(2).toString();
    console.log(data);
})

test("reading test data in another sheet", async ({ page }) => {
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname, "../../testdata/readexcel.xlsx"))
    let sheet = await book.getWorksheet("Sheet2")
    for (let i = 1; i <= sheet?.rowCount; i++) {
        for (let j = 1; j <= sheet?.columnCount; j++) {
            let data = await sheet?.getRow(i).getCell(j).toString();
            console.log(data);
        }
    }
})

test("filling data using sheet", async ({ page }) => {
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname, "../../testdata/readexcel.xlsx"))
    let sheet = book.getWorksheet("Sheet3")
    for (let i = 1; i <= sheet!.rowCount; i++) {
        const row = sheet!.getRow(i)
        const url = row.getCell(1).text
        const name = row.getCell(2).text
        const email = row.getCell(3).text
        const password = row.getCell(4).text
        await page.goto(url)
        await page.locator('#name').fill(name)
        await page.locator('#email').fill(email)
        await page.locator('#password').fill(password)
        await page.locator('button[type="submit"]').click()
        await page.waitForTimeout(2000)
    }
})


test.only("readexcel task login", async ({ page }) => {
    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname, "../../testdata/readexcel.xlsx"));
    let sheet = book.getWorksheet("Sheet3");

    let pageLink = await sheet?.getRow(1).getCell(1).toString();


    for (let i = 2; i <= sheet?.actualRowCount; i++) {
        await page.goto(pageLink);
        for (let j = 1; j <= sheet?.actualColumnCount; j++) {
            let data = await sheet?.getRow(i).getCell(j).toString();
            if (j == 1) {
                await page.getByPlaceholder("Enter your name").fill(data);
            }
            if (j == 2) {
                await page.getByPlaceholder("Enter your email").fill(data);
            }
            if (j == 3) {
                await page.getByPlaceholder("Enter your password").fill(data);
            }
        }
        await page.getByRole("button", { name: "Register" }).click();
    }

})