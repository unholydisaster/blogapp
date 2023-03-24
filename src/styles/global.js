import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import {mq} from "../styles/signin_signup/signup"

export const GlobalStyle=createGlobalStyle`{
    body{
        margin:0;
        padding:0;
        font-family: Arial, san-serif;
        background-color:#0F1F37;
        ${mq[1]}{
            background-color:white;
        }
    }
}`


