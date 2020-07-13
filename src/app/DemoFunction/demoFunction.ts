import { Context, HttpRequest } from '@azure/functions';

import { Logger } from '../Logger/Logger';
import { demoResponse } from './demoResponse';

/**
 * @desc This is a simple demo function, to give you a hint of how you could write your Azure Functions
 * @param context - Context object
 * @param req - Incoming HTTP request
 */
export function demoFunction(context: Context, req: HttpRequest): Object {
  const userId: string = req.query.userId || (req.body && req.body.userId);
  const logger = new Logger({ userId });

  logger.log({
    message: 'Some kind of info!',
    level: 'INFO'
  });

  logger.log({
    message: 'Some kind of warning!',
    level: 'WARN'
  });

  logger.log({
    message: 'Some kind of error!',
    level: 'ERROR'
  });

  const response = demoResponse();

  return { body: response };
}
