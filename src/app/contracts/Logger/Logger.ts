import { LogMessageInterface } from '../../frameworks/Logger/LogMessageInterface';

/**
 * @description Logger
 * @type
 */
export type Logger = {
  log: (log: LogMessageInterface) => void;
};
