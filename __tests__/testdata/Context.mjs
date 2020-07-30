export const Context = {
  invocationId: 'string',
  executionContext: {
    invocationId: 'string',
    functionName: 'string',
    functionDirectory: 'string'
  },
  bindings: [],
  bindingData: [],
  traceContext: {
    traceparent: 'string',
    tracestate: 'string',
    attributes: null
  },
  bindingDefinitions: {
    name: 'string',
    type: 'string',
    direction: 'in'
  },
  log: () => null,
  //done = () => err?: Error | string | null, result?: any): void
  //req: HttpRequest;
  res: []
};
