import { createStore, combineReducers } from 'redux';
import formReducer from './../reducers/form';
import recipesReducer from './../reducers/recipes';

export default () => {
  const store = createStore(
    combineReducers({
      form: formReducer, // always key value pair. The state with the reducer
      recipes: recipesReducer
    })
  );

  return store;
};
