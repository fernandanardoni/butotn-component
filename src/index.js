import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './Button';
import Button_Primary from './Button_Primary'
import Button_Secondary from './Button_Secondary'
import Button_Danger from './Button_Danger'

import Button_Hover from './Button_Hover';
import Button_Text from './Button_Text';
import Button_Outline from './Button_Outline';



ReactDOM.render(
  <React.StrictMode>

    <Button> Default </Button>
    <Button_Primary> Primary </Button_Primary>
    <Button_Primary outline> Primary Outline </Button_Primary>
    <Button_Secondary> Secondary </Button_Secondary>
    <Button_Danger> Danger</Button_Danger>

    
  </React.StrictMode>,

  document.getElementById('root')
);


