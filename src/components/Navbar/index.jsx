import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Container, Section, Wrapper } from './style';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
      <Section>
        <h1>Logo</h1>
      </Section>
      <Section>
        <NavLink>Home</NavLink>
        <NavLink>Properties</NavLink>
      </Section>
      </Wrapper>
      <Outlet/>
    </Container>
  );
}

export default Navbar;
