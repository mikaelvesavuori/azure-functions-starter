import { Logger } from '../../contracts/Logger/Logger';

/**
 * @description This is a simple demo function, to give you a hint of how you could write your Azure Functions
 * @param logger - Pass in the Logger we created in the controller at start-up
 */
export function demoFunction(logger: Logger): string {
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

  const response = 'This is the response from your demo function!';
  return response;
}
