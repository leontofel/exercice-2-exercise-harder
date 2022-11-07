import { createClient, defaultExchanges, subscriptionExchange } from 'urql';
import { createClient as createWSClient } from 'graphql-ws';

export const wsClient = createWSClient({
    url: 'ws://localhost:5000/graphql'
});

export const client = createClient({
    url: 'http://localhost:5000/graphql',
    exchanges: [
        ...defaultExchanges,
        subscriptionExchange({
            forwardSubscription: (operation) => ({
                subscribe: (sink: any) => ({
                    unsubscribe: wsClient.subscribe(operation, sink),
                })
            })
        })
    ]
});