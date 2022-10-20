import React from 'react';
import AddForm from '../AddForm/AddForm';
import AllTodos from '../AllTodo/AllTodos';
import AddTodoDTO from "../AddForm/AddForm";
import {Todo} from "../../redux/sliceTodo";

const Logic = () => {


    const onAddFormAddTodo = (data: typeof AddTodoDTO) => {
        console.log(data)
    }

    const onAllTodosDelete = (todo: Todo) => {
        console.log(todo)
    }

    return (
        <div>
            <div>
                <AddForm onAddTodo={onAddFormAddTodo}/>
            </div>
            <div>
                <AllTodos onDelete={onAllTodosDelete}/>
            </div>

        </div>
    )
}

export default Logic