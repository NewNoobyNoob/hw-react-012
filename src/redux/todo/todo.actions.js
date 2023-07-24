import { TODO_ACTIONS } from "./action.keys"
export const addTodoAction = (payload) => {
    return {
        type: TODO_ACTIONS.ADD_TODO,
        payload: payload
    }
}
//! note not all actions need payload, for example if we have <type: 'TOGGLE'> do not need payload!

//we can write above action in shorter version like below:

//export const addTodoAction = (payload) => ({
//    type: 'ADD_TODO', 
//    payload
//})