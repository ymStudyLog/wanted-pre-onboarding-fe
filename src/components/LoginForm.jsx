import React, { useState, useRef, useCallback } from 'react';
import styled, { css } from 'styled-components';
import color from '../styles/color';
import { useNavigate } from 'react-router-dom';
import { validation } from '../lib/checkValidate';
import { useEffect } from 'react';

//Ref를 사용한 렌더링 최적화는 아직 뭔지 모르겠음. => ref가 dom에 직접 접근하는거니까 일단 달아서 뭔가를 했는데 이게 최적화인지는 모르겠음
//에러 찾기 , 렌더링 최적화 및 코드 최적화 하기

//test 계정
const adminAccount = {
  id: 'asdfg@asdfg.asdfg',
  pw: 'asd!@#ASD123',
};

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //유효성 검사 결과 저장
  const [validUsername, setValidUsername] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validUser, setValidUser] = useState(false);

  const navigate = useNavigate();
  const idRef = useRef(null);
  const pwRef = useRef(null);
  const buttonRef = useRef(null);

  //인풋 유효성 검사 함수 - 나중에 useCallback? => useState로 동적 값을 저장할때 내가 입력한 값보다 하나씩 적게 저장되는 문제** -> useState빼고 다이렉트로 집어넣음
  //인풋이 입력되는 실시간으로 유효성 검사를 하려면 useState에 저장하고 나서 그 값을 유효성 검사를 하는게 아니라 e.target.value로 바로 유효성 검사를 한 다음 useState로 저장해야한다. 순서가 중요함
  const onIdChange = (e) => {
    const result = validation(idRef.current.name, e.target.value); //e.target.name인가 ref를 사용한 ref.current.name인가
    if (result === false) {
      setValidUsername(true);
    } else {
      setValidUsername(false);
      setUsername(e.target.value);
    }
  };

  const onPwChange = (e) => {
    const result = validation(pwRef.current.name, e.target.value);
    if (result === false) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
      setPassword(e.target.value);
    }
  };

  //id/pw가 유효하면 버튼 활성화
  useEffect(() => {
    if (username && password) {
      setValidUser(true);
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
        valid={validUsername}
        onChange={onIdChange}
      />
      <Input
        type="password"
        name="password"
        autoComplete="password"
        placeholder="비밀번호"
        ref={pwRef}
        valid={validPassword}
        onChange={onPwChange}
      />
      <Button disabled valid={validUser} onClick={login} ref={buttonRef}>
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
          border-color: ${color.red};
        `
      : css`
          border-color: ${color.gray[4]};
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
