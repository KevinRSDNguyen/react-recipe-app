import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteRecipe } from '../actions/recipes';

class Recipe extends Component {
  onDelete = () => {
    this.props.deleteRecipe(this.props.id);
  };
  render() {
    const {title, img, instructions} = this.props;
    const ingredients = this.props.ingredients.map((ing, index) => (
      <li key={index}>{ing}</li> 
    ));
    return (
      <div className="recipe-card">
        <div className="recipe-card-img">
          <img src={img} alt={title} />
        </div>
        <div className="recipe-card-content">
          <h3 className="recipe-title">{title}</h3>
          <h4>Ingredients:</h4>
          <ul>
            {ingredients}
          </ul>
          <h4>Instructions:</h4>
          <p>{instructions}</p>
          <button type="button" onClick={this.onDelete}>DELETE</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteRecipe: (id) => dispatch(deleteRecipe(id))
});

export default connect(null, mapDispatchToProps)(Recipe);
