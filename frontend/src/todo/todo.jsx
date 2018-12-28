import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'
import Axios from 'axios'

const URL = 'http://localhost:3000/api/todos'

export default class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      description: '',
      list: []
    }
    this.refresh()
  }

  refresh = (description = '') => {
    const search = description ? `&description__regex=/${description}/` : ''
    Axios.get(`${URL}?sort=-createdAt${search}`)
      .then(resp => this.setState({
        ...this.state,
        description,
        list: resp.data,
      })
      )
  }

  handleSearch = () => {
    this.refresh(this.state.description);
  }

  handleClear = () => {
    this.refresh()
  }

  handleChange = event => {
    this.setState({
      description: event.target.value
    })
  }

  handleAdd = event => {
    console.log(event)
    event.preventDefault()
    Axios.post(URL, {
      description: this.state.description
    }).then(resp => this.refresh())
  }

  handleRemove = todo => {
    Axios.delete(`${URL}/${todo._id}`)
      .then(resp => this.refresh(this.state.description))
  }

  handleMarkAsDone = todo => {
    Axios.put(`${URL}/${todo._id}`, {
      done: true
    }).then(resp => this.refresh(this.state.description))
  }

  handleMarkAsPending = todo => {
    Axios.put(`${URL}/${todo._id}`, {
      done: false
    }).then(resp => this.refresh(this.state.description))
  }

  render() {
    return (
      <div>
        <PageHeader name='Tarefas' small='Cadastro' />
        <TodoForm
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
        />
        <TodoList
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
          handleRemove={this.handleRemove}
        />
      </div>
    )
  }
}