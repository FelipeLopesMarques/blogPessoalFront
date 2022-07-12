import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { TemaService } from 'src/app/service/tema.service';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css']
})
export class TemaEditComponent implements OnInit {

  tema: Tema = new Tema()

  constructor(
    private temaService: TemaService,
    private router: Router
  ) { }

  ngOnInit(): {
    if(environment.token == ''){
      this.router.navigate(['/entrar'])

    }
  }

}
