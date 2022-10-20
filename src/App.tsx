import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Wrapper from './components/Logic/TodoListWidget';
import styles from './App.module.scss'

const App = () => {
    return (
        <div className={styles.screen}>
            <Routes>
                <Route path="/*" element={<Wrapper/>}/>
            </Routes>
        </div>
    );
}

export default App;
