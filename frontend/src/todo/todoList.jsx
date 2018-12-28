import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'

const TodoList = props => {
  const renderRows = () => {
    const list = props.list || []
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
            onClick={() => props.handleMarkAsDone(todo)}
          />
          <IconButton
            hide={!todo.done}
            style='warning'
            icon='undo'
            onClick={() => props.handleMarkAsPending(todo)}
          />
          <IconButton
            hide={!todo.done}
            style='danger'
            icon='trash-o'
            onClick={() => props.handleRemove(todo)}
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
  list: state.todo.list,
})

export default connect(mapStateToProps)(TodoList)
