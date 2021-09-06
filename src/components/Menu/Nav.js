import React from "react";
import { Link } from 'react-router-dom';

const Nav = (props) => {

    return (
        <nav id="header" className="w-full z-30 top-10 py-1 shadow-lg border-b border-gray flex items-center justify-center">
            <div className="w-8/12 flex items-center justify-between mt-0 px-6 py-2">                
                <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                    <nav>
                    <ul className="md:flex items-center justify-between text-base pt-2 md:pt-0">
                    <li><div className="inline-block no-underline hover:text-black font-medium text-lg py-0 px-4 lg:-ml-2">
                        <Link to="/" onClick={(props.changeRouteHandler)}>Search</Link></div></li>
                    <li><div className="inline-block no-underline hover:text-black font-medium text-lg py-0 px-4 lg:-ml-2">
                        <Link to="/profile" onClick={(props.changeRouteHandler)}>Profile</Link></div></li>
                    </ul>
                    </nav>
                </div>

                <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"><h1 className="text-center text-4xl pt-2 pb-2 drop-shadow-xl">Developer DAO</h1></div>
                
                <div className="order-3 md:order-4 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
                    <div className="auth flex items-center w-full md:w-full">
                        <button className="bg-transparent text-gray-dark  p-2 rounded border 
                            border-gray-med mr-4 hover:bg-gray-med hover:text-gray-dark">Connect Web3</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
