import React, { useContext } from "react";
import { resumeContext } from "../../../../../helper/context";
import pdfMaker from "./pdfMake/pdfMaker";
import style from "./style.module.css";

function Step5(data) {

  const submit = () => {
    pdfMaker(data);
  }
  
  
  
  return (
    <div className={style.main}>
      <h2 style={{"color" : "black"}}>And.....its done!</h2>
      <h2 style={{"color" : "black"}}>Download Your CV</h2>
      <div className={style.buttons}>
       
        <button
          className={style.button1}
          onClick={submit}
        >
          Download
        </button>
    
      </div>
    </div>
  );
}

export default Step5;
