import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as GlobalStyled from './GlobalStyle';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  // uri: 'http://194.55.140.170:4000/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ApolloProvider client={client}>
    <GlobalStyled.Root />
    <GlobalStyled.Body>
      <App />
    </GlobalStyled.Body>
  </ApolloProvider>
);
