import styled from 'styled-components';
import Button from './Button';

const Button_Primary = styled(Button)`
  background: ${props => props.outline || props.transparent ? "transparent" : "#3D5AFE"};
  color: ${props => props.outline || props.transparent ? "#3D5AFE" : "white"};
  border: ${props => props.outline ? "2px solid #3D5AFE" : "transparent"};
  :hover {
    background: ${props => props.outline || props.transparent  ? "rgb(41,98,255,0.2)" : "#0039CB"};
  }
`;

export default Button_Primary;