import React from 'react';

import styled from 'styled-components';
import logo from '../assets/logo.png';
import Button from './Button';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem;
`;
const Brand = styled.div``;
const Links = styled.div`
  height: 4rem;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: white;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  padding: 2.5rem 8rem;

  ul {
    display: flex;
    list-style: none;
    gap: 3rem;

    li {
      a {
        color: #002000;
        text-decoration: none;
        transition: all 0.4s ease-in-out;

        &:hover {
          color: #2d69fd;
        }
      }
    }
  }
`;
const Toggle = styled.div`
  display: none;
`;

const Navbar = () => {
  return (
    <Nav>
      <Brand>
        <img src={logo} alt="brand logo" />
      </Brand>
      <Toggle></Toggle>
      <Links>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#marketplace">Marketplace</a>
          </li>
          <li>
            <a href="#sellers">Sellers</a>
          </li>
          <li>
            <a href="#create">Create</a>
          </li>
        </ul>
      </Links>
      <Button text={'Contact'} />
    </Nav>
  );
};

export default Navbar;
