import React, {useState} from 'react';
import styles from './addForm.module.scss'
import {Button} from "react-bootstrap";

interface AddFormType {
    onAddTodo: (data: AddTodoDTO) => void
}

interface AddTodoDTO {
    todo: string
}

    const AddForm: React.FC<AddFormType> = ({onAddTodo}) => {
    const [todo, setTodo] = useState('');

    const handleTodoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTodo(event.target.value)
    }

    const handleClick = (event: React.UIEvent) => {
        event.preventDefault();
        onAddTodo({todo});
        setTodo('');
    }

    return (
        <div>
            <div className={styles.textarea}>
                <label>
                <textarea value={todo} onChange={handleTodoChange} placeholder="Add title" className={styles.title}>
                </textarea>
                </label>
            </div>
            <Button disabled={todo.length < 3} onClick={handleClick} className={styles.add}>
                Add Todo
            </Button>

        </div>
    )
}
export default AddForm