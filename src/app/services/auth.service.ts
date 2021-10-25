import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UsuarioModel} from '../models/usuario.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root' // Este servicio lo esta llamando desde la raiz de manera local
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts';
  private apikey = 'AIzaSyD19Cy_ycRgj5gFxQfD-Bwppr9nXQjHKw8'; // Si se necesita cambiar de proyecto, se cambia la llave

  userToken: string;

  // EndPoint: Registro
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]  https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // EndPoint: Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]  https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) {  //Vamos a llamar el servicio
  }

  nuevoUsuario(usuario: UsuarioModel) {
    const datos = {
      ...usuario, // spread
      returnSecureToken: true
    };

    return this.http.post( // Solicitar una solicitud de tipo post
      `${this.url}:signUp?key=${this.apikey}`, //Así se crea la ruta para enviar directamente a registro
      datos
    ).pipe(
      map(resp => { //map se ejecuta solamente cuando todo sale bien, cuando hay error no se ejecuta.
        this.guardarToken(resp['idToken']); //Vamos al metodo guardar token y de la respuesta que se tenga se obtiene el idToken
        return resp; //Retornar la respuesta
      })
    );
  }

  login(usuario: UsuarioModel) {
    const datos = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}:signInWithPassword?key=${this.apikey}`,
      datos
    ).pipe(
      map(resp => {
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );
  }

  logout() {

  }

  private guardarToken(token: string) {
    this.userToken = token;
    localStorage.setItem('token', token); //localStorage asigna una nueva llave y esta llave se llama 'token' le pasara el token que se está opteniendo
  }

  leerToken() {
    if (localStorage.getItem('token')) { // Preguntar Si en el localStorage existe una llave llamada token, si si existe se le asigna al userToken lo que hay en el local Storage
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }
}
