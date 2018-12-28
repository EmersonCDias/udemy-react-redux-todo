import axios from 'axios'

const URL = 'http://localhost:3000/api/todos'

export const changeDescription = e => ({
    type: 'DESCRIPTION_CHANGED',
    payload: e.target.value,
})

export const getData = () => {
    const request = axios.get(`${URL}?sort=createdAt${getData}`)
    return {
        type: 'TODO_GET_DATA',
        payload: request,
    }
}