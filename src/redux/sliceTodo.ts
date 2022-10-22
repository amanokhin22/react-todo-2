import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from "@reduxjs/toolkit";

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
                id: (state.todoList[state.todoList.length-1]?.id || 0) + 1,  //Это не для дебилов //Date.now(), это еще один способ
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
})

export const {setTodoList, addNewTodo, deleteTodoList, toggleComplete} = todoSlice.actions

export default todoSlice.reducer