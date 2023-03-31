import styled from "styled-components"
import { lq,mq } from "../signin_signup/signup"
import ReactMarkdown from "react-markdown";

export const ArticleContainer = styled.div`
  position:relative;
  top:20vh;
  background:white;
  top:20vh;
  width:85vw;
  left:13vw;
  height:xxx;
  ${mq[1]}{
    top:8vh;
    position:relative;
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

  img {
    width:auto;
    height: auto;
  }
  ${mq[1]}{
    position:relative;
    padding:10px;
    font-size: 18px;
    width:inherit;
    height:inherit;
    img {
      width:60vw;
      height: auto;
    }
  }
`;