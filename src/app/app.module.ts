import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedio/spies/medicos.component';
import { MedicosService } from './intermedio/spies/medicos.service';
import { MedicoComponent } from './intermedio2/medico/medico.component';
import { MedicoService } from './intermedio2/medico/medico.service';
import { HospitalComponent } from './intermedio2/hospital/hospital.component';
import { IncrementadorComponent } from './intermedio2/incrementador/incrementador.component';
import { routes } from './avanzado/rutas/app.routes';


@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    MedicosService,
    MedicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
