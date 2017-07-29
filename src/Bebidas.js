import React, { Component } from 'react';
import './Platillos.css';
import VarTiendaController from './TiendaController';
import Ordenar from './Ordenar';

class Bebidas extends Component{
  render(){

    let bebidas_div = [];
    const llenar_array_bebidas_div = VarTiendaController.bebidas.forEach(
      (value, index)=> {
        bebidas_div.push(
          <div className="list-group-item" key={index}>
            <div className="panel-body">
              <div className="row">
                <div className="col-md-4">
                  <img src={value.direccion} role="presentation" className="ImagenPlatillo"/>
                </div>
                <div className="col-md-6">
                  <h3 className="TitlePlatillo">{value.nombre}</h3>
                  <div className="DescripcionPlatillo">{value.descripcion}</div>
                  <Ordenar precio={value.precio}
                  indice={index}
                  hacerPedido={(indice_d, evento_d)=>
                  {VarTiendaController.bebidasEnLaOrden(indice_d, evento_d)}}/>
                </div>
              </div>
            </div>
          </div> 
        )
      }
    )

    return(
      <div className="container col-md-6">
        <div>
          <div className="panel panel-primary">
            <div className="list-group Platillo-Menu">
              {bebidas_div}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bebidas;