import React from 'react';
import './App.scss';
import Homepage from "./views/Homepage";
import Login from "./views/Login";
import Join from "./views/Join";

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PasswordRecovery from "./views/PasswordRecovery";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>

                    <Route path="/auth">
                        <Route path="login" element={<Login />} />
                        <Route path="join" element={<Join />} />
                        <Route path="password-recovery" element={<PasswordRecovery />} />
                    </Route>

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
