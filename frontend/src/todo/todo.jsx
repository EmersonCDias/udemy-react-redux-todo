import React from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'

const Todo = () => (
  <div>
    <PageHeader name='Tarefas' small='Cadastro' />
    <TodoForm />
    <TodoList />
  </div>
)

export default Todo
