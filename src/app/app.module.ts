import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedio/spies/medicos.component';
import { MedicosService } from './intermedio/spies/medicos.service';
import { MedicoComponent } from './intermedio2/medico/medico.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MedicosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
