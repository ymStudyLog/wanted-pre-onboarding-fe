import React, { useCallback } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import FeedForm from '../components/FeedForm';

const MainPage = () => {
  const user = localStorage.getItem('user');
  const logout = useCallback(() => {
    try {
      localStorage.removeItem('user');
    } catch (e) {
      console.log('localStorage Error!');
    }
  });

  return (
    <div>
      <Navbar user={user} logout={logout} />
      <MainBody>
        <FeedForm />
      </MainBody>
    </div>
  );
};

export default MainPage;

const MainBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
