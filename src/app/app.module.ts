import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedio/spies/medicos.component';
import { MedicosService } from './intermedio/spies/medicos.service';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent
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
