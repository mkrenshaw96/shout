import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Routes from './Routes/App';
import 'bootstrap/dist/css/bootstrap.min.css';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
    uri: 'http://localhost:3005/graphql',
});

const App = () => (
    <ApolloProvider client={client}>
        <Routes />
    </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
