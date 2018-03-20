import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MostrarAlumnoPage } from './mostrar-alumno';

@NgModule({
  declarations: [
    MostrarAlumnoPage,
  ],
  imports: [
    IonicPageModule.forChild(MostrarAlumnoPage),
  ],
})
export class MostrarAlumnoPageModule {}
