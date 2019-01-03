import axios from 'axios'

const URL = 'http://localhost:3000/api/todos'

export const changeDescription = e => ({
  type: 'DESCRIPTION_CHANGED',
  payload: e.target.value,
})

export const getData = () => {
  const request = axios.get(`${URL}?sort=-createdAt`)
  return {
    type: 'TODO_GET_DATA',
    payload: request,
  }
}

export const addTodo = description => {
  return dispatch => {
    axios.post(URL, { description })
      .then(resp => dispatch({type: 'TODO_ADDED', payload: resp.data }))
      .then(() => dispatch(getData()));
  }
}

export const markAsDone = todo => {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(() => dispatch(getData()))
  }
}

export const markAsUndone = todo => {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(() => dispatch(getData()))
  }
}

export const deleteTodo = todo => {
  return dispatch => {
    axios.delete(`${URL}/${todo._id}`)
      .then(() => dispatch(getData()))
  }
}
