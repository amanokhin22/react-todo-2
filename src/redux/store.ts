import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import todoSlice from "./sliceTodo";

export const store = configureStore({
    reducer: {
        todo: todoSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();