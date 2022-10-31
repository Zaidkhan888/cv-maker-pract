import React, { useContext } from "react";
import Step4 from "./subcomponents/step4/Step4";
import managerImg from "./subcomponents/step4/manager.png";
import { resumeContext } from "../../../helper/context";
import style from "./style.module.css";
import Step5 from "./subcomponents/step5/Step5";
import homeImg from "./subcomponents/step5/house.png";

function Form() {
  const { step } = useContext(resumeContext);
  let renderComp = null;

  switch (step) {
   
    case 1:
      return (renderComp = (
        <div className={style.form}>  
          <Step4 />
          <img src={managerImg} alt="" class={style.img} />
        </div>
      ));
    case 5:
      return (renderComp = (
        <div className={style.formLast}>
          <Step5 />
          <img src={homeImg} alt="" class={style.img} />
        </div>
      ));
    default:
      renderComp = null;
  }

  return renderComp;
}

export default Form;
