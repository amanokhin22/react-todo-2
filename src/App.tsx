import React from 'react';
import {Route, Routes} from 'react-router-dom';
import TodoListWidget from './components/Logic/TodoListWidget';
import styles from './App.module.scss'

const App = () => {
    return (
        <div className={styles.screen}>
            <Routes>
                <Route path="/*" element={<TodoListWidget/>}/>
            </Routes>
        </div>
    );
}

export default App;
