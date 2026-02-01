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

test ("Test 8 - View All Camps - Button", async({page,}) =>{
  await page.goto("https://whistleworks.org/");

   // View All Camps - Button
  await page.getByRole('link', { name: 'View All Camps' }).click();
  await expect(page).toHaveURL("https://whistleworks.org/all-camps");

})


test ("Test 9 - Main Headding", async({page,}) =>{
  await page.goto("https://whistleworks.org/");

   // Main Headding
  await expect(page.getByRole('heading', { name: 'Referee/Umpire Camp Management Made Simple' })).toBeVisible();
  await expect(page).toHaveURL("https://whistleworks.org/");

})

test ("Test 10 - Sub Headding", async({page,}) =>{
  await page.goto("https://whistleworks.org/");

   // Sub Headding
  await expect(page.locator("//p[@class='text-base sm:text-lg md:text-xl lg:text-2xl max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto text-gray-100 px-2 sm:px-0']")).toBeVisible();
  await expect(page).toHaveURL("https://whistleworks.org/");

})

test('Test 11 - WHISTLE WORKS Partners title is visible', async ({ page }) => {
  await page.goto('https://whistleworks.org/'); // Replace with your URL
  await expect(page.getByRole('heading', { name: 'WHISTLE WORKS Partners:' })).toBeVisible();
});

//Powerful features - Heading
test ("Test 12 - Powerful Features", async({page,}) =>{
  await page.goto("https://whistleworks.org/");
  await expect(page.getByRole('heading', { name: 'Powerful Features' })).toBeVisible();
  await expect(page).toHaveURL("https://whistleworks.org/");

})

//Powerful features - Sub_Heading
test ("Test 13 - Powerful Features", async({page,}) =>{
  await page.goto("https://whistleworks.org/");
  await expect(page.getByRole('heading', { name: 'Everything you need to manage referees, schedules, and evaluations in one modern platform' })).toBeVisible();
  await expect(page).toHaveURL("https://whistleworks.org/");

})

//Powerful features - Company Features 1
test ("Test 14 - Card = Real-time evaluations that drive improvement", async({page,}) =>{
  await page.goto("https://whistleworks.org/");
  await expect(page.getByRole('img', { name: 'Real-time evaluations that drive improvement' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Real-time evaluations that drive improvement' })).toBeVisible();
  await expect(page.locator("//p[contains(text(),'Provide referees with detailed, actionable evaluat')]")).toBeVisible();

})

//Powerful features - Company Features 2
test ("Test 15 - Card = Simple, secure registration & payments", async({page,}) =>{
  await page.goto("https://whistleworks.org/");
  await expect(page.getByRole('img', { name: 'Simple, secure registration & payments' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Simple, secure registration & payments' })).toBeVisible();
  await expect(page.locator("//p[contains(text(),'Accept camp registrations and payments effortlessl')]")).toBeVisible();

})

//Powerful features - Company Features 3
test ("Test 16 - Card = GPS Integration", async({page,}) =>{
  await page.goto("https://whistleworks.org/");
  await expect(page.getByRole('img', { name: 'GPS Integration' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'GPS Integration' })).toBeVisible();
  await expect(page.getByText('Officials know exactly where to go, every time, with built-in GPS navigation to game locations')).toBeVisible();

})

//Powerful features - Company Features 4
test ("Test 17 - Card = Built-in communication & notifications", async({page,}) =>{
  await page.goto("https://whistleworks.org/");
  await expect(page.getByRole('img', { name: 'Built-in communication & notifications' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Built-in communication & notifications' })).toBeVisible();
  await expect(page.locator("//p[contains(text(),'Keep staff and officials informed with instant not')]")).toBeVisible();

})

//Powerful features - Company Features 5
test ("Test 18 - Card = Smart Scheduling", async({page,}) =>{
  await page.goto("https://whistleworks.org/");
  await expect(page.getByRole('img', { name: 'Smart Scheduling' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Smart Scheduling' })).toBeVisible();
  await expect(page.locator("//p[contains(text(),'Assign games manually, by crew, or use our Automat')]")).toBeVisible();

})

//Powerful features - Company Features 6
test ("Test 19 - Card = Multi-Camp Management", async({page,}) =>{
  await page.goto("https://whistleworks.org/");
  await expect(page.getByRole('img', { name: 'Multi-Camp Management' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Multi-Camp Management' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Multi-Camp Management' })).toBeVisible();

})

//Create an Account or Signup page validation
test ("Test 20 - Create Your Account Button", async({page,}) =>{
  await page.goto("https://whistleworks.org/");
  await page.getByRole('link', { name: 'Create Your Account' }).click();
  await expect(page).toHaveURL("https://whistleworks.org/auth/signup");
})

