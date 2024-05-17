import { test, expect } from '@playwright/test';

//All test in one go
test.describe('My All Test', async () =>{

//will skip the test
test.skip('skip this test', async ({ page }) => {
    // This test will be skipped
});

//will mark test as failure
//will show error if the test does not fail
test('not yet ready', async ({ page }) => {
    test.fail();
});

//test will be aborted
test.fixme('test to be fixed', async ({ page }) => {
    //  ..
});

//marks the test as slow and triples the test timeout
test('slow test', async ({ page }) => {
    test.slow();
});

//runs specific tests
test('focus this test', async ({ page }) => {
    // Run only focused tests in the entire project
});

test('Test full report @smoke', async ({ page }) => {
    // ...
});

//npx playwright test --grep “@smoke”
//Opposite of grep  Skip tests with certain tag
//npx playwright test --grep-invert “@smoke”

})
