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
    left:-10px;
    height:xxx;
  }
`

export const Article = styled(ReactMarkdown)`
  padding:10px;
  font-size: 18px;
  background:inherit;
  grid-column: 1;
  width:100%;

  img {
    width:60vw;
    position:relative;
    height: auto;
  }
  ${mq[1]}{
    padding:10px;
    font-size: 18px;
    background:white;
    display:grid;
    grid-column: 1;
    width:100vw;
    img {
      width:60vw;
      height: auto;
    }
  }
`;