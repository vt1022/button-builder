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
        <section className="the-btn">
          <button className="user-btn">
            <input type="text" className="user-btn__text" 
            placeholder="type text here" aria-label="type your button text here"
            value={userBtnText} onChange={handleButtonText}/>
          </button>
          <button className="save-btn btn">save ➕</button>
        </section>
        <section className="inputs">
          <Category title="colour">
            <label htmlFor="btn-clr">button</label>
            <input type="color" id="btn-clr" colorpick-eyedropper-active="false"/>
            <input type="text" id="btn-clr-hex" className="hex-input" value="#000000"/>

            <label htmlFor="text-clr">text</label>
            <input type="color" id="text-clr" colorpick-eyedropper-active="false"/>
            <input type="text" id="text-clr-hex" className="hex-input" value="#000000"/>

            <label htmlFor="border-clr">border</label>
            <input type="color" id="border-clr" colorpick-eyedropper-active="false"/>
            <input type="text" id="text-clr-hex" className="hex-input" value="#000000"/>
          </Category>

          <Category title="size">

          </Category>

          <Category title="align">

          </Category>
        </section>


      </div> {/* wrapper */}
    </div>
  );
}

export default App;
