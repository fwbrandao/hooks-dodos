import React from 'react';

const TodosContext = React.createContext({
  todos: [
    { id: 1, text: "Eat Breakfast", complete: false },
    { id: 2, text: "Fix the planet", complete: false },
    { id: 3, text: "Finish Hooks", complete: true },
  ]
})

export default TodosContext;