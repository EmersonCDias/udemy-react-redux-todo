import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, getData } from './todoActions'

class TodoForm extends Component {
  keyHandler = e => {
    if (e.key === 'Enter') e.shiftKey ? this.props.handleSearch() : this.props.handleAdd(e)
    else if (e.key === 'Escape') this.props.handleClear()
  }

  componentWillMount() {
    this.props.getData();
  }

  render() {
    const {
      description,
      changeDescription,
      handleAdd,
      getData,
      handleClear,
      handleSearch
    } = this.props

    console.log('props', this.props);

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
            onClick={handleAdd}
          />
          <IconButton
            style='info'
            icon='search'
            onClick={handleSearch}
          />
          <IconButton
            style='default'
            icon='close'
            onClick={handleClear}
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
}, dispatch)

export default connect(mapPropsToState, mapDispatchToProps)(TodoForm)
