import styled from 'styled-components';
import { useState } from 'react';

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

export const NaviLink = styled.a`
  color: #000;
  text-decoration: none;
  padding: 1rem;
  font-weight: bold;
  display: block;
  text-align: center;

  &:hover {
    color: grey;
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
        <NaviLink href="/hunde">Hunde</NaviLink>
        <NaviLink href="/katzen">Katzen</NaviLink>
      </Nav>
    </div>
  );
};
