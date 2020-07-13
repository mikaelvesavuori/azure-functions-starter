import { AzureFunction, Context, HttpRequest } from '@azure/functions';

import { demoFunction } from '../app/DemoFunction/demoFunction';

/**
 * @desc The handler function that you will use with Serverless Framework, for calling the demo function
 * @param context - Context object
 * @param req - Incoming HTTP request
 */
export async function handler(context: Context, req: HttpRequest): Promise<void> {
  const response: Object = demoFunction(context, req);
  context.res = response;
}
