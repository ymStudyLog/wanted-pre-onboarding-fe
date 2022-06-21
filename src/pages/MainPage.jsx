import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Feed from '../components/feed/Feed';
import styled from 'styled-components';
import color from '../styles/color';

//데이터 주소 ->앞쪽 http://localhost:3000/은 가져오기 해야될듯 실행하는 로컬마다 다를테니까
const api = 'http://localhost:3000/data/sampleFeed.json';

const MainPage = () => {
  //로딩 상태 만들어야함 - img가 다 불러와질때까지 기다리게 하기 / img가 가장 오래걸림!!!
  const [feeds, setFeeds] = useState({
    feeds: [],
  });

  const getFeed = async (url) => {
    const {
      data: { feeds },
    } = await axios.get(url); // feeds = (3) [{...},{...},{...}]
    setFeeds({ feeds: feeds });
  };

  useEffect(() => {
    getFeed(api);
  }, []);

  //로그인 정보(localStorage) 와 logout 메서드 props로 Navbar 컴포넌트에 전달
  const user = localStorage.getItem('user');
  const logout = useCallback(() => {
    try {
      localStorage.removeItem('user');
    } catch (e) {
      console.log('localStorage Error!');
    }
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
