import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  & span {
    -webkit-text-stroke-color: black;
    -webkit-text-stroke-width: 1px;
  }
  & span:nth-child(1) {
    color: #FF56A4;
  }
  & span:nth-child(2) {
    color: #00D0FF;
  }
  & span:nth-child(3) {
    color: #EDC72F;
  }
`;

const Header = () => {
  return (
    <header>
      <H1><span>TO</span> <span>DO</span> <span>LIST</span></H1>
    </header>
  );
};

export default Header;