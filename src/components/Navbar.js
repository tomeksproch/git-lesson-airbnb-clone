import React from 'react';
import airbnblogo from '../images/airbnb 1.svg';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <StyledNavbar>
      <img src={airbnblogo} alt="Airbnb logo" className="nav--logo" />
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  display: flex;
  padding: 20px 36px;
  box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1);

  .nav--logo {
    max-width: 100px;
  }
`;

export default Navbar;
