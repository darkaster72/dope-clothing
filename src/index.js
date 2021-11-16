import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import CartProvider from './provider/cart/cart.provider'

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);