const INITIAL_STATE = {
  description: 'Ler livro',
  list: [
    {
      _id: 1,
      description: 'Pagar faturado cartão',
      done: true,
    },
    {
      _id: 2,
      description: 'Reunião às 10h',
      done: false,
    },
    {
      _id: 3,
      description: 'Consulta na terça',
      done: false,
    },
  ],
}
 
export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'DESCRIPTION_CHANGED':
      return { ...state, description: action.payload }
    case 'TODO_SEARCH':
      return { state, list: action.payload.data }
    default:
      return state
  }
}