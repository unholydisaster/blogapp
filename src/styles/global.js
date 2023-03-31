import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import {mq} from "../styles/signin_signup/signup"

export const GlobalStyle=createGlobalStyle`{

    /* Works on Firefox */
    * {
      box-sizing: border-box;
      scrollbar-width: thin;
      scrollbar-color: #1D59B4;
    }
    /* Works on Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
      width: 10px;
    }
    *::-webkit-scrollbar-track {
      background: #1D59B4;
    }
    *::-webkit-scrollbar-thumb {
      background-color: #1D59B4;
      border-radius: 30px;
      border: 2px solid #1D59B4;
    }    
    body{
        margin:0;
        padding:0;
        position:relative;
        font-family: Arial, san-serif;
        background: rgb(19,20,23);
        opacity:100%;
        overflow-x: hidden;
        ${mq[1]}{
            background-color:rgb(19,20,23);
        }
    }
}`


