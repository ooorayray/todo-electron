import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../redux/actions/todos'

class ReduxTodoItem extends React.Component {
  onToggleDone = () => {
    this.props.dispatch(toggleTodo(this.props.todo.id))
  }

  render() {
    const { title, done } = this.props.todo

    return (
      <li>
        <label>
          <input type="checkbox" checked={done} onChange={this.onToggleDone} />
          {title}
        </label>
      </li>
    )
  }
}

export default connect()(ReduxTodoItem)