import styled from "styled-components";
import ReactMarkdown from "react-markdown";

export const H1 = styled.h1`
  position: absolute;
  left: 35%;
`;


export const MarkdownContainer = styled.div`
  position: absolute;
  display: grid;
  top: 20vh;
  min-height:90vh;
  width: 86vw;
  left: 13vw;
  grid-template-columns:repeat(2,1fr);
  grid-gap: 0px;
  border: 1px solid black;
  box-sizing: border-box;
`;

export const Editor = styled.textarea`
  position:relative;
  top: 0;
  display:grid;
  font-size: 18px;
  background: #1e2126;
  color: white;
  border: 1px solid rgba(51,125,140,1);
  box-sizing: border-box;
  max-width: 43vw;
  max-height:90vh;
`;

export const Reviewarea = styled(ReactMarkdown)`
  position:relative;
  top: 0;
  padding: 20px;
  font-size: 18px;
  background: white;
  display:grid;
  border: 1px solid rgba(51,125,140,1);
  box-sizing: border-box;
  max-width: 43vw;

  }

  img {
    position:relative;
    width: 400px;
    height: 350px;
  }
`;

export const SaveButton=styled.button`
position:fixed;
width:80px;
top:91vh;
background:rgb(71,207,115); 
border:none;
border-radius:5px;
height: 35px;
left:52vw;
`
