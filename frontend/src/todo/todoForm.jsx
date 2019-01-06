import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, getData, addTodo, clear } from './todoActions'

class TodoForm extends Component {
  componentWillMount() {
    this.props.getDataDispatch()
  }

  keyHandler = e => {
    const { addTodoDispatch, clearDispatch, getDataDispatch, description } = this.props
    if (e.key === 'Enter') e.shiftKey ? getDataDispatch() : addTodoDispatch(description)
    else if (e.key === 'Escape') clearDispatch()
  }

  render() {
    const {
      addTodoDispatch,
      changeDescriptionDispatch,
      clearDispatch,
      description,
      getDataDispatch,
    } = this.props

    return (
      <div role='form' className='todoForm'>        
        <Grid colunas='12 9 5'>
          <input
            id='description'
            className='form-control'
            placeholder='Adicionar uma tarefa'
            value={description}
            onKeyUp={this.keyHandler}
            onChange={changeDescriptionDispatch}
          />
        </Grid>
        <Grid colunas='12 3 2'>
          <IconButton
            hide={false}
            style='primary'
            icon='plus'
            onClick={() => addTodoDispatch(description)}
          />
          <IconButton
            style='info'
            icon='search'
            onClick={getDataDispatch}
          />
          <IconButton
            style='default'
            icon='close'
            onClick={clearDispatch}
          />
        </Grid>
      </div>
    )
  }
}

const mapPropsToState = state => ({
  description: state.todo.description
})

const mapDispatchToProps = dispatch => ({ 
  changeDescriptionDispatch: value => dispatch(changeDescription(value)),
  getDataDispatch: () => dispatch(getData()),
  addTodoDispatch: value => dispatch(addTodo(value)),
  clearDispatch: () => dispatch(clear())
})

export default connect(mapPropsToState, mapDispatchToProps)(TodoForm)
