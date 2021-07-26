import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer';
import reportWebVitals from './reportWebVitals';

import { ChakraProvider } from "@chakra-ui/react";


const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}> 
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
