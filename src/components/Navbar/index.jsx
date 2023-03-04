import React from 'react';
import {   Navigate, Outlet } from 'react-router-dom';
import navbar from '../../utils/navbar';
import { Container, Link, Logo, Section, Wrapper } from './style';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
      <Section d='flex' c='pointer' onClick={()=>Navigate('/home')}>
        <Logo/>
        <h3>Logo</h3>
      </Section>
      <Section>
        {
          navbar.map(({title,path},index)=>{
            return(
              <Link key={index} to={path}>{title}</Link>
            )

          })
        }
      </Section>
      <Section>
        <button>Login</button>
      </Section>
      </Wrapper>
      <Outlet/>
    </Container>
  );
}

export default Navbar;
