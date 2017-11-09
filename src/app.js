import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RecipeApp from './components/RecipeApp';
import rootReducer from './reducers/reducers';
import './styles/styles.scss';

const state = {
  shouldShowForm: false,
  recipes: [
    {
      id: 0,
      title: 'Spaghetti',
      instructions: 'Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce',
      ingredients: ['pasta', '8 cups water', '1 box spaghetti'],
      img: '/images/spaghetti.jpg',
    },
    {
      id: 1,
      title: 'Milkshake',
      instructions: 'Combine ice cream and milk.  Blend until creamy',
      ingredients: ['2 Scoops Ice cream', '8 ounces milk'],
      img: '/images/milkshake.jpg'
    },
    {
      id: 2,
      title: 'Avocado Toast',
      instructions: 'Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.',
      ingredients: ['2 slices of bread', '1 avocado', '1 tablespoon olive oil', '1 pinch of salt', 'pepper'],
      img: '/images/avocado-toast.jpg'
    }
  ],
  nextRecipeId: 3
};

const store = createStore(rootReducer, state); // 2nd param makes it default state

ReactDOM.render(
  <Provider store={store}>
    <RecipeApp />
  </Provider>,
  document.getElementById('app')
);