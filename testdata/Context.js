export const Context = {
  invocationId: 'string',
  executionContext: {
    invocationId: 'string',
    functionName: 'string',
    functionDirectory: 'string'
  },
  /*
	bindings: {
			[key: string]: any;
	},
	bindingData: {
			[key: string]: any;
	},
	*/
  traceContext: {
    traceparent: 'string',
    tracestate: 'string',
    attributes: null
  },
  bindingDefinitions: {
    name: 'string',
    type: 'string',
    direction: 'in'
  }
  //log: Logger;
  //done = () => err?: Error | string | null, result?: any): void
  //req: HttpRequest;
  //res?: {
  //		[key: string]: any;
  //};
};
