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

// Home Page form Nav Bar
test("Test 3 - Home link (navbar)", async ({page,}) => {
  await page.goto("https://whistleworks.org/");
  await page.locator("a").filter({ hasText: "Home" }).first().click();
  await expect(page).toHaveURL("https://whistleworks.org/");

})

// All Camps Page form Nav Bar
test ("Test 4 - All Camps", async({page,}) =>{
  await page.goto("https://whistleworks.org/");
  await page.locator("a", { hasText: "All Camps" }).first().click();
  await expect(page).toHaveURL("https://whistleworks.org/all-camps");

})

// About Us Page form Nav Bar
test ("Test 5 - About Us", async({page,}) =>{
  await page.goto("https://whistleworks.org/");
  await page.locator("a", { hasText: "About Us" }).first().click();
  await expect(page).toHaveURL("https://whistleworks.org/about-us");

})

// Logo click (Left Side Nav Bar)
test ("Test 6 - Logo click", async({page,}) =>{
  await page.goto("https://whistleworks.org/");
  await page.locator("img.shrink-0.w-16.h-12").click();
  await expect(page).toHaveURL("https://whistleworks.org/");
})

 // Title click (Left Side Nav Bar)
test ("Test 7 - Title click", async({page,}) =>{
  await page.goto("https://whistleworks.org/");
  await page.locator('h1:has-text("WHISTLE WORKS")').click();
  await expect(page).toHaveURL("https://whistleworks.org/");
})

// View All Camps - Button
test ("Test 8 - View All Camps - Button", async({page,}) =>{
  await page.goto("https://whistleworks.org/");
  await page.getByRole('link', { name: 'View All Camps' }).click();
  await expect(page).toHaveURL("https://whistleworks.org/all-camps");
})

 // Main Headding 
test ("Test 9 - Main Headding", async({page,}) =>{
  await page.goto("https://whistleworks.org/");
  await expect(page.getByRole('heading', { name: 'Referee Camp Management Made Simple' })).toBeVisible();
  await expect(page).toHaveURL("https://whistleworks.org/");

})

// Sub Headding
test ("Test 10 - Sub Headding", async({page,}) =>{
  await page.goto("https://whistleworks.org/");
  await expect(page.locator("//p[@class='text-base sm:text-lg md:text-xl lg:text-2xl max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto text-gray-100 px-2 sm:px-0']")).toBeVisible();
  await expect(page).toHaveURL("https://whistleworks.org/");
})

//WHISTLE WORKS Partners title is visible
test('Test 11 - WHISTLE WORKS Partners title is visible', async ({ page }) => {
  await page.goto('https://whistleworks.org/'); 
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


//Sign Up page - all elements are visible & taking values
test('Test 21 - Sign Up page - all elements are visible', async ({ page }) => {
  await page.goto('https://whistleworks.org/auth/signup'); // change URL if needed

  // LEFT SIDE
  await expect(page.getByRole('img', { name: 'Logo' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Professional Referee Camp Management Made Simple' })).toBeVisible();
  await expect(page.locator("//p[@class='text-sm md:text-base text-neutral-600 text-center w-full md:w-5/6 lg:w-3/4']")).toBeVisible();

 // RIGHT SIDE - HEADINGS
  await expect(page.getByRole('heading', { name: 'Create an Account' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Join us to manage your referee camps efficiently' })).toBeVisible();

 // INPUT FIELDS
  await expect(page.getByLabel('First Name')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'First Name' })).toBeVisible();
  await page.getByRole('textbox', { name: 'First Name' }).fill("Safayet");
 
  await expect(page.getByLabel('Last Name')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Last Name' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Last Name' }).fill("Hossain");
// //
  await expect(page.getByText('Address *', { exact: true })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Search address...' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Search address...' }).fill("Dhaka, Bangladesh");
// //
  await expect(page.getByLabel('Phone Number')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Phone Number' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill("0120644252");
// //
  await expect(page.getByLabel('Email')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Email' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Email' }).fill("test@gmail.com");
//
  await expect(page.getByLabel('Password', { exact: true })).toBeVisible();
  await expect(page.locator('#password')).toBeVisible();
  await page.locator('#password').fill("Ss@12345");
//
  await expect(page.getByLabel('Confirm Password')).toBeVisible();
  await expect(page.locator('#password')).toBeVisible();
  await page.locator('#password').fill("Ss@12345");

//   // ROLE DROPDOWN
  await expect(page.getByText('Role', { exact: true })).toBeVisible();
  const roleDropdown = page.getByRole('combobox');
  await expect(roleDropdown).toBeVisible();
  await roleDropdown.click();
  await expect(page.getByText('Camp Director', { exact: true })).toBeVisible();
  await expect(page.getByText('Referee', { exact: true })).toBeVisible();
  await expect(page.getByText('Evaluator', { exact: true })).toBeVisible();
  await page.getByText('Camp Director', { exact: true }).click();
  // await page.getByText('Referee', { exact: true }).click();
  // await page.getByText('Evaluator', { exact: true }).click();

  // TERMS & CONDITIONS CHECKBOX
  await expect(page.getByRole('checkbox')).toBeVisible();
  await page.getByRole('checkbox').check();
  await expect(page.getByText('I agree to the Terms & Conditions and Privacy Policy.', { exact: true })).toBeVisible();
//
  // TERMS & CONDITIONS LINK
  await expect(page.getByRole('link', { name: 'Terms & Conditions' })).toBeVisible();
  await page.getByRole('link', { name: 'Terms & Conditions' }).click();
  await expect(page).toHaveURL("https://whistleworks.org/terms-conditions");

  // Go back to Sign Up page
  await page.goBack();
  await expect(page).toHaveURL("https://whistleworks.org/auth/signup");

  // PRIVACY POLICY LINK
  await expect(page.getByRole('link', { name: 'Privacy Policy' })).toBeVisible();
  await page.getByRole('link', { name: 'Privacy Policy' }).click();
  await expect(page).toHaveURL("https://whistleworks.org/privacy-policy");

  // Go back again
  await page.goBack();
  await expect(page).toHaveURL("https://whistleworks.org/auth/signup");

  // SIGN UP BUTTON
  await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
  await page.getByRole('button', { name: 'Sign Up' }).click();
});


test("Test 22 - Sign In page", async({page}) =>{
await page.goto("https://whistleworks.org/")
await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
await page.getByRole('button', { name: 'Login' }).click();
await expect(page).toHaveURL("https://whistleworks.org/auth/signin")
await expect(page.getByRole('heading', { name: 'Welcome Back' })).toBeVisible();
await expect(page.getByRole('heading', { name: 'Sign in to access your dashboard' })).toBeVisible();
await expect(page.getByLabel('Email')).toBeVisible();
await expect(page.getByRole('textbox', { name: 'Email' })).toBeVisible();
await page.getByRole('textbox', { name: 'Email' }).fill("l66j079uvy@yzcalo.com");
await expect(page.getByLabel('Password')).toBeVisible();
await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
await page.getByRole('textbox', { name: 'Password' }).fill("Pa$$w0rd!");
await page.locator("//button[@type='button']//*[name()='svg']").click();
await page.getByRole('checkbox').check();
await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
await page.getByRole('button', { name: 'Sign In' }).click();
await expect(page).toHaveURL("https://whistleworks.org/director-dashboard");
await expect(page.locator('img.w-full.h-full.object-cover.rounded-full')).toBeVisible();
await page.locator('img.w-full.h-full.object-cover.rounded-full').click();
await page.getByRole('button', { name: 'Logout' }).click();
await expect(page).toHaveURL("https://whistleworks.org/");

})