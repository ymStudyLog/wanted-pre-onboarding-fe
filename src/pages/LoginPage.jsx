import React from 'react';
import styled from 'styled-components';
import LoginTemplate from '../container/LoginTemplate';

const LoginPage = () => {
  return (
    <BackgroundBox>
      <LoginTemplate />
    </BackgroundBox>
  );
};

export default LoginPage;

const BackgroundBox = styled.div`
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
