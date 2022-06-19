import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import FeedTemplate from '../container/FeedTemplate';

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <MainBody>
        <FeedTemplate />
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
