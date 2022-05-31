import Fatherofsabtnam from "./Fatherofsabtnam";
import React from "react";
import Mahsolatpedar from "./components/MahsolatPedar"
import "swiper/css/bundle";
import Favorit from "./components/Favorit";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Home";
import Ferantend from './components/Ferantend'
import Magalat from './components/Magalat'
import Security from './components/Security'
import './IRAN Sans.ttf'
import Instegram from "./components/Instegram";
import Gmail from "./components/Gmail";
import Telegram from "./components/Telegram";
import Whatsapp from "./components/Whatsapp";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/home" element={<Navigate replace to={'/'}/>}/>
    <Route path="/" element={<Home/>}/> 
    <Route path="/Instegram" element={<Instegram/>}/>
    <Route path="/Telegram" element={<Telegram/>}/>
    <Route path="/Gmail" element={<Gmail/>}/>
    <Route path="/Whatsapp" element={<Whatsapp/>}/>
    <Route path="/Main" element={<Fatherofsabtnam/>}/>
    <Route path="/Frontend" element={<Ferantend/>}/>
    <Route path="/magalat" element={<Magalat/>}/>
    <Route path="/security" element={<Security/>}/>
    <Route path="/Favorit" element={<Favorit/>}/>
    <Route path="/doreha" element={<Mahsolatpedar/>}/>
  </Routes>
  </BrowserRouter>
  ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
