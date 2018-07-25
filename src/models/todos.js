import { types, getRoot, destroy } from 'mobx-state-tree'
import max from 'lodash/max'

const Todo = types
  .model({
    id: types.identifierNumber,
    title: types.string,
    done: false,
  })
  .actions(self => ({
    remove() {
      getRoot(self).removeTodo(self)
    },
    edit(title) {
      self.title = title
    },
    toggleDone() {
      self.done = !self.done
    },
  }))

const TodoStore = types
  .model({
    todos: types.array(Todo),
  })
  .actions(self => ({
    addTodo(title) {
      const id = (max(self.todos.map(({ id }) => id)) || 0) + 1
      self.todos.unshift({
        id,
        title,
      })
    },
    removeTodo(todo) {
      destroy(todo)
    },
  }))

export default TodoStore