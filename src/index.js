import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Routes from './Routes/App';
import 'bootstrap/dist/css/bootstrap.min.css';

// import ApolloClient from 'apollo-boost';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';

const httpLink = new HttpLink({ uri: 'http://localhost:3005/graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({
        headers: {
            'x-token': localStorage.getItem('token'),
            'x-refresh-token': localStorage.getItem('refreshToken')
        }
    });
    return forward(operation);
})

// const authMiddlewareAfter = new ApolloLink(async (operation, forward) => {
//     const token = operation.get('x-token');
//     const refreshToken = operation.get('x-refresh-token');

//     if (token) {
//         localStorage.setItem('token', token);
//     }

//     if (refreshToken) {
//         localStorage.setItem('refreshToken', refreshToken);
//     }

//     next();
// })

const client = new ApolloClient({
    link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors)
                graphQLErrors.forEach(({ message, locations, path }) =>
                    console.log(
                        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                    ),
                );
            if (networkError) console.log(`[Network error]: ${networkError}`);
        }),
        authMiddleware,
        httpLink
    ]),
    cache: new InMemoryCache()
});

// client.use([
//     {
//         applyMiddleware(req, next) {
//             if (!req.options.headers) {
//                 req.options.headers = {};
//             }

//             req.options.headers['x-token'] = localStorage.getItem('token');
//             req.options.headers['x-refresh-token'] = localStorage.getItem('refreshToken');
//             next();
//         },
//     },
// ]);

// client.useAfter([
//     {
//         applyAfterware({ response: { headers } }, next) {
//             const token = headers.get('x-token');
//             const refreshToken = headers.get('x-refresh-token');

//             if (token) {
//                 localStorage.setItem('token', token);
//             }

//             if (refreshToken) {
//                 localStorage.setItem('refreshToken', refreshToken);
//             }

//             next();
//         },
//     },
// ]);

const App = () => (
    <ApolloProvider client={client}>
        <Routes />
    </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
