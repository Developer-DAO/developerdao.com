import React from 'react'

import Nav from './Nav'

const Menu = (props) => {
    return (
    <div className="bg-gray p-2 mt-0 w-screen">
        <div className="text-center" >
        <Nav changeRouteHandler={props.changeRouteHandler}/>
        </div>
    </div>
    );
}

export default Menu;

