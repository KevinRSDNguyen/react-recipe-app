import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import RecipeInput from './RecipeInput';
import RecipeList from './RecipeList';

const RecipeApp = ({
  shouldShowForm,
  recipes
}) => (
  <div className="App">
    <Navbar />
    { shouldShowForm && <RecipeInput /> }
    <RecipeList recipes={recipes} />
  </div>
);

const mapStateToProps = state => ({
  recipes: state.recipes,
  shouldShowForm: state.form.shouldShowForm
});

export default connect(mapStateToProps)(RecipeApp);
