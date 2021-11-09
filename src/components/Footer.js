import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import instagram from '../images/icon-instagram.svg';
import pinterest from '../images/icon-pinterest.svg';

const Footer = () => {
  return (
    <Container>
      <div>
        <img src={logo} alt="" />
        <div className="social-media">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={instagram} alt="" />
          <img src={pinterest} alt="" />
        </div>
      </div>
      <div>
        <div className="menu">
          <span>About</span>
          <span>Careers</span>
          <span>Events</span>
          <span>Products</span>
          <span>Support</span>
        </div>
        <div className="copy-right">
          © 2021 Loopstudios. All rights reserved.
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px 100px;
  background-color: #000;
  color: #fff;

  & > div {
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div.social-media {
      img {
        margin-left: 12px;
      }
    }
  }

  div.menu {
    span {
      margin: 0;
      font-size: 15px;
      font-wight: 400;
      margin-right: 20px;
      font-family: 'Alata', sans-serif;
    }
  }

  div.copy-right {
    font-size: 12px;
    color: hsl(0, 0%, 55%);
  }
`;

export default Footer;
