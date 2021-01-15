import React from 'react';
import styled from 'styled-components';

const Message = styled.div`
  position: fixed;
  top: 40%;
  left: 40%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  overflow: auto;
  font-size: 20px;
  font-family: 'adelle-sans', sans-serif;
  color: #555;
  opacity: 0.2;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
  @media screen and (min-width: 992px) {
    font-size: 50px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 70px;
  }
`;

function NotFound() {
  return (
    <Message>
      <p>NOT FOUND</p>
    </Message>
  );
}

export default NotFound;
