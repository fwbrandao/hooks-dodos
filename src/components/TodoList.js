import React, { useContext } from 'react';
import TodosContext from '../context';

export default function TodoList() {
  const {state, dispatch} = useContext(TodosContext);

  const title = state.todos.lenght > 0 ? `${state.todos.lenght} Todos` : "Relax, nothing to do";

  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-bold">{title}</h1>
      <br />
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
              <span
              onDoubleClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo })}
              className={`flex-1 ml-12 cursor-pointer ${todo.complete && "line-through text-grey-darkest"}`}>{todo.text}
              </span>
              <button>
                <img
                src="https://icon.now.sh/edit/0050c5"
                alt="Edit icon"
                className="h-6"
                 />
              </button>
              <button>
                <img
                src="https://icon.now.sh/delete/8b0000"
                alt="Delete icon"
                className="h-6"
                 />
              </button>
          </li>
        ))}
      </ul>
    </div>
  )

}