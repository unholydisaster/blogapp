import Link from 'next/link';
import styled from 'styled-components';
import { lq, mq } from '../signin_signup/signup';


export const Navbar = styled.nav`
  background: rgb(19,20,23);
  display:flex;
  justify-content: space-between;
  align-items: center;
  width:100vw;
  height:50px;
  
  ${mq[1]}{
    background-color:rgb(19,20,23);
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
  z-index:999;
  ${mq[1]}{
    position:absolute;
    left:0;
    top:15px;
    font-size:26px;
    style:none;
  }
`;

export const NavLinks = styled.div`
${lq[1]}{
  background: rgb(19,20,23);
  height:80%;
  position:fixed;
  width:12vw;
  z-index:20;
  top:10vh;

  border:1px solid rgba(51,125,140,1);
}
 ${mq[1]}{
        transition: transform 1.0s ease-out-in;
        transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-160%)'};
        flex-direction: column;
        align-items: center;
        position:absolute;
        border:1px solid rgba(51,125,140,1);
        left:0;
        top:60px;
        width: 60vw;
        height:90%;
        background:#1E1F26;
        z-index:999;
      }
  }
`;

export const NavItem = styled.li`
${lq[1]}{
position:relative;
top:15vh;
display:flex;
border-radius:10px;
justify-content: start
align-items: start;    
width:10vw;
font-size:14px;
left:10px;
backgroud-color:rgb(30,31,38);
border:1px solid rgba(51,125,140,1);
}

  ${mq[1]}{
    position:relative;
    margin-left:10px;
    display:flex;
    border-radius:10px;
    justify-content: center;
    border:1px solid rgba(51,125,140,1);
    align-items: center;    
    width:40vw;
    height:35px;
    top:-40px;
  }
`;

export const Links = styled.div`
  position:relative;
  color: white;
  font-size:16px;
  left:15px;

  ${mq[1]}{
    font-size:20px;
    width:100%;
    heigth:100%;
    background-color: inherit;
  }
`;


export const StyledBurger = styled.div`
${mq[0,1]}{
  width: 1.8rem;
  height: 1.8rem;
  position:absolute;
  top: 15px;
  left:12vw;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;  
  z-index: 40;
}


`;

export const BurgerLine = styled.div`
${mq[1]}{
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
}
`;

export const LinkContainer = styled.div`
${lq[1]}{
  height:80vh;
  width:12vw;
  position:fixed;
  top:10vh;
  left:0%;
  background-color:rgb(30,31,38);
  z-index:20;
}
${mq[1]}{
  height:400px;
  width:25vw;
  left:0px;
}
`;

export const ItemContainer = styled.div`
position:relative;
display:grid;
top:20vh;
grid-template-columns: repeat(1, 1fr);
grid-gap:20px;
background-color:rgb(30,31,38);
z-index:20;

${lq[1]}{
position:relative;
display:grid;
top:20vh;
grid-template-columns: repeat(1, 1fr);
grid-gap:20px;
background-color:rgb(30,31,38);
z-index:20;
}
${mq[1]}{
  position:relative;
  display:grid;
  grid-template-columns: repeat(1, 1fr);
  height: 200px;
  width:inherit;
  left:15%;
}  
`;



export const AuthContainers = styled.div`
position:absolute;
right:2%;
display:grid;
grid-template-columns: repeat(3, 1fr);
width:80vw; 
justify-content: center;
grid-gap:20px;
align-items: center;
${mq[1]}{
position:absolute;
right:3vw;
display:grid;
grid-template-columns: repeat(3, 1fr);
width:60vw; 
justify-content: center;
grid-gap:3vw;
align-items: center;
} 
`;

export const AuthButtons = styled.button`
    background: linear-gradient(360deg, rgba(43,58,135,1) 61%, rgba(51,125,140,1) 100%);
    border: 1px solid rgb(41,151,78);
    border-radius:5px;  
    width:90px;
    color:white;
    position:relative;
    top:3px;
    height:35px;
    text-align:center;
    font-size:16px;
    font-weight:700;
  ${mq[1]}{
    background: linear-gradient(360deg, rgba(43,58,135,1) 61%, rgba(51,125,140,1) 100%);
    border:1px solid rgba(51,125,140,1);
    border-radius:5px;  
    width:25vw;
    height:35px;
    text-align:center;
    font-size:95%;
    font-weight:600;
    position:relative;
    top:3px;
  }
`;

export const LogoutButton = styled.button`
background:rgb(71,207,115);
  ${mq[1]}{
    background: linear-gradient(360deg, rgba(43,58,135,1) 61%, rgba(51,125,140,1) 100%);
    border: 1px solid;
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

export const Searchbox = styled.div`
${lq[1]}{
  backgroud-color:rgb(37,40,48);
  border-radius:5px;  
  width:60vw;
  height:35px;
  text-align:center;
  font-size:10px;
}
  ${mq[1]}{
    backgroud-color:rgb(37,40,48);
    border: none;
    border-radius:5px;  
    width:30vw;
    height:2rem;
    color:white;
    text-align:center;
    top:10px;
    font-size:16px;
    font-weight:700;
    
  }
`;

export const Searcharea = styled.input`
${lq[1]}{ 
  width:inherit;
  height:inherit;
  text-align:start;
  border-radius:5px;
  border:1px solid rgba(51,125,140,1);
  background-color:rgb(37,40,48);
  top:10px;
  color:white;
  font-size:11px;
}
  ${mq[1]}{
    background-color:rgb(37,40,48);
    border:1px solid rgba(51,125,140,1);
    border-radius:5px;  
    width:inherit;
    height:inherit;
    text-align:start;
    top:10px;
    color:white;
    font-size:16px;
    font-weight:700;
  }
`;