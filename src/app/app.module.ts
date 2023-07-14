import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultationFormComponent } from './consultation-form/consultation-form.component';
import { PatientFormComponent } from './patient-form/patient-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultationFormComponent,
    PatientFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
