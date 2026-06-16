import { test, expect } from '@playwright/test';

test('GET request', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  expect(body.id).toBe(1);
  expect(body.title).toBeTruthy();
});

test('POST request', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      title:  'Test Post',
      body:   'Post content',
      userId: 1,
    },
  });

  expect(response.status()).toBe(201);
  const body = await response.json();
  expect(body.id).toBeTruthy();
  expect(body.title).toBe('Test Post');
});

test('PUT request', async ({ request }) => {
  const response = await request.put(
    'https://jsonplaceholder.typicode.com/posts/1',
    {
      data: { id: 1, title: 'Updated Title', body: 'Updated', userId: 1 },
    }
  );
  expect(response.status()).toBe(200);
});

test('DELETE request', async ({ request }) => {
  const response = await request.delete(
    'https://jsonplaceholder.typicode.com/posts/1'
  );
  expect(response.status()).toBe(200);
});