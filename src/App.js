import React, { useState, useEffect } from 'react';
import Category from './components/Category.js'
import './style/style.css';

const App = () => {
  // states:
  const [ userBtnText, setUserBtnText ] = useState('');
  //////////////////////////

  // functions:
  const handleButtonText = e => setUserBtnText(e.target.value);
  /////////////////////////

  return (
    <div className="App">
      <div className="wrapper">


        <h1>Buttonator</h1>
        {/* button styles controlled by css variables */}
        <button className="user-btn">
          <input type="text" className="user-btn__text" 
          placeholder="type text here" aria-label="type your button text here"
          value={userBtnText} onChange={handleButtonText}/>
        </button>
        <button className="save-btn btn">save ➕</button>

        <div className="inputs">
          <Category title="Colour">

          </Category>

          <Category title="Size">

          </Category>

          <Category title="Align">

          </Category>
        </div>

      </div> {/* wrapper */}
    </div>
  );
}

export default App;
