import React, {useState} from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import './style.css';


function App(){
  const [toggleMenu, setToggleMenu] = useState(true);

  return(
    <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
      <Body toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
    </div>
  );
}

export default App; 