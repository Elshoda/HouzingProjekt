import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import navbar from '../../utils/navbar';
import { Container, Link, Logo, Section, Wrapper } from './style';

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <Container>
      <Wrapper>
        <Section d='flex' c='pointer' fw='900' onClick={() => navigate('/home')}>
          <Logo />
          <h3>Houzing</h3>
        </Section>
        <Section>
          {
            navbar.map(({ title, path,id }, index) => {
              return (
                <Link className={({isActive})=>isActive&&'active'} key={index} to={path}>{title}</Link>
              )

            })
          }
        </Section>
        <Section>
          <button>Login</button>
        </Section>
      </Wrapper>
      <Outlet />
    </Container>
  );
}

export default Navbar;
