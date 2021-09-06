import React from 'react'

import Nav from './Nav'

const Menu = (props) => {
    return (
    <div className="w-screen">
        <div className="text-center" >
        <Nav changeRouteHandler={props.changeRouteHandler}/>
        </div>
    </div>
    );
}

export default Menu;

