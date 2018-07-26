import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions/todos'

class ReduxTodoInput extends React.Component {
  state = {
    title: '',
  }

  onChange = (e) => {
    this.setState({ title: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(addTodo(this.state.title))
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

export default connect()(ReduxTodoInput)