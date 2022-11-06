import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ChakraProvider, ColorModeScript, extendTheme} from "@chakra-ui/react";
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/300.css';
import {createClient, defaultExchanges, Provider, subscriptionExchange} from 'urql';
import { createClient as createWSClient } from 'graphql-ws';

const theme = extendTheme({
    fonts: {
        heading: 'Montserrat',
        body: 'Montserrat'
    }
});

const wsClient = createWSClient({
    url: 'http://localhost:5000/graphql'
})

const client = createClient({
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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
          <ColorModeScript />
          <Provider value={client}>
              <App />
          </Provider>
      </ChakraProvider>
  </React.StrictMode>
)
