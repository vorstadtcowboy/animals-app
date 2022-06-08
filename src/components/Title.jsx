import styled from 'styled-components';

const Title = styled.h1`
  color: #000;
  background: ${(props) => (props.primary ? 'brown' : 'white')};
  font-family: serif;

  &:hover {
    color: red;
  }

  @media (min-width: 600px) {
    color: green;
  }
`;

export default Title;
