import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{ // Feito na aula gravada! Entrar ou cadastrar? Usuario ou usuarioLogin? devo manter ou posso excluir?
    return this.http.post<UsuarioLogin>('http://localhost:8080/usuario/logar',usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{ // Feito na aula ao vivo com Prof Geandro!
    return this.http.post<Usuario>('http://localhost:8080/usuario/cadastrar',usuario)
  }



}
