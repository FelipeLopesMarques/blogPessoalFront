import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    if(environment.token == ''){
      alert('A página expirou, faça login novamete.')
      this.router.navigate(['/entrar'])

    }
  }
}
