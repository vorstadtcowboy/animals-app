import styled from 'styled-components';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Header = styled.header`
  background: #fff;
  min-height: 4rem;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
`;

export const LogoImage = styled.img`
  width: 50px;
  height: auto;
`;

export const NaviLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  padding: 1rem;
  font-weight: bold;
  display: block;
  text-align: center;

  &:hover {
    color: grey;
  }

  &.active {
    color: turquoise;
  }

  @media (min-width: 37.5em) {
    display: inline;
  }
`;

//Syteld component Nav
const Nav = styled.nav`
  display: ${(props) => (props.isOn ? 'block' : 'none')};
  position: absolute;
  z-index: 1;
  top: 4rem;
  left: 0;
  background: #fff;
  width: 100%;

  @media (min-width: 600px) {
    display: block;
    position: static;
    width: auto;
  }
`;

export const DropdownMenu = () => {
  const [isOn, setIsOn] = useState(false);

  const dropDownClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <button onClick={dropDownClick} className="menu" aria-label="zeige die Navigation">
        {isOn ? 'close' : 'open'}
      </button>

      <Nav isOn={isOn} aria-expanded={isOn}>
        <NaviLink to="/">Home</NaviLink>
        <NaviLink to="/hunde">Hunde</NaviLink>
        <NaviLink to="/katzen">Katzen</NaviLink>
        <NaviLink to="/create">Neues Tier</NaviLink>
      </Nav>
    </div>
  );
};
