import React from 'react'
import { observer } from 'mobx-react'

import TodoItem from './TodoItem'

class TodoList extends React.Component {
  render() {
    const { todos } = this.props.store

    return (
      <section>
        <ul>
          {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </ul>
      </section>
    )
  }
}

export default observer(TodoList)