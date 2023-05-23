import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Main} from './pages/Main'
import {Result} from './pages/Result'
import { LifeStyleInfo } from './pages/LifeStyleInfo';


const Router =() =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element ={<Main/>} />
        <Route exact path="/result" element ={<Result/>} />
        <Route exact path="/lifeStyleInfo" element ={<LifeStyleInfo/>} />
      </Routes>
    </BrowserRouter>
  )
}

const App = () =>{
  return Router();
}

export default App;
