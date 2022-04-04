import React from 'react';
import styled from 'styled-components';

const Card = props => {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <StyledCard>
      {badgeText && <StyledBadge>{badgeText}</StyledBadge>}
      <img className="card--image" src={props.img} />
      <div className="card--stats">
        <img className="card--star" src="../assets/Star 1.svg" alt="star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 175px;
  font-size: 12px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;

  .card--image {
    width: 100%;
    height: 236px;
    border-radius: 9px;
    margin-bottom: 9px;
  }

  .card--stats {
    display: flex;
    align-items: center;
  }
  .card--star {
    height: 14px;
  }

  .gray {
    color: #918e9b;
  }

  .bold {
    font-weight: bold;
  }
  .card--price {
    margin-top: auto;
  }

  .card--title {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const StyledBadge = styled.div`
  position: absolute;
  top: 6px;
  left: 6px;
  background-color: white;
  padding: 5px 7px;
  border-radius: 2px;
  font-weight: bold;
`;

export default Card;
