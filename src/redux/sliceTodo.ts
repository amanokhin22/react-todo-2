import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from "@reduxjs/toolkit";
import {deleteTodo, fetchNewTodo, toggleTodo} from "./asyncThunk";


export interface Todo {
    todo: string,
    id: number,
    completed: boolean
}

export interface TodoState {
    todoList: Todo[];
}

const initialState: TodoState = {
    todoList: [],
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        setTodoList(state, action: PayloadAction<Todo[]>) {
            state.todoList = action.payload
        },
        addNewTodo(state, action: PayloadAction<string>) {
            const newTodo: Todo = {
                todo: action.payload,
                id: Date.now(),  //state.todoList[state.todoList.length-1]?.id + 1, //Это не для дебилов //Date.now(), это еще один способ
                completed: false
            }
             state.todoList.push(newTodo)
        },
        toggleComplete(state, action: PayloadAction<Todo>) {
            const toggledTodo = state.todoList.find(todo => todo.id === action.payload.id)!
            toggledTodo.completed = !toggledTodo.completed
        },
        deleteTodoList(state, action: PayloadAction<Todo>) {
            state.todoList = state.todoList.filter(todo => todo.id !== action.payload.id)
        },
    },
    extraReducers: (builder) => {

        // builder.addCase(fetchNewTodo.fulfilled, (state, action) => {
        //     state.todoList = action.payload;//Если всё норм пришло
        // });
        // builder.addCase(fetchNewTodo.rejected, (state) => {
        //     state.todoList = [];// Если ошибки пришли
        // });
        //
        // builder.addCase(deleteTodo.fulfilled, (state) => {
        //
        // });
        // builder.addCase(deleteTodo.rejected, (state) => {
        //     state.todoList = [];
        // });
        //
        // builder.addCase(toggleTodo.fulfilled, (state) => {
        //
        // });
        // builder.addCase(toggleTodo.rejected, (state) => {
        //     state.todoList = [];
        // });
    },
})

export const {addNewTodo, deleteTodoList, toggleComplete} = todoSlice.actions

export default todoSlice.reducer