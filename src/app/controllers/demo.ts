import { Context, HttpRequest } from '@azure/functions';

import { Logger } from '../frameworks/Logger/Logger';
import { demoFunction } from '../../app/frameworks/DemoFunction/demoFunction';

/**
 * @description The handler function that you will use with Serverless Framework, for calling the demo function
 * @param context - Context object
 * @param req - Incoming HTTP request
 */
export async function demoController(context: Context, req: HttpRequest): Promise<object> {
  const userId: string = req.query.userId || (req.body && req.body.userId);
  const logger = new Logger({ userId, context, message: '' });
  const response: any = demoFunction(logger);
  return { body: response };
}
