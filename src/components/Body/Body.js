import React from 'react';
import SideBar from './Sidebar/Sidebar';
import Content from './Content/Content';

function Body(props){
    const {toggleMenu, setToggleMenu} = props;
    
    return(
        <div style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
            <SideBar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
            <Content toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
        </div>
    );
}

export default Body;