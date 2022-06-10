import styled from 'styled-components';

const Title = styled.h1`
  color: #000;
  background: ${(props) => (props.primary ? 'white' : 'lightgray')};
  font-family: serif;

  &:hover {
    color: red;
  }

  @media (min-width: 600px) {
    color: #0f0e0e;
    font-size: 2rem;
  }
`;

export default Title;
