import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Button from './Button';
import Button_Hover from './Button_Hover';
import Button_Outline from './Button_Outline';


ReactDOM.render(
  <React.StrictMode>
    <Button>Default</Button>
    <Button_Hover>Hover me</Button_Hover>
    <Button_Outline>I'm outlined</Button_Outline>
  
  </React.StrictMode>,
  document.getElementById('root')
);


