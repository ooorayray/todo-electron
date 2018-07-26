import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import ReduxApp from './ReduxApp'
import registerServiceWorker from './registerServiceWorker';
import TodoStore from './models/todos'
import todosReducer from './redux/reducers/todos'

const store = TodoStore.create({
  todos: []
})

const reduxStore = createStore(combineReducers({
  todos: todosReducer
}))

ReactDOM.render(
  <div>
    <h2>MST</h2>
    <App store={store} />

    <h2>Redux</h2>
    <Provider store={reduxStore}>
      <ReduxApp />
    </Provider>
  </div>
, document.getElementById('root'));
registerServiceWorker();
