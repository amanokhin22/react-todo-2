import React from 'react';
import styles from './AllTodo.module.scss'
import {Button} from "react-bootstrap";
import {Todo} from "../../redux/sliceTodo";

export interface MainPropsType {
    todoList: Todo[];
    onToggle: (todo: Todo) => void;
    onDelete: (todo: Todo) => void;
}

const AllTodos: React.FC<MainPropsType> = ({todoList}) => {
    return (
        <ul className={styles.ul}>
            {
                todoList.map((todo) => <li key={todo.id} className={styles.li}>
                        <input value={'text'} type="checkbox"/>
                        <Button className={styles.deleteButton}>
                            Delete
                        </Button>
                    </li>
                )}
        </ul>
    )
}

export default AllTodos