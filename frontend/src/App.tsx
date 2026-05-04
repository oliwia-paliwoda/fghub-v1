import React from 'react';
import './App.scss';
import Homepage from "./views/Homepage";
import Login from "./views/Login";
import Join from "./views/Join";

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/join" element={<Join/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
