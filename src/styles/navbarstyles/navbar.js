import Link from 'next/link';
import styled from 'styled-components';
import { lq, mq } from '../signin_signup/signup';


export const Navbar = styled.nav`
  background: linear-gradient(180deg, rgba(43,58,135,1) 61%, rgba(51,125,140,1) 100%);
  display:flex;
  justify-content: space-between;
  align-items: center;
  width:100vw;
  height:50px;
  
  ${mq[1]}{
    background: linear-gradient(180deg, rgba(43,58,135,1) 61%, rgba(51,125,140,1) 100%);
    width:100vw;
    padding:20px;
    height:20px;
    z-index:999;
    
  }
  
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  position:absolute;
  left:0;
  ${mq[1]}{
    position:absolute;
    left:0;
    top:15px;
    font-size:26px;
    style:none;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  position:absolute;
  left:25%;
  width:40%;

 ${mq[1]}{
        transition: transform 1.0s ease-out-in;
        transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-160%)'};
        flex-direction: column;
        align-items: center;
        position:absolute;
        left:0;
        top:42px;
        width: 100%;
        height:100px;
        background: linear-gradient(360deg, rgba(43,58,135,1) 61%, rgba(51,125,140,1) 100%);
        
      }
  }
`;

export const NavItem = styled.li`
  margin-left: 10px;

  ${mq[1]}{
    position:relative;
    display:flex;
    border-radius:10px;
    justify-content: center;
    align-items: center;    
    width:120px;
    height:35px;
    top:10px;
  }
`;

export const Links = styled.button`
  color: white;
  font-size: 24px;
  ${mq[1]}{
    font-size:24px;
    width:100%;
    heigth:100%;
    border: 1px solid rgb(41,151,78);
    background-color: inherit;

  }
`;


export const StyledBurger = styled.div`
${mq[1]}{
    width: 1.8rem;
    height: 1.8rem;
    position:absolute;
    top: 15px;
    left:20%;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;  
    z-index: 40;
}

${lq[1]}{
  display: none;
}
`;

export const BurgerLine = styled.div`
width: 1.8rem;
height: 0.25rem;
border-radius: 10px;
background-color: ${({open}) => open ? 'white' : 'white'};
font-size: 20px;
transform-origin: 1px;
transition: all 0.3s linear;
z-index: 20;

&:nth-child(1) {
  transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
}

&:nth-child(2) {
  transform: ${({ open }) =>
    open ? "translateX(-100%)" : "translateX(0)"};
  opacity: ${({ open }) => (open ? 0 : 1)};
}

&:nth-child(3) {
  transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
}
`;

export const LinkContainer = styled.div`
${mq[1]}{
  height: 160px;
  width:100vw;
}
`;

export const ItemContainer = styled.div`
position:relative;
display:grid;
grid-template-columns: repeat(4, 1fr);
${mq[1]}{
  position:relative;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100px;
  width:90vw;
  left:5%;
}  
`;



export const AuthContainers = styled.div`
position:absolute;
right:2%;
display:grid;
grid-template-columns: repeat(3, 1fr);
width:55vw; 
justify-content: center;
grid-gap:10px;
align-items: center;  
`;

export const AuthButtons = styled.button`
  ${mq[1]}{
    background:white;
    border: 1px solid rgb(41,151,78);
    border-radius:5px;  
    width:70px;
    height:35px;
    text-align:center;
    top:10px;
    font-size:16px;
    font-weight:700;
  }
`;

export const LogoutButton = styled.button`
  ${mq[1]}{
    background:white;
    border: 1px solid rgb(41,151,78);
    border-radius:5px;  
    width:70px;
    height:35px;
    text-align:center;
    position:absolute;
    left:80%;
    top:0px;
    font-size:16px;
    font-weight:700;
  }
`;

export const SearchArea = styled.input`
  ${mq[1]}{
    border: 1px solid rgb(41,151,78);
    border-radius:5px;  
    width:120px;
    height:30px;
    text-align:center;
    top:10px;
    font-size:16px;
    font-weight:700;
  }
`;