import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html'
})
export class MedicoComponent implements OnInit {

  medicos: any[] = [];

  constructor(public _medicoService: MedicoService) { }

  ngOnInit() {
  }

  helloDoctor( name: string ) {
    return `Hello ${name}`;
  }

  getDoctor() {
    this._medicoService.getMedicos()
          .subscribe( (medicos: any[]) => this.medicos = medicos);
  }

}
