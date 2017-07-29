import React, { Component } from 'react';

class Ordenar extends Component{
  
  actualizarCantidad(evento){
      this.props.hacerPedido(this.props.indice, evento.target.value);
    }
  
  render(){
    return(
      <div>
        <br/>
          <div className="form-group">
            <label htmlFor="cantidad">Cantidad:</label>
            <input
              onChange={this.actualizarCantidad.bind(this)} 
              type="number"
              min="0" 
              max="20"  
              className="form-control"/>
          </div>
          <div className="form-group">
            <label htmlFor="precio" className="EspacioPlatillo">Precio: {this.props.precio}</label> 
          </div>
      </div>   
    );
  }
}

export default Ordenar;