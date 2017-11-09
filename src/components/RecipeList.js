import React from 'react';
import Recipe from './Recipe';

const RecipeList = (props) => {
  const recipes = props.recipes.map((r, index) => (
    <Recipe key={r.id} {...r} />
  ));
  return (
    <div className="recipe-list">
      {recipes}
    </div>
  );
};

export default RecipeList;
