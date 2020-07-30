import { Context } from '@azure/functions';

/**
 * @description Interface for Logger
 * @interface
 */
export interface LoggerInterface {
  readonly userId?: string | null;
  readonly context: Context;
  message: string;
}
