import React, { useState } from "react";
import Form from "../../Form/Form";
import { resumeContext } from "../../../helper/context";

import style from "./style.module.css";

function Home() {
  const { Provider } = resumeContext;
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});

  const contextValues = { step, setStep, data, setData };
  
  return (
    <Provider value={contextValues}>
      <div className={style.home}>
        <Form />
      </div>
    </Provider>
  );
}

export default Home;
