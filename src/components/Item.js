import React from 'react';
import styled from 'styled-components';

export default function Item(props) {
  return (
    <Container>
      <div></div>
      <img src={props.img} alt="" />
      <span>
        {props.text1}
        <br />
        {props.text2}
      </span>
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  div {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 5;
    background-color: #000;
    opacity: 0.2;
  }

  img {
    width: 100%;
    height: 100%;
  }

  span {
    position: absolute;
    bottom: 24px;
    left: 24px;
    z-index: 10;
    color: white;
    font-size: 36px;
    font-family: 'Josefin Sans', sans-serif;
  }
`;
