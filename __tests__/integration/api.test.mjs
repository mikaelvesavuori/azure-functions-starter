import superagent from 'superagent';

import { config } from '../../config.mjs';
import { validTestData } from '../testdata/integration/api.testdata.mjs';

const expected = validTestData;

export function apiTest() {
  try {
    superagent
      .get(config.api.endpointUrl)
      .then((data) => {
        try {
          if (data.text !== expected) throw new Error('Response is not as expected!');
        } catch (error) {
          console.error(error);
        }
      })
      .catch(console.error);
  } catch (error) {
    console.error('Unable to run integration test!', error);
  }
}
