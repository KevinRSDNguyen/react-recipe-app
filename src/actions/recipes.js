import uuid from 'uuid';

export const saveRecipe = (
  {
    title,
    instructions,
    ingredients,
    img = './images/none provided.png' // Default image if none provided by user
  } = {}) => ({
  type: 'SAVE_RECIPE',
  recipe: {
    title,
    instructions,
    ingredients,
    img,
    id: uuid()
  }
});

export const deleteRecipe = recipeId => ({ type: 'DELETE_RECIPE', recipeId });
