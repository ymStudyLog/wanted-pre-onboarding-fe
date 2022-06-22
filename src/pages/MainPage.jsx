import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Feed from '../components/feed/Feed';
import styled from 'styled-components';
import color from '../styles/color';

// window.location.href = '로컬 호스트 주소/main'
const currentUrl = window.location.href.split('/main')[0];
const api = `${currentUrl}/data/sampleFeed.json`;

const MainPage = () => {
  const [feeds, setFeeds] = useState({
    feeds: [],
  });

  const getFeed = async (url) => {
    const {
      data: { feeds },
    } = await axios.get(url); // feeds = (3) [{...},{...},{...}]
    setFeeds({ feeds: feeds });
  };

  //로그인 정보(localStorage)와 logout 메서드 Navbar 컴포넌트에 전달
  const user = localStorage.getItem('user');
  const logout = useCallback(() => {
    try {
      localStorage.removeItem('user');
    } catch (e) {
      console.log('localStorage Error!');
    }
  }, []);

  useEffect(() => {
    //로그인해야 feed를 볼 수 있음
    if (user) {
      getFeed(api);
    } else return;
  }, []);

  return (
    <div>
      <Navbar user={user} logout={logout} />
      <MainBody>
        <Container>
          {feeds.feeds.map((feed) => {
            return (
              <Feed
                key={feed._id}
                id={feed._id}
                nickname={feed.nickname}
                img={feed.img}
                likes={feed.likes}
              />
            );
          })}
        </Container>
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

const Container = styled.div`
  width: 100%;
  background: ${color.gray[0]};
  font-size: 0.8rem;

  @media only screen and (min-width: 401px) {
    max-width: 400px;
    border-left: 0.1px solid ${color.gray[3]};
    border-right: 0.1px solid ${color.gray[3]};
  }
`;
