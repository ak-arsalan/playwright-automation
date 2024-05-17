import { test, expect } from '@playwright/test';
import exp from 'constants';
import * as path from 'path';

test('test', async ({ page }) => {
    //visit url   
    await page.goto('https://demoqa.com/automation-practice-form');
    //validation on Url
    await expect(page).toHaveURL('https://demoqa.com/automation-practice-form');
    //validation on title
    await expect(page).toHaveTitle('DEMOQA');
    //validation on text
    await expect(page.locator('text=Student Registration Form')).toHaveText('Student Registration Form');
    //validation negative check (soft is used to carry on the with the next step in case the validation gets failed)
    /*await expect.soft(page.locator('text=Practice Form')).not.toHaveText('Practice Form1');*/
    //select city drop down disabled validation
    await expect(page.locator('xpath=//input[@disabled]')).toBeDisabled();
    //click on first name input field
    await page.getByPlaceholder('First Name').click();
    //enter name
    await page.getByPlaceholder('First Name').fill('Test');
    //press tab to switch to next tab
    await page.getByPlaceholder('First Name').press('Tab');
    //enter last name
    await page.getByPlaceholder('Last Name').fill('User');
    //press tab to switch to next tab
    await page.getByPlaceholder('Last Name').press('Tab');
    //enter email
    await page.getByPlaceholder('name@example.com').fill('xyz@gmail.com');
    //press tab to swtich to next tab
    await page.getByPlaceholder('name@example.com').press('Tab');
    //select male checkbox
    await page.getByText('Male', { exact: true }).click();
    //click on mobile number field
    await page.getByPlaceholder('Mobile Number').click();
    //enter mobile number
    await page.getByPlaceholder('Mobile Number').fill('1234646662');
    //click on date of birth input and select date
    await page.locator('#dateOfBirthInput').click();
    await page.locator('xpath=//*[contains(@class, "react-datepicker__day--today")]').click()
    //click on subject input and enter value
    await page.locator('#subjectsInput').fill('Testing form');
    //select sports
    await page.getByText('Sports').click();
    //upload picture
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByLabel('Select picture').click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(path.join(__dirname, 'df.png'));
    //click on address field
    await page.getByPlaceholder('Current Address').click();
    //enter address
    await page.getByPlaceholder('Current Address').fill('test address');
    //click on state dropdown
    await page.locator('#state svg').click();
    //select NCR value
    await page.getByText('NCR', { exact: true }).click();
    //click on select city
    await page.getByText('Select City').click();
    //select Noida
    await page.getByText('Noida', { exact: true }).click();
    //click on submit button
    await page.getByRole('button', { name: 'Submit' }).click();
    //useful command to update the test: await page.pause();
    //validation on successfully submission of form
    await expect(page.getByText('Thanks for submitting the form')).toHaveCount(1);
});