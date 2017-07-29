import { extendObservable } from 'mobx';
import datos from './FirebaseController';

class TiendaController {

  constructor(){

    self = this;
    datos.bebidas.once('value').then(function(snapshot){
      snapshot.forEach(function(childSnapshot){
        const key = childSnapshot.key;
        const valor = childSnapshot.val();
        self.bebidas.push(valor);
      })
    });
    datos.platillos.once('value').then(function(snapshot){
      snapshot.forEach(function(childSnapshot){
        const key = childSnapshot.key;
        const valor = childSnapshot.val();
        self.platillos.push(valor);
      })
    });
    extendObservable(this,
    {
      platillos: [
        {nombre: "primerPlatillo",
            descripcion: "platillo muy rico",
            precio:100,
            cantidad:0},
        {nombre: "segundoPlatillo",
            descripcion: "platillo muy rico",
            precio:150,
            cantidad:0},
        {nombre: "tercerPlatillo",
            descripcion: "platillo muy rico",
            precio:200,
            cantidad:0}],
      bebidas: [
        {nombre: "primeraBebida",
            descripcion: "polar light",
            precio:100,
            cantidad:0},
        {nombre: "segundaBebida",
            descripcion: "regional",
            precio:150,
            cantidad:0},
        {nombre: "terceraBebida",
            descripcion: "zulia",
            precio:200,
            cantidad:0}]      
    });
  }

  ponerEnLaOrden(indice, cantidadPlatillo){
    this.platillos.forEach( (value, index)=>{
      if(indice === index){
        this.platillos[index].cantidad = cantidadPlatillo;    
      }}
    )
  }

  bebidasEnLaOrden(indice, cantidadBebida){
    this.bebidas.forEach( (value, index) => {
      if(indice === index){
        this.bebidas[index].cantidad = cantidadBebida;
      }
    })
  }
}

var VarTiendaController = new TiendaController;

export default VarTiendaController;