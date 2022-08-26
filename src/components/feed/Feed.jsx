import React, { useState } from 'react';
import color from '../../styles/color';
import styled from 'styled-components';
import Comment from './Comment';
import { HiOutlineDotsHorizontal, HiOutlineHeart } from 'react-icons/hi';
import { BsChatLeftDots, BsBookmark } from 'react-icons/bs';
import { BiPaperPlane } from 'react-icons/bi';

const Feed = ({ id, nickname, img, likes }) => {
  //이미지 로딩 완료시 loading=true, 로딩 전 혹은 로딩 실패시 loading=false
  const [loading, setLoading] = useState(false);

  return (
    <FeedContainer
      style={loading ? { visibility: 'visible' } : { visibility: 'hidden' }}
    >
      <Header>
        <Profile>
          <ProfileImg />
          <span style={{ fontWeight: 'bold' }}>{nickname}</span>
        </Profile>
        <HiOutlineDotsHorizontal size={18} />
      </Header>

      <StyledImg
        src={img}
        onLoad={() => {
          setLoading(!loading);
        }}
        onError={() => {
          console.log(`${id}번째 이미지 로딩 실패`);
        }}
      />

      <UtilBar>
        <IconContainer>
          <HiOutlineHeart size={30} />
          <BsChatLeftDots size={25} />
          <BiPaperPlane size={30} />
        </IconContainer>
        <BsBookmark size={25} />
      </UtilBar>

      <Likes>좋아요 {likes}개</Likes>

      <Comment />
    </FeedContainer>
  );
};

export default Feed;

const FeedContainer = styled.div`
  background: ${color.white};
  & + & {
    margin-top: 2rem;
    border-top: 0.1px solid ${color.gray[2]};
  }
`;

const Header = styled.div`
  height: 50px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProfileImg = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${color.gray[2]};
  margin-right: 0.5rem;
`;

const StyledImg = styled.img`
  width: 100%;
`;

const UtilBar = styled.div`
  height: 40px;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  padding: 0;
  margin: 0;
  width: 135px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const Likes = styled.p`
  padding: 0.7rem 0.5rem;
`;
