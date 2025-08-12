import { test, expect } from "@playwright/test";

test.describe("UI Smoke - OrangeHRM Demo", () => {
  test("login page renders", async ({ page }) => {
    // uses baseURL from playwright.config.ts or .env
    await page.goto("/web/index.php/auth/login");

    // sanity check: the Login button should be visible
    await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
  });
});
