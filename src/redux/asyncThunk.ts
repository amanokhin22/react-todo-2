import {createAsyncThunk} from "@reduxjs/toolkit";
import {addNewTodo, deleteTodoList, setTodoList, Todo, toggleComplete} from "./sliceTodo";
import {selectTodoList} from "./selectors";
import {RootState} from "./store";


export const createTodoThunk = createAsyncThunk(
    'todo/createTodo',
    async (todoText: string, {dispatch, getState}) => {
        await dispatch(addNewTodo(todoText));
        const todoList = selectTodoList(getState() as RootState);
        const json = JSON.stringify(todoList);
        localStorage.setItem('todos', json);
    }
);

export const deleteTodoThunk = createAsyncThunk(
    'todo/deleteTodo',
    async (todo: Todo, {dispatch, getState}) => {
        await dispatch(deleteTodoList(todo));
        const todoList = selectTodoList(getState() as RootState);
        const json = JSON.stringify(todoList);
        localStorage.setItem('todos', json);
    }
);

export const toggleTodoThunk = createAsyncThunk(
    'todo/toggleTodo',
    async (todo: Todo, {dispatch, getState}) => {
        await dispatch(toggleComplete(todo));
        const todoList = selectTodoList(getState() as RootState);
        const json = JSON.stringify(todoList);
        localStorage.setItem('todos', json);
    }
);

export const initTodoListThunk = createAsyncThunk(
    'todo/initTodo',
    async (_, {dispatch}) => {
        const data = localStorage.getItem('todos');
        const todoList: Todo[] = data ? JSON.parse(data) : []
        await dispatch(setTodoList(todoList));
    }
);