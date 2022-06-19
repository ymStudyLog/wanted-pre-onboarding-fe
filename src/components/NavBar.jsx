import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo.png';
import color from '../styles/color';
import { BiSearch } from 'react-icons/bi';

const NavBar = () => {
  return (
    <Header>
      <SmallLogoImg src={Logo} />
      <InputWrapper>
        <BiSearch />
        <HeaderInput
          type="text"
          placeholder="검색"
          autoComplete="검색"
          name="no-function"
        />
      </InputWrapper>
      <ButtonWrapper>
        <IconButton />
        <IconButton />
        <IconButton>logout</IconButton>
      </ButtonWrapper>
    </Header>
  );
};

export default NavBar;

const Header = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  width: auto;
  padding: 0.2rem 0.5rem;
  background: ${color.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

const SmallLogoImg = styled.img`
  height: 45px;
  width: auto;
`;

const IconButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 0;
  background: ${color.gray[2]};
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 9rem;

  @media only screen and (min-width: 768px) {
    min-width: 12rem;
  }
`;

const InputWrapper = styled.div`
  display: none;

  @media only screen and (min-width: 769px) {
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    width: 250px;
    border: none;
    border-radius: 3px;
    background: ${color.gray[2]};
    font-weight: bold;
  }
`;

const HeaderInput = styled.input`
  display: none;

  @media only screen and (min-width: 769px) {
    display: inline;
    width: 90%;
    margin: 0 0.1rem;
    padding: 0.8rem 0.4rem;
    background: ${color.gray[2]};
    font-weight: bold;
  }
`;
