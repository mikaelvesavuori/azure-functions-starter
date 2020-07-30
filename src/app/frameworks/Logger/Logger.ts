import { Context } from '@azure/functions';

import { LoggerInterface } from './LoggerInterface';
import { LogMessageInterface } from './LogMessageInterface';

/**
 * @description Logger is just a very basic logging utility
 * @class
 * @implements {LoggerInterface}
 */
export class Logger implements LoggerInterface {
  readonly userId: string | null | undefined;
  readonly context: Context;
  message: string;

  constructor(logger: LoggerInterface) {
    this.userId = logger.userId;
    this.context = logger.context;
    this.message = logger.message;
  }

  log(log: LogMessageInterface) {
    this.context.log({
      message: log.message,
      level: log.level,
      timestamp: `${Date.now()}`,
      userId: this.userId
    });
  }
}
