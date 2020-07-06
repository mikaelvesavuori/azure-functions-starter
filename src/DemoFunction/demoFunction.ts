import { Context, HttpRequest } from '@azure/functions';

import { returnResponse } from './returnResponse';

export function demoFunction(context: Context, req: HttpRequest): Object {
  //const name = req.query.name || (req.body && req.body.name);
  const response = returnResponse();
  return { body: response };
}
