import {createAsyncThunk} from "@reduxjs/toolkit";
import {addNewTodo, Todo} from "./sliceTodo";


export const fetchNewTodo = createAsyncThunk<Todo>(
    'users/fetchByIdStatus',
    async () => {
        const response = await addNewTodo<Todo>()
        return response.data
    }
);

export const deleteTodo = createAsyncThunk(
    'todo/deleteTodo',
    async (_todo: Todo, {dispatch}) => {
        await dispatch(fetchNewTodo());
    }
);

export const toggleTodo = createAsyncThunk(
    'todo/putTodo',
    async (todo: Todo, {dispatch}) => {
        await dispatch(fetchNewTodo());
    }
);