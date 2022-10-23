import React, {useEffect} from 'react';
import AddTodo from '../AddForm/AddTodo';
import TodoList from '../AllTodo/TodoList';
import {AddTodoDTO} from "../AddForm/AddTodo";
import { Todo} from "../../redux/sliceTodo";
import {useAppDispatch} from "../../redux/store";
import {useSelector} from "react-redux";
import {selectTodoList} from "../../redux/selectors";
import {createTodoThunk, deleteTodoThunk, initTodoListThunk, toggleTodoThunk} from "../../redux/asyncThunk";


const TodoListWidget: React.FC = () => {

    const todoList = useSelector(selectTodoList);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(initTodoListThunk())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const handleAddFormAddTodo = async (data: AddTodoDTO) => {
       await dispatch(createTodoThunk(data.todoText))
    }
    
    const handleTodosDelete = async (todo: Todo) => {
       await dispatch(deleteTodoThunk(todo))
    }
    const handleToggleComplete = async (todo: Todo) => {
       await dispatch(toggleTodoThunk(todo))
    }
    
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