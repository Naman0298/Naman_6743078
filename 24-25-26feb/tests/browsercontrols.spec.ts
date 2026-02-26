import test from "@playwright/test";

test("browser controls", async({browser})=>{
      let context = await browser.newContext()
    let page = await context.newPage()
    // let size=await page.viewportSize()
    // console.log(size);
    // page.setViewportSize({width:500, height:500})
    // console.log(await page.viewportSize());
    // page.setViewportSize({width:5000000, height:50000000})
    // console.log(await page.viewportSize());
    
    await page.goto("https://www.amazon.com/")
    await page.screenshot({path: "screenshot/${time}.png"})
//     console.log(await page.url());
//     await browser.close()
})