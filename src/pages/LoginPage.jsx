import React from 'react';
import Logo from '../assets/logo.png';
import styled from 'styled-components';
import LoginForm from '../components/login/LoginForm';
import color from '../styles/color';

const LoginPage = () => {
  return (
    <StyledBackground>
      <Container>
        <LogoImg src={Logo} />
        <LoginForm />
      </Container>
    </StyledBackground>
  );
};

export default LoginPage;

const StyledBackground = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  min-width: 350px;
  min-height: 400px;
  border: 0.5px solid ${color.gray[4]};
  background: ${color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LogoImg = styled.img`
  width: 220px;
  height: 80px;
`;
