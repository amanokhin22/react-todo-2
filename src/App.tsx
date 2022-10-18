import React from 'react';

import './App.css';
import {Route, Routes} from "react-router-dom";
import Logic from "./components/Logic/Logic";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path="*/" element={<Logic/>}/>
            </Routes>
        </div>
    );
}

export default App;
