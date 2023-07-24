import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './todo/todo.reducers';

const rootReducer = combineReducers({
    todo: todoReducer
})

export const redux = configureStore({
    reducer: rootReducer
});

// exported const redux above is the folder name we created for redux (should be either store or redux as mentioned within my info.js file created within src folder)