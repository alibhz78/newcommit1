import React from "react";
import Signin from "./Signin";
import Signup from "./signup";
import { useState } from "react";
const Main = () => {
  const [capmpare,setcapmpare]=useState(true)
  const signup=()=>{
    document.getElementById('sabt-nam')
    .style.transform="translateX(100%)";
    setcapmpare(false);
    document.getElementById('div-login-grandpa').style.backgroundColor=" #4e4e4e"
   
  }
  const signin=()=>{
    document.getElementById('sabt-nam')
    .style.transform="translateX(0%)";
    setcapmpare(true);
    document.getElementById('div-login-grandpa').style.backgroundColor="#02198B"
  }
  return (
    <>
      <div id="div-login-grandpa" className="div-login-grandpa">
        <div className="div-login-pedar">
          <div id="sabt-nam" className="sabt-nam">{capmpare==true?<Signin/>:<Signup/>}</div>
          <div className="div-login-pesar">
            <div className="div-sign-up">
              <h3>آیا حساب کاریری ندارید؟!!</h3>
              <button onClick={signup} className="btn-sign">ثبت نام</button>
            </div>
            <div className="div-sign-in">
              <h3> از قبل ثبت نام کرده اید </h3>
              <button onClick={signin} className="btn-sign">ورود</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
