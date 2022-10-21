import React, {useState} from 'react';
import styles from './addForm.module.scss'
import {Button} from "react-bootstrap";

export interface AddFormType {
    onAddTodo: (data: AddTodoDTO) => void
}

export interface AddTodoDTO {
    todoText: string
}
    const AddTodo: React.FC<AddFormType> = ({onAddTodo}) => {
    const [todoText, setTodoText] = useState('');

    const handleTodoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTodoText(event.target.value)
    }

    const handleClick = (event: React.UIEvent) => {
        event.preventDefault();
        onAddTodo({todoText});
        setTodoText('');
    }

    return (
        <div>
            <div className={styles.textarea}>
                <label>
                <textarea value={todoText} onChange={handleTodoChange} placeholder="Add title" className={styles.title}>
                </textarea>
                </label>
            </div>
            <Button disabled={todoText.length <= 3} onClick={handleClick} className={styles.add}>
                Add Todo
            </Button>

        </div>
    )
}
export default AddTodo