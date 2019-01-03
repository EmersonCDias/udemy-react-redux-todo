import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'
import { markAsDone, markAsUndone, deleteTodo } from './todoActions'

const TodoList = ({
  markAsDoneDispatch,
  markAsUndoneDispatch,
  deleteTodoDispatch,
  todoList,
}) => {
  const renderRows = () => {
    const list = todoList || []
    return list.map((todo, key) => (
      <tr key={key}>
        <td className={todo.done ? 'markedAsDone' : ''}>
          {todo.description}
        </td>
        <td>
          <IconButton
            hide={todo.done}
            style='success'
            icon='check'
            onClick={() => markAsDoneDispatch(todo)}
          />
          <IconButton
            hide={!todo.done}
            style='warning'
            icon='undo'
            onClick={() => markAsUndoneDispatch(todo)}
          />
          <IconButton
            hide={!todo.done}
            style='danger'
            icon='trash-o'
            onClick={() => deleteTodoDispatch(todo)}
          />
        </td>
      </tr>
    ))
  }

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Description</th>
            <th className="tableActions">Ações</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = state => ({
  todoList: state.todo.list,
})

const mapDispatchToProps = dispatch => ({
  markAsDoneDispatch: value => dispatch(markAsDone(value)),
  deleteTodoDispatch: value => dispatch(deleteTodo(value)),
  markAsUndoneDispatch: value => dispatch(markAsUndone(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
