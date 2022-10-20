import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from "@reduxjs/toolkit";


export interface Todo {
    todo: string,
    id: number,
    completed: boolean
}

export interface TodoState {
    todoList: Todo[];
    loading: boolean;
}

const initialState: TodoState = {
    todoList: [{
        todo: 'string',
        id: 0,
        completed: true
    }],
    loading: false
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        setTodoList(state, action: PayloadAction<Todo[]>) {
            state.todoList = action.payload
        },
        toggleComplete(state, action: PayloadAction<Todo[]>) {
            const toggledTodo = state.todoList.find(todo => todo.id === action.payload.id)
            toggledTodo.completed = !toggledTodo.completed
        },
        deleteTodoList(state, action: PayloadAction<Todo[]>) {
            state.todoList = state.todoList.filter(todo => todo.id !== action.payload.id)
        },

    },
})

export const {setTodoList, deleteTodoList, toggleComplete} = todoSlice.actions

export default todoSlice.reducer