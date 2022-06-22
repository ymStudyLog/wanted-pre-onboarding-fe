import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import color from '../styles/color';
import { useNavigate } from 'react-router-dom';
import { validation } from '../lib/checkValidate';

//test 계정
const adminAccount = {
  id: 'aaaaa@aaaaa.aaa',
  pw: 'aaa12a!@A',
};

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //유효성 검사 결과 저장
  const [idValid, setIdValid] = useState(true);
  const [pwValid, setPwValid] = useState(true);
  const [loginValid, setLoginValid] = useState(false);

  const navigate = useNavigate();
  const idRef = useRef(null);
  const pwRef = useRef(null);
  const buttonRef = useRef(null);

  //id&pw 유효성 검사 - 통과하면 true / 못하면 false
  const onIdChange = (e) => {
    const result = validation(idRef.current.name, e.target.value);
    if (result === false) {
      setIdValid(false);
    } else {
      setIdValid(true);
      setUsername(e.target.value);
    }
  };

  const onPwChange = (e) => {
    const result = validation(pwRef.current.name, e.target.value);
    if (result === false) {
      setPwValid(false);
    } else {
      setPwValid(true);
      setPassword(e.target.value);
    }
  };

  //id/pw가 유효하면 로그인 버튼 활성화
  useEffect(() => {
    if (username && password) {
      setLoginValid(true);
      buttonRef.current.disabled = false;
    }
  }, [username, password]);

  const login = (e) => {
    e.preventDefault();
    if (username === adminAccount.id && password === adminAccount.pw) {
      try {
        localStorage.setItem('user', JSON.stringify(username));
        navigate('/main');
      } catch (e) {
        console.log('localStorage Error!');
      }
    }
    //state 초기화
    setUsername('');
    setPassword('');
  };

  return (
    <StyledForm onSubmit={login}>
      <Input
        type="text"
        name="username"
        autoComplete="username"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        ref={idRef}
        valid={idValid}
        onChange={onIdChange}
      />
      <Input
        type="password"
        name="password"
        autoComplete="password"
        placeholder="비밀번호"
        ref={pwRef}
        valid={pwValid}
        onChange={onPwChange}
      />
      <Button disabled valid={loginValid} onClick={login} ref={buttonRef}>
        로그인
      </Button>
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
  border: 0.5px solid;
  border-radius: 3px;
  background: ${color.gray[0]};
  color: black;
  font-weight: bold;

  & + & {
    margin-top: 0.5rem;
  }

  ${(props) =>
    props.valid
      ? css`
          border-color: ${color.gray[4]};
        `
      : css`
          border-color: ${color.red};
        `}
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 3px;
  color: ${color.white};
  font-weight: bold;

  ${(props) =>
    props.valid
      ? css`
          background: ${color.blue[2]};
          cursor: pointer;
        `
      : css`
          background: ${color.blue[0]};
        `}
`;
