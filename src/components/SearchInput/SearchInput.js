import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { SEARCH_PART } from '../../redux/actionTypes';

const InputSearch = styled.input`
  height: 60px;
  font-size: 30px;
  font-family: 'adelle-sans', sans-serif;
  font-weight: 100;
  border: none;
  outline: none;
  color: #555;
  padding: 3px;
  margin: 5px;
  background: none;
  width: 700px;
  border-bottom: 1px solid #bbb;
  cursor: text;
  opacity: 0.4;
  transition: ease-out 0.1s;
  :hover {
    opacity: 1;
    font-size: 50px;
  }
  :focus {
    opacity: 1;
    font-size: 50px;
  }
`;

function SearchInput() {
  const dispatch = useDispatch();

  const searchOnPosts = (event) => {
    const search = event.target.value;
    dispatch({ type: SEARCH_PART, payload: search });
  };

  return (
    <>
      <InputSearch placeholder={'search on posts'} onChange={searchOnPosts} />
    </>
  );
}

export default SearchInput;
