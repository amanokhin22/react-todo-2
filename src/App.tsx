import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Logic from './components/Logic/Logic';
import styles from './App.module.scss'

const App = () => {
    return (
        <div className={styles.screen}>
            <Routes>
                <Route path="/*" element={<Logic/>}/>
            </Routes>
        </div>
    );
}

export default App;
