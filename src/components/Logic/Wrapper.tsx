import React from 'react';
import AddTodo from '../AddForm/AddTodo';
import TodoList from '../AllTodo/TodoList';
import {AddTodoDTO} from "../AddForm/AddTodo";
import {Todo} from "../../redux/sliceTodo";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../redux/store";
import {selectTodoList} from "../../redux/selectors";


const Wrapper = () => {

    const todoList = useSelector(selectTodoList);
    const dispatch = useAppDispatch();

    const handleAddFormAddTodo = async (data: AddTodoDTO) => {
       await dispatch( (data))
    }

    const handleAllTodosDelete = async (todo: Todo) => {
       await dispatch( (todo))
    }

    return (
        <div>
            <div>
                <AddTodo onAddTodo={handleAddFormAddTodo}/>
            </div>
            <div>
                <TodoList todoList={todoList} onDelete={handleAllTodosDelete}/>
            </div>

        </div>
    )
}

export default Wrapper