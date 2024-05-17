import { test, expect } from '@playwright/test';

test('Get API Test', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users/2')
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Janet');
    console.log(await response.json());

})

test('Post API  Test', async ({ request }) => {

    const response = await request.post("https://reqres.in/api/users", {
        data: {
            "name": "arsalan",
            "job": "automation engineer"
        }
    })

    expect(response.status()).toBe(201);
    const text = await response.text();
    expect(text).toContain('arsalan');  
    console.log(await response.json());
})

test('Put API  Test', async ({ request }) => {

    const response = await request.put("https://reqres.in/api/users/2", {
        data: {
            "name": "ak",
            "job": "QA Engineer"
        
        }
    })

    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('ak');  
    console.log(await response.json());
})

test('Patch API  Test', async ({ request }) => {

    const response = await request.patch("https://reqres.in/api/users/2", {
        data: {
            "name": "ak",
            "job": "QA Engineer"
        
        }
    })

    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('ak');  
    console.log(await response.json());
})

test('Delete API  Test', async ({ request }) => {

    const response = await request.delete("https://reqres.in/api/users/2")
    expect(response.status()).toBe(204);
})