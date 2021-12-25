import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{ApolloProvider,ApolloClient,InMemoryCache} from '@apollo/client'
const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});
ReactDOM.render(
  <ApolloProvider client={client}>
  <App />
</ApolloProvider>,
  document.getElementById('root')
);


reportWebVitals();
