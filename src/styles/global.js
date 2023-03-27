import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import {mq} from "../styles/signin_signup/signup"

export const GlobalStyle=createGlobalStyle`{
    body{
        margin:0;
        padding:0;
        font-family: Arial, san-serif;
        background: rgb(19,20,23);
        opacity:100%;
        overflow-x: hidden;
        ${mq[1]}{
            background-color:rgb(19,20,23);
        }
    }
}`


