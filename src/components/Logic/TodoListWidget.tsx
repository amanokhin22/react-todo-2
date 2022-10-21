import React, {useEffect, useRef} from 'react';
import AddTodo from '../AddForm/AddTodo';
import TodoList from '../AllTodo/TodoList';
import {AddTodoDTO} from "../AddForm/AddTodo";
import {addNewTodo, deleteTodoList, Todo, toggleComplete} from "../../redux/sliceTodo";
import {useAppDispatch} from "../../redux/store";
import {useSelector} from "react-redux";
import {selectTodoList} from "../../redux/selectors";


const TodoListWidget: React.FC = () => {

    const todoList = useSelector(selectTodoList);
    const dispatch = useAppDispatch();

    const handleAddFormAddTodo = async (data: AddTodoDTO) => {
       await dispatch(addNewTodo(data.todoText))
    }

    const handleTodosDelete = async (todo: Todo) => {
       await dispatch(deleteTodoList(todo))
    }
    const handleToggleComplete = async (todo: Todo) => {
       await dispatch(toggleComplete(todo))
    }

    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current) {
            const json = JSON.stringify(todoList);
            localStorage.setItem('todos', json);
        }
        isMounted.current = true;
    }, [todoList]);

    return (
        <div>
            <div>
                <AddTodo onAddTodo={handleAddFormAddTodo}/>
            </div>
            <div>
                <TodoList todoList={todoList} onDelete={handleTodosDelete} onToggle={handleToggleComplete}/>
            </div>

        </div>
    )
}

export default TodoListWidget