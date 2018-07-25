import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TodoStore from './models/todos'

const store = TodoStore.create({
  todos: []
})

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
