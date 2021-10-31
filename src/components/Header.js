import styled from 'styled-components';
import imageHero from '../images/desktop/image-hero.jpg';
import logo from '../images/logo.svg';
import icon from '../images/icon-hamburger.svg';

const Header = () => {
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
          <img className="icon" src={icon} alt="" />
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
  margin: 100px 0;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 48px;
  padding: 24px;
  letter-spacing: 2px;
  line-height: 1.2;
  word-wrap: break-word;

  @media (max-width: 600px) {
    width: 100%;
    margin: auto;
    letter-spacing: normal;
    padding: 8px;
    line-height: 1;
  }
`;

export default Header;
