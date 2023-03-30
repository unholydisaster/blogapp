import styled from "styled-components"
import { lq,mq } from "../signin_signup/signup"
import ReactMarkdown from "react-markdown";

export const ArticleContainer = styled.div`
  position:absolute;
  top:20vh;
  background:white;
  display:flex;
  top:20vh;
  width:85vw;
  left:13vw;
  height:xxx;
  ${mq[1]}{
    position:absolute;
    top:20vh;
    background:white;
    left:-5vw;
    height:xxx;
  }
`

export const Article = styled(ReactMarkdown)`
  padding:10px;
  font-size: 18px;
  width:100%;

  img {
    width:60vw;
    height: auto;
  }
  ${mq[1]}{
    padding:10px;
    font-size: 18px;
    background:white;
    img {
      width:60vw;
      height: auto;
    }
  }
`;