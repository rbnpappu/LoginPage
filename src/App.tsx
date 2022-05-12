import React, { useState } from "react";

import {validateInfo} from "./validation"
import "./App.css";

export default function App() {

  let initialValues = { username:"", password:"" };

  const [formValues, setFromValues] = useState(initialValues);
  
  const [errors, setErrors] = useState(initialValues);

  const handleChange = (e: any) => {
    setFromValues({ ...formValues, [e.target.name]: e.target.value });
};

function handleSubmit(e: any) {
    e.preventDefault();
    setErrors(validateInfo(formValues.username,formValues.password));

  }
  
  return (
  <form onSubmit={(e) => handleSubmit(e)} className="form" >
    <div  className = "parent">
      <h1>Login Form</h1>
      <div className="username">
        <label>Enter the User Name</label>
        <input type="text" name="username" value={formValues.username} onChange={handleChange} className="usernameinputbox"/>
        {errors.username!=="valid" &&<p className="error">{errors.username}</p>}
 </div>

      
      <div >
        <label className="password">Enter the Password</label>
        
        <input type="password" name="password" value={formValues.password} onChange={handleChange} className="passwordinputbox"/>

       {errors.password!=="valid"&&<p className="error">{errors.password}</p>}
       
       </div>
       </div> 
      <input type="submit" value="Submit" />
      
  <label style = {{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>Result </label>
     
     {errors.username==="valid"&&<p  style={{color:"green"}}>Username:{formValues.username}</p>}
     {errors.password==="valid"&&<p   style={{color:"green"}}>password:{formValues.password}</p>}

    </form>
  );
}





























