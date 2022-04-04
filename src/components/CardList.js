import React from 'react';
import Card from './Card';
import data from '../data.js';
import styled from 'styled-components';

const CardList = () => {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    );
  });

  return <StyledCardList>{cards}</StyledCardList>;
};

const StyledCardList = styled.section`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  overflow-x: auto;
  padding-left: 20px;
`;

export default CardList;
