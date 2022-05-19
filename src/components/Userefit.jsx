import React from "react";
import { useRef } from "react";
import { useState } from "react";
import Signin from "../Signin";
import Signup from "../signup";
const Userefit = () => {
  const [capmpare,setcapmpare]=useState(true)
  const ref1 = useRef();
  const ref2 = useRef();
  const changtheresponsivsign = () => {
    ref1.current.style.transform = "translatey(29%)";
    ref1.current.style.transition= "all .1s linear"
    ref2.current.style.backgroundColor = "#02198B";
    setcapmpare(false);
  };
  const changtheresponsivlogin = () => {
    ref1.current.style.transform = "translatey(0%)";
    ref2.current.style.backgroundColor = "#191B1B";
    setcapmpare(true);
  };
  return (
    <>
      <div ref={ref2} className="pedare-divresponsiv-pedar-login">
        <div className="divresponsiv-pedar-login">
          <div ref={ref1} className="div-mohtava-sabt-responsiv">{capmpare?<Signup/>:<Signin/>}</div>
          <div className="div-sabt-responsiv">
            آیا حساب کاربری ندارید؟
            <button
              onClick={() => changtheresponsivlogin()}
              className="btn-responsiv-sabt btn1-resp"
            >
              ثبت نام
            </button>
          </div>
          <div className="div-sabt-responsiv">
            <span className="span-sign-responsiv"> از قبل ثبت نام کرده اید</span>
            <button
              onClick={() => changtheresponsivsign()}
              className="btn-responsiv-sabt btn2-resp"
            >
              ورود
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Userefit;
