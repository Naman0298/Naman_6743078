import { test } from "@playwright/test"
import fs from "fs"
import path from "path"

let data = JSON.parse(fs.readFileSync(path.join(__dirname, "../testdata/data.json"), "utf-8"))

test("json data", async ({ page }) => {

    for (let i = 0; i < data.length; i++) {
        console.log(data[i].greet)
    }
})