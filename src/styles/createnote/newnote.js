import styled from "styled-components";
import ReactMarkdown from "react-markdown";

export const H1 = styled.h1`
  position: absolute;
  left: 35%;
`;

export const Container = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:100vh;
  width: 100vw;
`;

export const MarkdownContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  grid-gap: 20px;
  width: 90%;
  max-width: 800px;
`;

export const Editor = styled.textarea`
  resize: none;
  font-size: 1.2rem;
  background: #1e2126;
  color: white;
  border: 1px solid rgba(51,125,140,1);
  box-sizing: border-box;
  min-height: 200px;
  width: 100%;
  padding: 10px;
  margin: 0;
`;

export const Reviewarea = styled(ReactMarkdown)`
  padding: 20px;
  font-size: 1.2rem;
  background: white;
  border: 1px solid rgba(51,125,140,1);
  box-sizing: border-box;
  min-height: 200px;
  width: 100%;
  margin: 0;
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const SaveButton=styled.button`
  width: 80px;
  background:rgb(71,207,115); 
  border:none;
  border-radius:5px;
  height: 35px;
  margin-top: 20px;
`;

