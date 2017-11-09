import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import RecipeApp from './components/RecipeApp';
import './styles/styles.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <RecipeApp />
  </Provider>,
  document.getElementById('app')
);
