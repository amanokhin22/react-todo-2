import React from 'react';
import AddTodo from '../AddForm/AddTodo';
import TodoList from '../AllTodo/TodoList';
import {AddTodoDTO} from "../AddForm/AddTodo";
import {addNewTodo, deleteTodoList, Todo, toggleComplete} from "../../redux/sliceTodo";
import {useAppDispatch} from "../../redux/store";


const Wrapper = () => {

    const dispatch = useAppDispatch();

    const handleAddFormAddTodo = async (data: AddTodoDTO) => {
       await dispatch(addNewTodo(data.todoText))
    }

    const handleAllTodosDelete = async (todo: Todo) => {
       await dispatch(deleteTodoList(todo))
    }
    const handleToggleComplete = async (todo: Todo) => {
       await dispatch(toggleComplete(todo))
    }

    return (
        <div>
            <div>
                <AddTodo onAddTodo={handleAddFormAddTodo}/>
            </div>
            <div>
                <TodoList onDelete={handleAllTodosDelete} onToggle={handleToggleComplete}/>
            </div>

        </div>
    )
}

export default Wrapper