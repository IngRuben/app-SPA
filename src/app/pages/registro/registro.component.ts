import {Component, OnInit} from '@angular/core';
import {UsuarioModel} from '../../models/usuario.model';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModel;  //Se crea una instancia

  constructor(private auth: AuthService) { // crear variable de autorización
  }
//Se inicializa el usuario con el ngOnInit
  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit(form: NgForm) { // se recibe un formulario de tipo ngForm
    console.log(form);
    if (form.invalid) {
      return;
    }

    this.auth.nuevoUsuario(this.usuario)
      .subscribe(resp => {
        console.log(resp);
      }, (err) => {
        console.log(err.error.error.message); //captura el error directamente en el componente dentro de la propiedad error para obtener el mensaje
      });
  }

}
