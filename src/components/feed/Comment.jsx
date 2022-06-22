import React, { useState, useEffect, useRef } from 'react';
import { BiSmile } from 'react-icons/bi';
import styled from 'styled-components';
import color from '../../styles/color';

//admin nickname
const adminNick = 'test0123';

const Comment = () => {
  const [comment, setComment] = useState({
    inputValue: '',
    commentList: [],
  });
  const idRef = useRef(0);

  //비구조화 할당
  const { inputValue, commentList } = comment;

  //ref 초기화
  useEffect(() => {
    idRef.current = 0;
  }, []);

  const post = (e) => {
    e.preventDefault();
    setComment({
      commentList: [...commentList].concat([inputValue]),
      inputValue: '',
    });
  };

  return (
    <>
      <CommentDisplay>
        {commentList &&
          commentList.map((comment) => {
            idRef.current += 1;
            return (
              <CommentLine key={idRef.current}>
                <span style={{ fontWeight: 'bold' }}>{adminNick}</span>
                <span>{comment}</span>
              </CommentLine>
            );
          })}
      </CommentDisplay>

      <CommentInputBar>
        <BiSmile size={23} />
        <CommentForm onSubmit={post}>
          <Input
            type="text"
            placeholder="댓글달기..."
            value={comment.inputValue}
            onChange={(e) => {
              setComment({ ...comment, inputValue: e.target.value });
            }}
          />
          <Button type="submit" onClick={post}>
            게시
          </Button>
        </CommentForm>
      </CommentInputBar>
    </>
  );
};

export default Comment;

const CommentDisplay = styled.div`
  padding: 1rem 0.5rem;
`;

const CommentLine = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;

  & + & {
    margin-top: 0.3rem;
  }
`;

const CommentInputBar = styled.div`
  padding: 1rem 0.5rem;
  display: flex;
  border-top: 0.1px solid ${color.gray[2]};
  border-bottom: 0.1px solid ${color.gray[2]};
`;

const CommentForm = styled.form`
  width: 90%;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 85%;
`;

const Button = styled.button`
  min-width: 33px;
  padding: 0;
  background: none;
  color: ${color.blue[1]};
  font-weight: bold;
  cursor: pointer;
`;
