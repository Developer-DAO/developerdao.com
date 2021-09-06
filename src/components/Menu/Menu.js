import React, {Component} from 'react'

import Nav from './Nav'

export default class Menu extends Component {

//export default function Header() {
    render() {
      return (
        <div className="w-screen bg-brown">
          <h1 className="text-center text-gold text-4xl pt-6 pb-6 drop-shadow-xl">Bear Creek Nature Farm</h1>
          <p className="text-center text-gold text-4xl pt-6 pb-6 drop-shadow-xl">Honey - Ginseng - Ozark Market</p>
          <div className="bg-green-light text-center" >
            <Nav changeRouteHandler={this.props.changeRouteHandler}/>
          </div>
        </div>
      );
    }
}
