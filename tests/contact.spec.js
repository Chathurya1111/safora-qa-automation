const { test, expect } = require('@playwright/test');

test('Safora Contact Us form automation', async ({ page }) => {

  // 1. Open Safora website
  await page.goto('https://safora.se/en/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // 2. Click Contact (if navigation exists)
  await page.getByRole('link', { name: 'Contact Us' }).click();

  // 3. Fill form fields (may need slight adjustment based on actual site)
  await page.getByPlaceholder('Name').fill('Test User');
  await page.getByPlaceholder('Email').fill('testuser@gmail.com');
  await page.getByPlaceholder('Message').fill('This is an automation test');

  // 4. Click submit button
  await page.getByRole('button', { name: /send|submit/i }).click();

  // 5. Small wait to observe result
  await page.waitForTimeout(3000);
});