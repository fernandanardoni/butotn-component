import './App.css';
import React from 'react';
import Button from './Button';
import Button_Primary from './Button_Primary';
import Button_Secondary from './Button_Secondary';
import Button_Danger from './Button_Danger';
import Icon from './Icon';






function App()  {
  return (

    <div className="App">

    <h1>Buttons</h1>

    <span></span>
    <span></span>
    <span></span>

    <div>
    <label> &lt;Button /&gt; </label>
    <br/>
    <br/>
    <Button> Default </Button>
    </div>

    
    <span></span>
    <span></span>
    <span></span>

    <div>
    <label> &lt;Button variant=&quot;outline&quot;/&gt; </label>
    <br/>
    <br/>
    <Button_Primary outline> Default </Button_Primary>
    </div>

  
    <span></span>
    <span></span>
    <span></span>

    <div>
    <label>&lt;Button variant=”text” /&gt;</label>
    <br/>
    <br/>
    <Button_Primary transparent> Text Button </Button_Primary>
    </div>

    
    <span></span>
    <span></span>
    <span></span>

    <div>
    <label> &lt;Button disableShadow /&gt; </label>
    <br/>
    <br/>
    <Button_Primary> Default </Button_Primary>
    </div>

    <span></span>
    <span></span>
    <span></span>

    <div>
    <label> &lt;Button disabled /&gt; </label>
    <br/>
    <br/>
    <Button disabled={true}> Disable </Button>
    </div>

    <div>
    <label> &lt;Button variant=”text” disabled /&gt; </label>
    <br/>
    <br/>
    <Button_Primary transparent disabled={true}> Text Button </Button_Primary>
    </div>

  

    <span></span>
    <span></span>

    <div>
    <label> &lt;Button startIcon=”local_grocery_store” /&gt; </label>
    <br/>
    <br/>
    <Button_Primary> <Icon/> Icon </Button_Primary>
    </div>

    <div>
    <label> &lt;Button endIcon=”local_grocery_store” /&gt; </label>
    <br/>
    <br/>
    <Button_Primary> Icon <Icon/> </Button_Primary>
    </div>

    <span></span>
    <span></span>

    <div>
    <label> &lt;Button size=”sm” /&gt; </label>
    <br/>
    <br/>
    <Button_Primary sm> Small </Button_Primary>
    </div>

    <div>
    <label> &lt;Button size=”md” /&gt; </label>
    <br/>
    <br/>
    <Button_Primary mg> Medium </Button_Primary>
    </div>

    <div>
    <label> &lt;Button size=”lg” /&gt; </label>
    <br/>
    <br/>
    <Button_Primary lg> Large</Button_Primary>
    </div>

    <span></span>

    <div>
    <label> &lt;Button size=”lg” /&gt; </label>
    <br/>
    <br/>
    <Button> Default </Button>
    </div>

    <div>
    <label> &lt;Button size=”lg” /&gt; </label>
    <br/>
    <br/>
    <Button_Primary> Primary </Button_Primary>
    </div>

    <div>
    <label> &lt;Button size=”lg” /&gt; </label>
    <br/>
    <br/>
    <Button_Secondary> Secondary </Button_Secondary>
    </div>

    <div>
    <label> &lt;Button color=”danger” /&gt; </label>
    <br/>
    <br/>
    <Button_Danger> Danger </Button_Danger>
    </div>

    <footer> 
      <p>created by <strong>Fernanda Nardoni</strong></p>
    </footer>
    </div>
  );
}

export default App;
