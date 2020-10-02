import React from 'react';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
});

export { client };

const Provider = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);

export default Provider;
