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
    todoList: [],
    loading: false
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        setTodoList(state, action: PayloadAction<Todo[]>) {
            state.todoList = action.payload
        },

    },
})

export const {setTodoList} = todoSlice.actions

export default todoSlice.reducer