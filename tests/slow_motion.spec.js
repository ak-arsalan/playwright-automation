// @ts-check
const { test, expect, chromium } = require('@playwright/test');

test('Slow Motion Test', async () =>{
  // Launch browser
const browser = await chromium.launch({
  headless: false,
  slowMo: 1200
});
// Create a new incognito browser context
const context = await browser.newContext({
  recordVideo: {
    dir: 'videos/',
    size: {width:800, height: 600}
}
});
// Create a new page inside context.
const page = await context.newPage();
await page.goto('https://rcsmetx.wixsite.com/arsalanportfolio');
for(var i=1; i<17; i++){
await page.keyboard.press('PageDown');}
//await page.locator('xpath=//*[text()="Arsalan Khalid Portfolio"]').scrollIntoViewIfNeeded();
// Dispose context once it's no longer needed.
await context.close();
})
