import React from "react";
import {useState} from 'react';
import { loginWithGoogle } from "../firebase";




export default function Login() {
  
  return(
    <div className="loginDiv">
      <h1>Sign Up</h1>
      
      {/*<form className="loginPage" onSubmit={handleSubmit()}>
        <input placeholder="Email" onChange = {handleChange} className="Email"/>
        <input placeholder="Password" type="Password" onChange = {handleChange} className="Password"/>
        <button type="submit">Sign Up</button>
      </form>*/}
      <img src={require("../images/googleLogin.png")} onClick = {loginWithGoogle}/>
      
    </div>
  )
  
}