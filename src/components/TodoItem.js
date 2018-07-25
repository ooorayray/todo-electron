import React from 'react'
import { observer } from 'mobx-react'

class TodoItem extends React.Component {
  onToggleDone = () => {
    this.props.todo.toggleDone()
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

export default observer(TodoItem)