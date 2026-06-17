import { request, expect } from '@playwright/test';

export async function createUser(request: any) {
  const response = await request.post('https://reqres.in/api/users', 
    {
    data: {
      name: 'Nagaraj',
      job: 'Manager'
    }
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  console.log('API Response:', body);

  return body;
}