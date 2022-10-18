import React from 'react';
import styles from './addForm.module.scss'
import {Button} from "react-bootstrap";

const AddForm = () => {
    return (
       <div>
        <div className={styles.textarea}>
            <div>
                <textarea placeholder="Add title" className={styles.title}>
                </textarea>
            </div>
            <div>
                <textarea placeholder="Add text" className={styles.text}>
                </textarea>
            </div>
        </div>
               <Button className={styles.add}>
                   Add
               </Button>

       </div>
    )
}
export default AddForm