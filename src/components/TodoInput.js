import React from 'react'
import { observer } from 'mobx-react'

class TodoInput extends React.Component {
  state = {
    title: '',
  }

  onChange = (e) => {
    this.setState({ title: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.store.addTodo(this.state.title)
    this.setState({ title: '' })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.title}
          onChange={this.onChange}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default observer(TodoInput)