import { test } from "@playwright/test";
import { AmazonJobsPage } from "../pages/amazonJobsPage";

test("Amazon Jobs India flow", async ({ page }) => {

    const jobs = new AmazonJobsPage(page);

    await jobs.navigate();

    await jobs.searchLocationIndia();

    await jobs.applyAllFilters();

    await jobs.openSecondJob();

    await jobs.clickApply();

});