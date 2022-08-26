import React from 'react';
import styled from 'styled-components';
import color from '../../styles/color';
import { BiSearch } from 'react-icons/bi';

export const HeaderInput = (props) => <StyledInput {...props} />;

const Search = ({ children }) => (
  <InputWrapper>
    <BiSearch />
    {children}
  </InputWrapper>
);

export default Search;

const InputWrapper = styled.div`
  display: none;

  @media only screen and (min-width: 769px) {
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    width: 250px;
    border: none;
    border-radius: 3px;
    background: ${color.gray[2]};
    font-weight: bold;
  }
`;

const StyledInput = styled.input`
  display: none;

  @media only screen and (min-width: 769px) {
    display: inline;
    width: 250px;
    padding: 0.8rem 0.5rem;
    background: ${color.gray[2]};
    font-weight: bold;
  }
`;
