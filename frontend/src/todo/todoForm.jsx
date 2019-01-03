import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, getData, addTodo } from './todoActions'

class TodoForm extends Component {
  componentWillMount() {
    this.props.getData()
  }

  keyHandler = e => {
    const { addTodo, getData, description } = this.props
    if (e.key === 'Enter') e.shiftKey ? getData() : addTodo(description)
    else if (e.key === 'Escape') this.props.handleClear()
  }

  render() {
    const {
      description,
      addTodo,
      search,
      changeDescription,
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
            onChange={changeDescription}
          />
        </Grid>
        <Grid colunas='12 3 2'>
          <IconButton
            hide={false}
            style='primary'
            icon='plus'
            onClick={() => addTodo(description)}
          />
          <IconButton
            style='info'
            icon='search'
            onClick={() => search()}
          />
          <IconButton
            style='default'
            icon='close'
            onClick={this.props.handleClear}
          />
        </Grid>
      </div>
    )
  }
}

const mapPropsToState = state => ({
  description: state.todo.description
})

const mapDispatchToProps = dispatch => bindActionCreators({ 
  changeDescription,
  getData,
  addTodo,
}, dispatch)

export default connect(mapPropsToState, mapDispatchToProps)(TodoForm)
