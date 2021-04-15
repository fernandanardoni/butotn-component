import styled from 'styled-components';
import Button from './Button';

const Button_Danger = styled(Button)`
  background: ${ props => props.dangerOutline ? "transparent" : "#D32F2F" };
  color: ${ props => props.dangerOutline ? "#D32F2F" : "white"};
  border: ${props => props.dangerOutline ? "2px solid #D32F2F" : "none"};
  :hover {
      background: ${props => props.dangerOutline ? "rgb(211,47,47,0.3)" : "#9A0007"};
  }
`;

export default Button_Danger;