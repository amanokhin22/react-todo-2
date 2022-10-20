import React from 'react';
import styles from './AllTodo.module.scss'
import {Button} from "react-bootstrap";
import {useSelector} from "react-redux";
import {selectTodoList} from "../../redux/selectors";



//Типизировать


const TodoList = () => {
    const todoList = useSelector(selectTodoList);

    return (
        <ul className={styles.ul}>
            {
                todoList.map((todo) => <li key={todo.id} className={styles.li}>
                        <input value={'text'} type="checkbox"/>
                        {
                            todo.todo
                        }
                        <Button className={styles.deleteButton}>
                            Delete
                        </Button>
                    </li>
                )}
        </ul>
    )
}

export default TodoList