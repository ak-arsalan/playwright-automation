import { test, expect } from '@playwright/test';

let context;
let page;

test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    await context.tracing.start({ screenshots: true, snapshots: true });
    page = await context.newPage();
})

test.afterAll(async () => {
    await context.tracing.stop({ path: 'test-trace.zip' });
})

test('test', async ({ }) => {
    await page.goto('https://www.google.com/');
    if (page.getByRole('button', { name: 'Alle ablehnen' }) != null) {
        await page.getByRole('button', { name: 'Alle ablehnen' }).click();
    }
    await page.goto('https://www.google.com/search?q=dummy+login+page&sca_esv=bce7959204881098&source=hp&ei=XNhFZp7SKvqFxc8PiJeUoAY&iflsig=AL9hbdgAAAAAZkXmbLI5AqF7BqADTd0lh5YbKsKpdfjJ&ved=0ahUKEwie8LGF9JGGAxX6QvEDHYgLBWQQ4dUDCA8&uact=5&oq=&gs_lp=Egdnd3Mtd2l6IgBIAFAAWABwAHgAkAEAmAEAoAEAqgEAuAEDyAEAmAIAoAIAmAMAkgcAoAcA&sclient=gws-wiz');
    await page.getByRole('link', { name: 'Test Login Practice Test' }).click();
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Username').press('Tab');
    await page.getByLabel('Password').fill('Password123');
    await page.getByRole('button', { name: 'Submit5667' }).click();


    await page.getByText('Congratulations student. You').click();
    await page.getByRole('link', { name: 'Log out' }).click();
});

