import styled from "styled-components"
import { lq,mq } from "../signin_signup/signup"
import ReactMarkdown from "react-markdown";

export const ArticleContainer = styled.div`
  position:absolute;
  top:20vh;
  background:white;
  top:20vh;
  width:85vw;
  left:13vw;
  height:xxx;
  ${mq[1]}{
    top:8vh;
    position:absolute;
    width:100vw;
    left:0vw;
    height:xxx;
  }
`

export const Article = styled(ReactMarkdown)`
  position:relative;
  padding:10px;
  font-size: 18px;
  width:100%;
  word-wrap: break-word;

  ${mq[1]}{
    position:relative;
    padding:10px;
    font-size: 18px;
    height:inherit;

    img{
      width:50vw;
      height: auto;
      
      .heroimage{
        width:90vw;
        height:40vw;
      }
    }
`;

