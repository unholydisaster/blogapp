import styled from "styled-components";
import ReactMarkdown from "react-markdown";

export const H1 = styled.h1`
  position: absolute;
  left: 35%;
`;

export const Container = styled.form`
  position:relative;
  display:flex;
  top:10vh;
  height:80vh;
  width: 86vw;
  left:13vw;
  border: 1px solid black;

`;

export const MarkdownContainer = styled.div`
  position:absolute;
  display: grid;
  height:inherit;
  width:inherit;
  grid-template-columns:repeat(2,1fr);
  grid-gap: 0px;
  border: 1px solid black;

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
  width: 43vw;
  height:90vh;
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
  width: 43vw;

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
