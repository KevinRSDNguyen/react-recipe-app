import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveRecipe } from '../actions/recipes';
import { hideForm } from '../actions/form';

class RecipeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      instructions: '',
      ingredients: [''],
      img: undefined,
      error: ''
    };
  }
  handleTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({title}));
  };
  handleInstructionsChange = (e) => {
    const instructions = e.target.value;
    this.setState(() => ({instructions}));
  };
  handleImgChange = (e) => {
    const img = e.target.value;
    this.setState(() => ({img}));
  };
  handleNewIngredient = (e) => {
    const { ingredients } = this.state;
    this.setState({ ingredients: [...ingredients, ''] });
  };
  handleChangeIng = (e) => {
    const index = Number(e.target.name.split('-')[1]);
    const ingredients = this.state.ingredients.map((ing, i) => (
      i === index ? e.target.value : ing
    ));
    this.setState({ ingredients });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const ingredientsFilledOut = this.state.ingredients.every((i) => i.length > 0);
    if(!this.state.title || !this.state.instructions || !ingredientsFilledOut){
      this.setState(() => ({error: 'You must at least provide title, instructions, and ingredients.'}));
    } else{
      this.props.saveRecipe({ ...this.state });
      this.props.hideForm();
      this.setState({
        title: '',
        instructions: '',
        ingredients: [''],
        img: '',
        error: ''
      });
    }
  };
  render() {
    const { title, instructions, img, ingredients } = this.state;
    const { onClose } = this.props;
    const inputs = ingredients.map((ing, i) => (
      <div
        className="recipe-form-line"
        key={`ingredient-${i}`}
      >
        <label>{i+1}.
          <input
            type="text"
            name={`ingredient-${i}`}
            value={ing}
            size={45}
            autoComplete="off"
            placeholder=" Ingredient"
            onChange={this.handleChangeIng} />
        </label>
      </div>
    ));
    
    return (
      <div className="recipe-form-container">
        <form className='recipe-form' onSubmit={this.handleSubmit}>
          {this.state.error && <p>{this.state.error}</p>}
          <button
            type="button"
            className="close-button"
            onClick={this.props.hideForm}
          >
            X
          </button>
          <div className='recipe-form-line'>
            <label htmlFor='recipe-title-input'>Title</label>
            <input
              id='recipe-title-input'
              key='title'
              name='title'
              type='text'
              value={title}
              size={42}
              autoComplete="off"
              onChange={this.handleTitleChange} />
          </div>
          <label
            htmlFor='recipe-instructions-input'
            style={{marginTop: '5px'}}
          >
            Instructions
          </label>
          <textarea
            key='instructions'
            id='recipe-instructions-input'
            type='Instructions'
            name='instructions'
            rows='8'
            cols='50'
            autoComplete='off'
            value={instructions}
            onChange={this.handleInstructionsChange}/>
          {inputs}
          <button
            type="button"
            onClick={this.handleNewIngredient}
            className="buttons"
          >
            +
          </button>
          <div className='recipe-form-line'>
            <label htmlFor='recipe-img-input'>Image Url</label>
            <input
              id='recipe-img-input'
              type='text'
              placeholder=''
              name='img'
              value={img}
              size={36}
              autoComplete='off'
              onChange={this.handleImgChange} />
          </div>
          <button
            type="submit"
            className="buttons"
            style={{ alignSelf: 'flex-end', marginRight: 0 }}
          >
            SAVE
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  saveRecipe: recipe => dispatch(saveRecipe(recipe)),
  hideForm: () => dispatch(hideForm())
});

export default connect(null, mapDispatchToProps)(RecipeInput);
