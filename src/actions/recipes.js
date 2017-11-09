import uuid from 'uuid';

export const saveRecipe = (recipe) => {
  return {
    type: 'SAVE_RECIPE',
    recipe: {
      ...recipe,
      id: uuid()
    }
  };
};

export const deleteRecipe = (recipeId) => {
  return {
    type: 'DELETE_RECIPE',
    recipeId
  };
};
