import { AzureFunction, Context, HttpRequest } from '@azure/functions';

import { demoFunction } from '../app/DemoFunction/demoFunction';

export async function handler(context: Context, req: HttpRequest): Promise<void> {
  const response: Object = demoFunction(context, req);
  context.res = response;
}
