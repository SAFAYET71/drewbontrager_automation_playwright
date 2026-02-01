// @ts-check
import { test, expect } from "@playwright/test";

test("Test 1 - Whistle Works home page loads correctly With all the element", async ({
  page,
}) => {
  // Step 1: Open the website
  await page.goto("https://whistleworks.org/");

  // Step 2: Verify logo is visible
  await expect(page.locator("img.shrink-0.w-16.h-12")).toBeVisible();

  // Step 3: Verify title text "WHISTLE WORKS" in navbar
  await expect(page.locator('h1:has-text("WHISTLE WORKS")')).toBeVisible();

  // Step 4: Verify Login button is visible (center button)
  await expect(page.getByRole("link", { name: "Login" })).toBeVisible();

  // Step 5: Verify Home button is visible (Top nav bar)
  await expect(
    page.locator("a").filter({ hasText: "Home" }).first(),
  ).toBeVisible();

  // Step 6: Verify All Camps button is visible (center button)
  await expect(
    page.locator("a").filter({ hasText: "All Camps" }).first(),
  ).toBeVisible();

  // Step 7: Verify About Us but ton is vis ible (cent er button)
  await expect(
    page.locator("a").filter({ hasText: "About Us" }).first(),
  ).toBeVisible();
});
 

test("Test 2 - Login button (center)", async ({page,}) => {
  await page.goto("https://whistleworks.org/");

  // Login button (center)
  await page.getByRole("link", { name: "Login" }).click();
  await expect(page).toHaveURL("https://whistleworks.org/auth/signin");

});

test("Test 3 - Home link (navbar)", async ({page,}) => {
  await page.goto("https://whistleworks.org/");

  // Home link (navbar)
  await page.locator("a").filter({ hasText: "Home" }).first().click();
  await expect(page).toHaveURL("https://whistleworks.org/");

})

test ("Test 4 - All Camps", async({page,}) =>{
  
  await page.goto("https://whistleworks.org/");

  // All Camps
  await page.locator("a", { hasText: "All Camps" }).first().click();
  await expect(page).toHaveURL("https://whistleworks.org/all-camps");

})

test ("Test 5 - About Us", async({page,}) =>{
  
  await page.goto("https://whistleworks.org/");
   // About Us
  await page.locator("a", { hasText: "About Us" }).first().click();
  await expect(page).toHaveURL("https://whistleworks.org/about-us");

})
// this is for test
test ("Test 6 - Logo click", async({page,}) =>{
  
  await page.goto("https://whistleworks.org/");
   // Logo click
  await page.locator("img.shrink-0.w-16.h-12").click();
  await expect(page).toHaveURL("https://whistleworks.org/");

})

test ("Test 7 - Title click", async({page,}) =>{
  await page.goto("https://whistleworks.org/");

   // Title click
  await page.locator('h1:has-text("WHISTLE WORKS")').click();
  await expect(page).toHaveURL("https://whistleworks.org/");

})

test ("Test 8 - Title click", async({page,}) =>{
  await page.goto("https://whistleworks.org/");

   // Title click
  await page.getByRole('link', { name: 'View All Camps' }).click();
  await expect(page).toHaveURL("https://whistleworks.org/all-camps");

})