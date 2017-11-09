import React, {Component} from 'react';
import Recipe from './Recipe';

class RecipeList extends Component {
  
  render() {
    const recipes = this.props.recipes.map((r,index) => (
      <Recipe key={r.id} {...r} />
    ));
    
    return (
      <div className="recipe-list">
        {recipes}
      </div>
    );
  
  }
}

export default RecipeList;
