import test from "@playwright/test";

test.beforeAll("beforeAll", async ({ }) => {
    console.log("beforeAll");
})
test.afterAll("afterAll", async ({ }) => {
    console.log("afterAll");
})
test("test1", async ({ }) => {
    console.log("test1");
})
test("test2", async ({ }) => {
    console.log("test2");
})
test("test3", async ({ }) => {
    console.log("test3");
})
test.beforeEach("beforeEach", async ({ }) => {
    console.log("beforeEach");
})
test.afterEach("afterEach", async ({ }) => {
    console.log("afterEach");
})