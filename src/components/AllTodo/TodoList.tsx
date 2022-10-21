import React from 'react';
import styles from './AllTodo.module.scss'
import {Button} from "react-bootstrap";
import {Todo} from "../../redux/sliceTodo";


export interface MainPropsType {
    todoList: Todo[];
    onToggle: (todoList: Todo) => void;
    onDelete: (todoList: Todo) => void;
}

const TodoList: React.FC<MainPropsType> = ({todoList, onDelete, onToggle}) => {


    return (
        <ul className={styles.ul}>
            {
                todoList.map((todo) => <li key={todo.id} className={styles.li}>
                        <input onClick={() => onToggle(todo)} value={'text'} type="checkbox"
                               className={styles.checkbox}/>
                        <span>
                            {
                                todo.todo
                            }
                        </span>

                        <Button onClick={() => onDelete(todo)} className={styles.deleteButton}>
                            Delete
                        </Button>

                    </li>
                )}
        </ul>
    )
}

export default TodoList