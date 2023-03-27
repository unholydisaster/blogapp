import styled from "styled-components";
import ReactMarkdown from "react-markdown";

export const H1 = styled.h1`
  position: absolute;
  left: 35%;
`;

export const MarkdownContainer = styled.div`
  position: absolute;
  top: 20vh;
  min-height: 90%;
  width: 80vw;
  left: 15vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  border: 1px solid black;
  box-sizing: border-box;
`;

export const Editor = styled.textarea`
  top: 0;
  font-size: 18px;
  background: #1e2126;
  color: white;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  max-width: 40vw;
`;

export const Reviewarea = styled(ReactMarkdown)`
  top: 0;
  padding: 20px;
  font-size: 18px;
  background: white;
  border: 1px solid blue;
  box-sizing: border-box;
  max-width: 40vw;

  h1 {
    color: brown;
    font-family: "Lucida Console", "Courier New", monoscope;
  }
  p {
    color: #333333;
    font-size: 21px;
  }

  img {
    width: 500px;
    height: 400px;
  }
`;