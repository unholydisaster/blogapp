import React from 'react';

import {
  FormContainer,
  FormWrapper,
  FormTitle,
  FormInput,
  FormButton,
} from '../styles/signin_signup/signup';

import { useState } from "react";
import { useRouter } from 'next/router';
import {useCookies} from "react-cookie"
import axios from "axios";
import Cookies from "js-cookie"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const [_,setCookies]=useCookies(["access_token"]);
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleLogin = async (event) => {
      event.preventDefault();
  
      try{
        const BASE_URL = process.env.BASE_URL;
        const response = await axios.put(`${BASE_URL}/api/auth`,
        {
          email, 
          password
        })
        alert("Successfully logedin")
        console.log(response)
        setCookies("access_token", response.data.token)
        Cookies.set("userID", response.data.UserID)
        router.push('/')
      }catch(err){
        console.error(err)
      }
    };
  
  return (
    <FormContainer>
      <FormWrapper>
      <form onSubmit={handleLogin}>      
        <FormTitle>Sing In</FormTitle>
        <FormInput type="email" placeholder="Email" value={email} onChange={handleEmailChange}/>
        <FormInput type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
        <FormButton>Sign In</FormButton>
       </form> 
      </FormWrapper>
    </FormContainer>
  );
};

export default Login;