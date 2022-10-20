import {RootState} from "./store";
import {createSelector} from "@reduxjs/toolkit";
import {Todo} from "./sliceTodo";


export const selectTodo = (state: RootState) => state.todo;

export const selectTodoList = createSelector(selectTodo, (todo): Todo[] => todo.todoList);


export const selectSortedTodoList = createSelector(selectTodoList, (todoList) => [...todoList].sort((a, b) => Number(a.completed) - Number(b.completed)))

