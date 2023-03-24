import styled from 'styled-components';
import { lq, mq } from '../signin_signup/signup';


export const HomeContainer = styled.div`
  position:absolute;
  top:90px;
  display:flex;
  height:150px;

  
`
export const HomeWrapper= styled.div`
position:absolute;
border:1px solid black;
left:10px;
width:100vw;
flex-direction: column;
height:inherit;
${mq[1]}{
  position:absolute;
  border:1px solid black;
  left:10px;
  width:100vw;
  flex-direction: column;
  height:inherit;
}
`

export const Paragraph=styled.p`
font-size:16px;
`
