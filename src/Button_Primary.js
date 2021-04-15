import styled from 'styled-components';
import Button from './Button';

const sm = '70px';
const lg =  '90px';
const md = '80px';

const smH = '30px';
const lgH =  '50px';
const mdH = '40px';

const Button_Primary = styled(Button)`
  width: ${ props => props.sm ? sm : undefined };
  width: ${ props => props.md ? md : undefined };
  width: ${ props => props.lg ? lg : undefined };

  height: ${ props => props.sm ? smH : undefined };
  height: ${ props => props.md ? mdH : undefined };
  height: ${ props => props.lg ? lgH : undefined };


  background: ${props => props.outline || props.transparent ? "transparent" : "#3D5AFE"};
  color: ${props => props.outline || props.transparent ? "#3D5AFE" : "white"};
  border: ${props => props.outline ? "2px solid #3D5AFE" : "transparent"};
  :hover {
    background: ${props => props.outline || props.transparent  ? "rgb(41,98,255,0.2)" : "#0039CB"};
  }
  :disabled {
    color: #9E9E9E;
    &:hover {
      background: transparent;
    }
  }
`;

export default Button_Primary;