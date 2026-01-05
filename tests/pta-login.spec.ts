import { cookiePath } from "@/lib/constants/file";
import { test } from "@playwright/test";

test("cookie setup for PTA", async ({ page }) => {
  await page.goto("https://pintia.cn/auth/login");

  // Cancel the pause
  // after filling in the username and password
  // and clicking the login button
  await page.pause();

  // Save cookie
  await page.context().storageState({ path: cookiePath });
});
