import { test, expect } from "@playwright/test";

test.describe("OrangeHRM — Login", () => {
  test("logs in with valid credentials", async ({ page }) => {
    await page.goto("/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page).toHaveURL(/\/dashboard/);
    await expect(
      page.getByRole("heading", { name: "Dashboard" })
    ).toBeVisible();
  });
});
