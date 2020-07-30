export const Request = {
  method: 'GET',
  url: 'string',
  headers: [],
  query: {},
  params: [],
  body: '',
  rawBody: ''
};

export const RequestWithUserIdQuery = {
  method: 'GET',
  url: 'string',
  headers: [],
  query: {
    userId: 'jasj-fj4j-caju'
  },
  params: [],
  body: {},
  rawBody: ''
};

export const RequestWithUserIdBody = {
  method: 'GET',
  url: 'string',
  headers: [],
  query: {
    userId: 'jasj-fj4j-caju'
  },
  params: [],
  body: {
    userId: 'jasj-fj4j-caju'
  },
  rawBody: ''
};
