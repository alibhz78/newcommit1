import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Home";
import Ferantend from './components/Ferantend'
import Magalat from './components/Magalat'
import Security from './components/Security'
import './IRAN Sans.ttf'
import Main from './main'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/home" element={<Navigate replace to={'/'}/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/Main" element={<Main/>}/>
    <Route path="/Frontend" element={<Ferantend/>}/>
    <Route path="/magalat" element={<Magalat/>}/>
    <Route path="/security" element={<Security/>}/>
  </Routes>
  </BrowserRouter>
  ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
