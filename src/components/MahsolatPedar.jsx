import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Mahsolat from "./Mahsolat";
const MahsolatPedar = () => {
  const [state, setstate] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8003/posts")
      .then((resp) => setstate(resp.data));
  });
  const addtosabad=(id)=>{
    let m=state.filter(
          (f)=>f.id == id
      )
      axios.post("http://localhost:8003/mahsol",m)
  }
  return (
    <div className="pedar-mahsolatman">
      {state && state.map((m) =>{
        return  <Mahsolat addto={addtosabad}   key={m.id} name={m.title} cost={m.author} myimg={m.image} theid={m.id}/>
      }

       

      )}
    </div>
  );
};

export default MahsolatPedar;
