import React, {Component} from 'react'

class AddItems extends Component {

  state = {
  	value: ''
  }

  addNewItem = event => {
    event.preventDefault()
	this.props.addItem(this.state.value)
  };


  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };
  
  render(){

    return(
      <div>
        <form onSubmit={this.addNewItem}>
            <input
              type="text"
              placeholder="Enter New Item"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button disabled={this.inputIsEmpty()}>Add</button>
        </form>  
      </div>
    )
    
  }

}

export default AddItems