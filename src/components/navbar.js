import { AuthButtons, AuthContainers, BurgerLine, ItemContainer, LinkContainer, Links, Logo, LogoutButton, Navbar, NavItem, NavLinks, SearchArea, StyledBurger } from '@/styles/navbarstyles/navbar';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';


const NavbarComponent = () => {
    const[open, setOpen]=useState(false)
    const [search, setSearch] = useState('');
    const router=useRouter()
    const [cookies,setCookies]=useCookies(["access_token"]);
    

    const handleHome=()=>{
      router.push("/")
    }

    const handleContact=()=>{
      router.push("/")
    }
    const handleHelp=()=>{
      router.push("/")
    }

    const handleServices=()=>{
      router.push("/")
    }

    const handleSignIn=()=>{
      router.push("/login")
    }

    const handleSignUp=()=>{
      router.push("/register")
    }

    const handleChange = (event) => {
      setSearch(event.target.value);
    };

    const handleLogout = () => {
      setCookies("access_token","")
      window.localStorage.removeItem("userID")
      router.push("/");
    };

    const handleBurgerClick = () => {
      setOpen(!open);
    };    

    return (
      <Navbar>
        <Logo href="/">Logo</Logo>
        <NavLinks open={open}>
          <LinkContainer>
          <ItemContainer>
          <NavItem>
            <Links>About</Links>
          </NavItem>
          <NavItem>
            <Links>Services</Links>
          </NavItem>
          <NavItem>
            <Links>Contact</Links>
          </NavItem>
          <NavItem>
            <Links>Help</Links>
          </NavItem>
          </ItemContainer>
          </LinkContainer>
        </NavLinks>
        <StyledBurger onClick={handleBurgerClick}>
          <BurgerLine open={open} />
          <BurgerLine open={open} />
          <BurgerLine open={open} />
        </StyledBurger>
        <AuthContainers>
          <SearchArea type="text" placeholder="Search" value={search} onChange={handleChange}/>
          {!cookies.access_token?(
            <>
            <AuthButtons onClick={handleSignIn}>Login</AuthButtons>
            <AuthButtons onClick={handleSignUp}>Sign Up</AuthButtons>
            </>
          ):(
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          )}
          
        </AuthContainers>
      </Navbar>
    );
  };
  
  export default NavbarComponent;