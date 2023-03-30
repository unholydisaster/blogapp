import styled from "styled-components"
import { lq,mq } from "../signin_signup/signup"
import ReactMarkdown from "react-markdown";

export const ArticleContainer = styled.div`
  position:absolute;
  top:10vh;
  background:white;
  display: grid;
  top:20vh;
  grid-template-columns:85vw;
  left:13vw;
  height:xxx;
  ${mq[1]}{
    position:absolute;
    top:10vh;
    background:white;
    grid-template-columns:100vw;
    padding:10px;
    height:xxx;
  }
`

export const Article = styled(ReactMarkdown)`
  padding:10px;
  font-size: 1.2rem;
  background:inherit;
  grid-column: 1;
  width:100%;
  margin: 0;


  img {
    max-width:60vw;
    position:relative;
    height: auto;
    left:10vw;
  }
  ${mq[1]}{
    padding:10px;
    font-size: 1.2rem;
    background:inherit;
    grid-column: 1;
    width:100%;
    margin: 0;
  
  
    img {
      width:60%;
      position:relative;
      height: auto;
      left:10vw;
    }
  }
`;