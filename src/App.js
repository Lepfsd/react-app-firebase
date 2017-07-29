import React, { Component } from 'react';
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools';
import logo from './logo.svg';
import './App.css';
import Platillos from './Platillos';
import Pedidos from './Pedidos';
import Bebidas from './Bebidas';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />         
          </div>
          <DevTools />
        </div>
        <div className="jumbotron"><h4>Tienda React</h4></div>
        <ul className="nav nav-pills ListMargin">
          <li role="presentation" className="active"><Link to="platillos">Platillos</Link></li>
          <li role="presentation" className="active"><Link to="bebidas">Bebidas</Link></li>
        </ul>
        {this.props.children}
        <Pedidos/> 
      </div> 
      
    );
  }
}

export default observer(App);
