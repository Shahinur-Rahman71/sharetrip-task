import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import HomePage from "./components/HomePage";
import NavBar from './components/NavBar';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar/>
        <Routes >
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
