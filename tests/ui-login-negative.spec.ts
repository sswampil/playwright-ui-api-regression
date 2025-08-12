import { test, expect } from "@playwright/test";

test("OrangeHRM — Login › shows error with invalid credentials", async ({
  page,
}) => {
  // 1. Navigate to the login page
  await page.goto("https://opensource-demo.orangehrmlive.com/");

  // 2. Enter invalid username and password
  await page.fill('input[name="username"]', "wronguser");
  await page.fill('input[name="password"]', "wrongpass");

  // 3. Click Login
  await page.click('button[type="submit"]');

  // 4. Verify the error message appears
  const errorMessage = page.getByText("Invalid credentials", { exact: true });
  await expect(errorMessage).toBeVisible();

  // 5. (Optional) Verify the URL is still the login page
  await expect(page).toHaveURL(/auth\/login/);
});
