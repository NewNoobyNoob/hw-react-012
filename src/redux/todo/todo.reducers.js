import { TODO_ACTIONS } from "./action.keys"

const initialState = {
    todoList: [],
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_ACTIONS.ADD_TODO:
          return { 
            todoList: [...state.todoList, action.payload]
        }
        default:
          return state
      }
}

// switch coppied from Getting Started with Redux left hand side submenu Basic Examples, just adjusted as per our needs/reality