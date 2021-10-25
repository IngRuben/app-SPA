import {Component, OnInit} from '@angular/core';
import {UsuarioModel} from '../../models/usuario.model';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {validate} from "codelyzer/walkerFactory/walkerFn";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
  }

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.auth.login(this.usuario)
      .subscribe(resp => {
        console.log(resp);
        window.location.href="http://localhost:4200/dashboard";
        console.log("salto de pagina efectuado");

      }, (err) => {
        console.log(err.error.error.message);
        console.log("salto de pagina no efectuado");
      });
  }



}
