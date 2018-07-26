import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxTodoInput from './components/ReduxTodoInput'
import ReduxTodoList from './components/ReduxTodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReduxTodoInput />
        <ReduxTodoList />
      </div>
    );
  }
}

export default App;
