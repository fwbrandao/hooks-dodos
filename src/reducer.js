import uuidv4 from 'uuid/v4';

export default function todosReducer(state, action) {
  switch(action.type) {
    case 'GET_TODOS':
      return {
        ...state,
        todos: action.payload
      }
    case 'ADD_TODO':
      // if(!action.payload) {
      //   return state;
      // }
      // if(state.todos.findIndex(t => t.text === action.payload) > -1) {
      //   return state;
      // }
      const addedTodos = [ ...state.todos, action.payload]
      return {
        ...state,
        todos: addedTodos
      };
    case 'SET_CURRENT_TODO':
      return {
        ...state,
        currentTodo: action.payload
      }
    case 'TOGGLE_TODO':
       const toggledTodos = state.todos.map(t => t.id === action.payload.id ? { ...action.payload, complete: !action.payload.complete} : t)
       return {
         ...state, todos: toggledTodos
       };
    case "UPDATE_TODO":
    const updatedTodo = { ...state.currentTodo, text: action.payload }
    const updatedTodoIndex = state.todos.findIndex(
      t => t.id === state.currentTodo.id
    )
    const updateTodos = [
      ...state.todos.slice(0, updatedTodoIndex),
      updatedTodo,
      ...state.todos.slice(updatedTodoIndex + 1)
    ]
    return {
      ...state,
      currentTodo: {},
      todos: updateTodos
    }
    case 'REMOVE':
      const filteredTodos = state.todos.filter(t => t.id !== action.payload.id )
      return {
        ...state,
        todos: filteredTodos
      }
    default:
      return state;
  }
}