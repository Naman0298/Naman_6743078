import { Page } from "@playwright/test";

export class AmazonJobsPage {

    constructor(private page: Page) { }

    async navigate() {
        await this.page.goto("https://www.amazon.jobs/en/");
    }

    async searchLocationIndia() {

        const locationBox = this.page.getByPlaceholder(/location/i);

        await locationBox.fill("India");

        // wait for dropdown suggestions
        const suggestion = this.page.locator('li:has-text("India")').first();

        await suggestion.waitFor();

        await suggestion.click();

    }

    async applyAllFilters() {

        const filters = this.page.locator('input[type="checkbox"]');

        const count = await filters.count();

        for (let i = 0; i < count; i++) {

            const box = filters.nth(i);

            if (!(await box.isChecked())) {
                await box.check();
            }

        }
    }

    async openSecondJob() {

        const jobs = this.page.locator(".job-tile");

        await jobs.first().waitFor();

        await jobs.nth(1).click(); // 2nd job

    }

    async clickApply() {

        await this.page.getByRole("link", { name: /apply/i }).click();

    }
}