import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import {Home} from "./components/Home";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Routes>
              <Route   path="/" element={<Home/>} />
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
