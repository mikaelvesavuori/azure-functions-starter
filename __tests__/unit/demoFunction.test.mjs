import { demoFunction } from '../../dist/src/DemoFunction/demoFunction.js';

import { invalidTestData, validTestData } from '../../testdata/unit/demoFunction.testdata.mjs';

test('It should return a welcoming text string if given valid input', () => {
  //expect(demoFunction()).toBe('Hey!');
  expect(demoFunction()).toEqual(expect.objectContaining(validTestData));
});

/*
test('It should fail if presented with wrong input', () => {
  //expect(demoFunction()).toBe('Hey!');
  expect(demoFunction()).toReject(expect.objectContaining(invalidTestData));
});
*/
