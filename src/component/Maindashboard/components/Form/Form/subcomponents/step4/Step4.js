import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { resumeContext } from "../../../../../helper/context";
import style from "./style.module.css";

function Step4() {
  const { setStep, data } = useContext(resumeContext);

  var initialValues = {
    ref1: "",
    details1: "",
  
  };

  const onSubmit = (values) => {
    setStep(5);
    
  };

  return (
    <Formik
      initialValues={data.refer || initialValues}
      // validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={style.formInput}>
        <h3>Create Your CV here</h3>

        <label htmlFor="ref1">Full Name</label>
        <Field
          name="ref1"
         
          className={style.textField}
        />
        

        <label htmlFor="details1">Contact Number </label>
        <Field
          name="details1"
          placeholder="+91-9999999999"
          className={style.textField}
        />
        <label htmlFor="details1">Email</label>
        
        <Field
          name="details2"
          placeholder="example@gmail.com"
          className={style.textField}
        />
        <label htmlFor="details2">Address</label>
        <Field
          name="details3"
          className={style.textField}
        />
        <label htmlFor="details3">Profile</label>
        <Field
          name="details4"
          className={style.textField}
        />
        <label htmlFor="details4">Skills</label>
        <Field
          name="details5"
          className={style.textField}
        />
        <h2>Experience</h2>

        <label htmlFor="details5">Position</label>
        <Field
          name="details6"
          className={style.textField}
        />
        <label htmlFor="details6">Company</label>
        <Field
          name="details7"
          className={style.textField}
        />  
        <label htmlFor="details7">Job Description</label>
        <Field
          name="details8"
          className={style.textField}
        />
                <h2>Education</h2>
        <label htmlFor="details8">School </label>
        <Field
          name="details9"
          className={style.textField}
        />
        <label htmlFor="details9">College</label>
        <Field
          name="details10"
          className={style.textField}
        />
        <label htmlFor="details10">College</label>



                
                <h2>References</h2>

        {/* <br></br> */}

        <label htmlFor="ref2">Reference</label>
        <Field
          name="ref2"
          className={style.textField}
        />
       

        <label htmlFor="details2">Contact details</label>
        <Field
          name="details2"
          className={style.textField}
        />
    

        <div className={style.buttons}>
          
          <button type="submit" className={style.button}>
            Next
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default Step4;
