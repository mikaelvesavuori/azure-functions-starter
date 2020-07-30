import { demoController } from '../../dist/src/app/controllers/demo.js';

import { Context } from '../testdata/Context.mjs';
import { Request, RequestWithUserIdQuery, RequestWithUserIdBody } from '../testdata/Request.mjs';
import { validTestData } from '../testdata/unit/demo.testdata.mjs';

describe('Failure cases', () => {
  test('It should fail when not receiving context or request objects', async () => {
    await expect(demoController()).rejects.toBeTruthy();
  });
  test('It should fail when not receiving a context object', async () => {
    await expect(demoController(null, {})).rejects.toBeTruthy();
  });
  test('It should fail when not receiving a request object', async () => {
    await expect(demoController({}, null)).rejects.toBeTruthy();
  });
});

describe('Success cases', () => {
  test('It should successfully execute', async () => {
    await expect(demoController(Context, Request)).resolves.toEqual(
      expect.objectContaining(validTestData)
    );
  });

  test('It should pick up user ID from query', async () => {
    await expect(demoController(Context, RequestWithUserIdQuery)).resolves.toEqual(
      expect.objectContaining(validTestData)
    );
  });

  test('It should pick up user ID from request body', async () => {
    await expect(demoController(Context, RequestWithUserIdBody)).resolves.toEqual(
      expect.objectContaining(validTestData)
    );
  });
});
