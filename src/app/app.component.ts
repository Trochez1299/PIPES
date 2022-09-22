import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activar:boolean = true;
  title = 'pipes';
  
  nombre:string = "Bryam Trochez";
  nombre2:string= "bryam esteban trochez torres"

  video = "qjuEXKwnkLE";
  
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  
  PI = Math.PI;
  
  a=0.234567;
  
  salario = 12345.6;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Primera",
      casa: "19"
    }
  };

  valorDePromesa = new Promise( ( resolve, reject )=>{
    setTimeout( ()=> resolve('Llego la data!'), 3500 );
  } );

  fecha = new Date();
}
