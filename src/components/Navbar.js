import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showForm } from '../actions/form';

class Navbar extends Component {
  
  render() {
    return (
      <header>
        <h2><a>Recipe App</a></h2>
        <nav>
          <li><a onClick={this.props.showForm}>New Recipe</a></li>
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Contact Us</a></li>
        </nav>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  showForm: () => dispatch(showForm())
});

export default connect(null, mapDispatchToProps)(Navbar);
