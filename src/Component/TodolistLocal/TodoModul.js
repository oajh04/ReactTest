import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialTodos = JSON.parse(localStorage.getItem('todolist'));

const todoReducer = (state, action) => {
  switch(action.type){
    case 'ADD_TODO':
        return state.concat(action.todo);
    case 'CHECK_TODO':
        return state.map(todo=>
            todo.id === action.id ? {...todo, check: !todo.check} : todo);
    case 'DELETE_TODO':
        return state.filter(todo => todo.id !== action.id);
    case 'CHANGE_TODO':
        return state.map(todo=>
            todo.id === action.id ? { ...todo, text: action.modifyText} : todo);
    default:
        return null;  
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoIdContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);

  const idset = (state) => {
    if(!state){
      return 1
    }
    else{
      return state[state.length-1].id + 1
    }
  }

  const id = useRef(idset());
  localStorage.setItem('todolist', JSON.stringify(state));

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoIdContext.Provider value={id}>
          {children}
        </TodoIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

/* 
커스텀 hook 사용성이 편하게 하기 위해
이거 안하면 나중에 쓸때
const state = useContext(TodoStateContext); 를 다 써야함

하면
const state = useTodoState(); 로 간결하게 가능
*/
export const useTodoState = () => {
  const context = useContext(TodoStateContext);
  if(!context) {
    alert("STATE 오류");
  }
  return context;

}

export const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);
  if(!context) {
    alert("DISPATCH 오류");
  }
  return context;
}

export const useTodoId = () => {
  const context = useContext(TodoIdContext);
  if(!context) {
    alert("USETODOID 오류");
  }
  return context;
}