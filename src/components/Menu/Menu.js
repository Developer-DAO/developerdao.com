import React from 'react'

import Nav from './Nav'

const Menu = (props) => {
    return (
    <div className="bg-gray p-2 mt-0 w-screen">
        <div className="text-center" >
        <Nav onAuthenticate={props.onAuthenticate}
            loaded={props.loaded}
            />
        </div>
    </div>
    );
}

export default Menu;

