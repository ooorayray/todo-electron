import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

class App extends Component {
  render() {
    const { store } = this.props

    return (
      <div className="App">
        <TodoInput store={store} />
        <TodoList store={store} />
      </div>
    );
  }
}

export default App;
