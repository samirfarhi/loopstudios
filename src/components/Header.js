import { useState } from 'react';
import styled from 'styled-components';
import imageHero from '../images/desktop/image-hero.jpg';
import logo from '../images/logo.svg';
import icon from '../images/icon-hamburger.svg';
import closeIcon from '../images/icon-close.svg';

const Header = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  if (activeMobileMenu) {
    return (
      <MobileMenu>
        <div className="images">
          <img src={logo} alt="" />
          <img
            onClick={() => setActiveMobileMenu(!activeMobileMenu)}
            className="icon"
            src={closeIcon}
            alt=""
          />
        </div>
        <Menu>
          <span>About</span>
          <span>Careers</span>
          <span>Events</span>
          <span>Products</span>
          <span>Support</span>
        </Menu>
      </MobileMenu>
    );
  }

  return (
    <Container>
      <Overflow>
        <Nav>
          <img src={logo} alt="" />
          <Menu>
            <span>About</span>
            <span>Careers</span>
            <span>Events</span>
            <span>Products</span>
            <span>Support</span>
          </Menu>
          <img
            className="icon"
            onClick={() => setActiveMobileMenu(!activeMobileMenu)}
            src={icon}
            alt=""
          />
        </Nav>
        <Hero>
          IMMERSIVE <br />
          EXPERIENCES <br />
          THAT DELIVER
        </Hero>
      </Overflow>
    </Container>
  );
};

const Container = styled.div`
  background-image: url(${imageHero});
  background-position: center;
  background-size: cover;
`;

const Overflow = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 24px 48px 100px;
`;

const Nav = styled.nav`
  height: 70px;
  display: flex;
  align_items: center;
  justify-content: space-between;

  img {
    height: 24px;
  }

  img.icon {
    cursor: pointer;
    @media(min-width: 600px) {
      display: none;
    }
  }
  }
`;

const Menu = styled.div`
  color: white;

  span {
    margin-left: 24px;
    font-size: 15px;
    font-family: 'Alata', sans-serif;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const Hero = styled.h1`
  width: fit-content;
  border: 2px solid white;
  color: white;
  margin: 64px 0;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 64px;
  padding: 24px;
  letter-spacing: 2px;
  line-height: 1.2;
  word-wrap: break-word;

  @media (max-width: 600px) {
    width: 100%;
    margin: auto;
    letter-spacing: normal;
    padding: 8px;
    font-size: 48px;
  }
`;

const MobileMenu = styled.div`
  background: black;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 0 16px;
  padding-top: 24px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img.icon {
    cursor: pointer;
  }

  & > ${Menu} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    text-transform: uppercase;

    span {
      margin: 0;
      margin-bottom: 36px;
      font-size: 20px;
      font-family: 'Josefin Sans', sans-serif;
      cursor: pointer;
    }
  }
`;

export default Header;
