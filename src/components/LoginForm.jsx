import React from 'react';
import styled, { css } from 'styled-components';
import color from '../styles/color';

//폼 onsubmit은 여기서 만들기

const LoginForm = ({ valid }) => {
  console.log(valid);
  return (
    <StyledForm>
      <Input
        type="text"
        name="username"
        autoComplete="username"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        valid={valid}
      />
      <Input
        type="password"
        name="password"
        autoComplete="password"
        placeholder="비밀번호"
        valid={valid}
      />
      <Button valid={valid}>로그인</Button>
    </StyledForm>
  );
};

export default LoginForm;

const StyledForm = styled.form`
  margin-top: 1rem;
  width: 270px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.8rem 0.5rem;
  border: 0.5px solid ${color.gray[4]};
  border-radius: 3px;
  background: ${color.gray[0]};
  color: black;
  font-weight: bold;

  & + & {
    margin-top: 0.5rem;
  }

  ${(props) =>
    !props.valid &&
    css`
      border: 0.5px solid ${color.red} !important;
    `}
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 3px;
  color: ${color.white};
  background: ${color.blue[2]};
  cursor: pointer;
  font-weight: bold;

  ${(props) =>
    !props.valid &&
    css`
      background: ${color.blue[0]};
      cursor: default;
    `}
`;
