import test from "@playwright/test";
import path from 'node:path';
// test("Playwright upload and download", async ({ page }) => {

//     console.log(__dirname);
//     console.log(__filename);

//     await page.goto('https://testautomationpractice.blogspot.com/')
//     await page.locator('//*[@id="singleFileInput"]').setInputFiles(['C:/Users/naman/OneDrive/Desktop/Capgemini Training Dev+Test/day-18/tests/uploadfile/demo.txt'])
//     await page.getByRole("button", { name: "Upload Single File" }).click()
//     await page.waitForTimeout(3000)
// })

// test("Playwright upload and download", async ({ page }) => {
//     await page.goto('https://testautomationpractice.blogspot.com/')
//     await page.locator('//*[@id="multipleFilesInput"]').setInputFiles(['C:/Users/naman/OneDrive/Desktop/Capgemini Training Dev+Test/day-18/tests/uploadfile/demo.txt', 'C:/Users/naman/OneDrive/Desktop/Capgemini Training Dev+Test/day-18/tests/uploadfile/demo1.xls'])
//     await page.getByRole("button", { name: "Upload Multiple Files" }).click()
//     await page.waitForTimeout(3000)

// })


test.only("Task 4", async ({ browser }) => {
    let downloadolder = 'C:/Users/naman/OneDrive/Desktop/Capgemini Training Dev+Test/day-18/downloads'
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");
    await page.getByPlaceholder("Enter text here").fill("dhgdhsgxcdgxxkkhdkhdskh");
    await page.getByPlaceholder("Filename").fill("newFile.txt");
    const [downloadfile] = await Promise.all([
        page.waitForEvent("download"),
        page.getByRole("button", { name: 'Download' }).click()
    ])
    // await page.pause();

    let filename = await downloadfile.suggestedFilename()
    await downloadfile.saveAs(path.join(downloadolder, filename))


})
