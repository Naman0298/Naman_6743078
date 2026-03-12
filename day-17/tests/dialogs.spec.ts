import test from "@playwright/test";

test("Dialogue box tick", async ({ page }) => {


    page.on("dialog", async (d) => {
        // await d.accept()
        if (d.type() == "alert") {
            await d.accept("")
        }
        else if (d.type() == "confirm") {
            await d.dismiss()
            await d.message()
        }
        else if (d.type() == "prompt") {
            if (d.defaultValue() == "tom") {
                console.log(await d.defaultValue());
                await d.accept()
            }
            else {
                await d.accept("John Duckin Wick")
            }
            // await d.accept("John Duckin Wick")
            // await d.defaultValue()
        }
    })

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('button#alertBtn[onclick="myFunctionAlert()"]').click()
    await page.locator('button#confirmBtn[onclick="myFunctionConfirm()"]').click()
    await page.locator('button#promptBtn[onclick="myFunctionPrompt()"]').click()
    await page.waitForTimeout(2000);

})