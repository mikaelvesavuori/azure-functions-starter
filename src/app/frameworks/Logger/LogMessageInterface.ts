/**
 * @description Interface for log messages
 * @interface
 */
export interface LogMessageInterface {
  readonly message: string;
  readonly level: 'ERROR' | 'WARN' | 'INFO';
}
