import React from 'react';
import styled from 'styled-components';
import collage from '../images/Group 77.png';

const Hero = () => {
  return (
    <HeroStyle>
      <img className="hero--image" src={collage} alt="Collage picture" />

      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </HeroStyle>
  );
};

const HeroStyle = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;

  .hero--image {
    max-width: 400px;
    align-self: center;
  }
  .hero--header {
    margin-bottom: 16px;
  }

  .hero--text {
    margin-top: 0;
  }
`;

export default Hero;
