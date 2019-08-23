import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public usuario: Usuario;
 // tslint:disable-next-line: ban-types
 public ingresado: Boolean;
  constructor() {
    this.usuario = new Usuario();
    this.usuario.nombre = 'Pepe';
    this.usuario.clave = 'Secreto';
    this.ingresado= false;
   }

  ngOnInit() {
  }
 Ingresar (){
   console.info('usuario: ',this.usuario);
   this.ingresado = true;
 }
}
