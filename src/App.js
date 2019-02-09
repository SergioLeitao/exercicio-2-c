import React, {Component}  from 'react';
import logo from './logo.svg';
import './App.css';
import ListItens from './ListItens'
import AddItems from './AddItems'

class App extends Component {
  state = {
    items: [],
  };

  addItem = value => {
    this.setState(oldState => ({
      items: [...oldState.items, value],
    }));
  };

  deleteLastItem = event => {
    this.setState(() => ({ items: this.state.items.slice(0, -1) }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
		<AddItems addItem={this.addItem}/>
		<ListItens items={this.state.items} deleteLastItem={this.deleteLastItem}/>
      </div>
    );
  }
}

export default App;
