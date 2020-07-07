import { LogMessageInterface } from '../../domain/Logger/LogMessageInterface';
import { LoggerInterface } from '../../domain/Logger/LoggerInterface';

export class Logger implements LoggerInterface {
  readonly userId: string | null;

  constructor(logger: LoggerInterface) {
    this.userId = logger.userId;
  }

  log(log: LogMessageInterface) {
    console.log({
      message: log.message,
      level: log.level,
      timestamp: `${Date.now()}`,
      userId: this.userId
    });
  }
}
