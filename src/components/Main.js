import React from 'react';
import styled from 'styled-components';

import Item from './Item';
import interactiveImg from '../images/desktop/image-interactive.jpg';
import deepEarthImg from '../images/desktop/image-deep-earth.jpg';
import nightArcadeImg from '../images/desktop/image-night-arcade.jpg';
import soccerTeamImg from '../images/desktop/image-soccer-team.jpg';
import gridImg from '../images/desktop/image-grid.jpg';
import fromAboveImg from '../images/desktop/image-from-above.jpg';
import pocketBorealisImg from '../images/desktop/image-pocket-borealis.jpg';
import curiosityImg from '../images/desktop/image-curiosity.jpg';
import fisheyeImg from '../images/desktop/image-fisheye.jpg';

export default function Main() {
  return (
    <Container>
      <Interactive>
        <div className="interactive-img">
          <img src={interactiveImg} alt="" />
        </div>
        <div className="interactive-text">
          <h1>The leader in interactive VR</h1>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </Interactive>
      <Creations>
        <div className="head">
          <h1>OUR CREATIONS</h1>
          <button>SEE ALL</button>
        </div>
        <div className="content">
          <Item img={deepEarthImg} text1="DEEP" text2="EARTH" />
          <Item img={nightArcadeImg} text1="NIGHT" text2="ARCADE" />
          <Item img={soccerTeamImg} text1="SOCCER" text2="TEAM VR" />
          <Item img={gridImg} text1="THE" text2="GRID" />
          <Item img={fromAboveImg} text1="FROM UP" text2="ABOVE VR" />
          <Item img={pocketBorealisImg} text1="POCKET" text2="BOREALIS" />
          <Item img={curiosityImg} text1="THE" text2="CURIOSITY" />
          <Item img={fisheyeImg} text1="MAKE IT" text2="FISHEYE" />
        </div>
      </Creations>
    </Container>
  );
}

const Container = styled.div`
  padding: 100px;
`;

const Interactive = styled.div`
  display: flex;
  position: relative;

  div.interactive-img {
    width: 70%;
    img {
      width: 100%;
      height: 100%;
    }
  }

  div.interactive-text {
    background-color: white;
    width: 45%;
    flex-grow: 1;
    padding-left: 8%;
    height: fit-content;
    position: absolute;
    bottom: 0;
    right: 0;

    h1 {
      margin-top: 70px;
      margin-bottom: 30px;
      text-transform: uppercase;
      font-family: 'Josefin Sans', sans-serif;
      font-size: 48px;
    }

    p {
      color: hsl(0, 0%, 41%);
      line-height: 2;
    }
  }
`;

const Creations = styled.div`
  margin-top: 100px;

  div.head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;

    h1 {
      font-family: 'Josefin Sans', sans-serif;
      color: hsl(0, 0%, 41%);
    }

    button {
      background-color: transparent;
      border: 1px solid black;
      padding: 4px 24px;
      font-family: 'Alata', sans-serif;
      cursor: pointer;
      letter-spacing: 2px;
    }
  }

  div.content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 30px;
  }
`;
