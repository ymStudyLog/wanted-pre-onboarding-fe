import React, { useCallback /*, { useEffect }*/ } from 'react';
import Logo from '../assets/logo.png';
import styled from 'styled-components';
import color from '../styles/color';
import LoginForm from '../components/LoginForm';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//useEffect로 onChange, onSubmit 메서드 관리
//onChange -> lib에 작성한 정규식 체크 함수 가져와서 체크 -> validate() 작성 -> 안맞으면 LoginForm에 valid=false 전달. 맞으면 user 상태안에 저장 후 valid=true 전달
//valid도 리덕스로 해야겠네... 아이디랑 비밀번호, 버튼 전부 다르게 작동해야되잖어
//onSubmit|onClick -> lib에 작성한 정규식 체크 함수 안에 넣어둔 임시 아이디&비밀번호와 맞는지 대조하고 대조한 결과 리덕스에 auth|authError에 저장
//리덕스 auth(백퍼센트로 authError에 값이 없어야됨-리듀서 잘 작성하기)에 값이 있으면 LoginForm에 valid props로 false넣기 & localStorage에 로그인 정보 저장하기
//Ref를 사용한 렌더링 최적화는 아직 뭔지 모르겠음.

const LoginTemplate = () => {
  const navigate = useNavigate();

  //useCallback 사용 맞음..? useEffect랑 useCallback 차이점!!!!
  const onhandleChange = useEffect(() => {
    console.log('변경');
  }, [user]);

  const onhandleClick = useCallback(() => {
    try {
      //로그인 정보가 맞는지 먼저 validation 체크 후 localStorage 저장
      localStorage.setItem('user', JSON.stringify(auth));
      navigate('/main');
    } catch (e) {
      console.log('localStorage Error!');
    }
  });

  return (
    <>
      <Container>
        <LogoImg src={Logo} />
        <LoginForm
          valid={false}
          onChange={onhandleChange}
          onClick={onhandleClick}
        />
      </Container>
    </>
  );
};

export default LoginTemplate;

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
