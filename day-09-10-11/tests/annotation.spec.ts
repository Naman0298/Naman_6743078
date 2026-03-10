import {test} from "@playwright/test";


test("test1", async() => {
    console.log("Test1");
}) 
test.skip("test2", async() => {
    console.log("Test2");
}) 
test("test3", async() => {
    console.log("Test3");
}) 
test.fixme("test4", async() => {
    console.log("Test4");
}) 
test.slow("test5", async() => {
    console.log("Test5");
}) 
test.describe("test6", () => {
    console.log("Test6");

    test("test case 1", async ({ page }) => {
    });

    test("test case 2", () => {
    });

    test("test case 3", () => {
    });

    test("test case 4", () => {
    });
});
// test.only("test6", async() => {
//     console.log("Test6");
// }) 