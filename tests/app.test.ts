import test from 'ava';

const request = require('supertest');

import app from '../routes';

test('api route returns hello world', async t => {
  const res = await request(app).get('/');
  t.is(res.text, 'Hello World!');
});
