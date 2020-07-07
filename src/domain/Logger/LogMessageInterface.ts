export interface LogMessageInterface {
  readonly message: string;
  readonly level: 'ERROR' | 'WARN' | 'INFO';
}
