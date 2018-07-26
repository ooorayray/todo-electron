import React from 'react'
import { connect } from 'react-redux'

import ReduxTodoItem from './ReduxTodoItem'

class ReduxTodoList extends React.Component {
  render() {
    const { todos } = this.props

    return (
      <section>
        <ul>
          {todos.map(todo => <ReduxTodoItem key={todo.id} todo={todo} />)}
        </ul>
      </section>
    )
  }
}

export default connect(state => {
  return ({
  todos: state.todos
})})(ReduxTodoList)