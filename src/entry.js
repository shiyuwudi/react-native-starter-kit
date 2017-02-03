import React from 'react';
import { Provider } from 'react-redux';
import { default as configureStore } from './store/createStore';
import Index from './router/App';

const store = configureStore();

const App = () => <Provider store={store}>
  <Index />
</Provider>;

export default App;
