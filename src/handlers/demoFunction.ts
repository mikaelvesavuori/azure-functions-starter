import { AzureFunction, Context, HttpRequest } from '@azure/functions';

import { demoFunction } from '../DemoFunction/demoFunction';

export async function handler(context: Context, req: HttpRequest): Promise<void> {
  console.log('Starting...');
  const response = demoFunction(context, req);
  console.log('Response:', response);
  context.res = response;
}
