import styled from 'styled-components';
import Button from './Button';

const Button_Secondary = styled(Button)`
  background: ${props => props.secondaryOutline ? "transparent" : "#455A64"};
  color: ${props => props.secondaryOutline ? "#455A64" : "white"};
  border: ${props => props.secondaryOutline ? "2px solid #455A64" : "none"};
  :hover {
    background: ${props => props.secondaryOutline ? "#E0E0E0" : "#1C313A"};
  }
`;

export default Button_Secondary;