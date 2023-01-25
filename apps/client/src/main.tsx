import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Provider } from 'urql';
import { theme } from "./utils/chakra";
import { client } from "./utils/graphql";

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
