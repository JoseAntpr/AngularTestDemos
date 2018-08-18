import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedio/spies/medicos.component';
import { MedicosService } from './intermedio/spies/medicos.service';
import { MedicoComponent } from './intermedio2/medico/medico.component';
import { MedicoService } from './intermedio2/medico/medico.service';
import { HospitalComponent } from './intermedio2/hospital/hospital.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MedicosService,
    MedicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
