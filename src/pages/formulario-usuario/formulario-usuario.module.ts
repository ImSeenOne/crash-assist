import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormularioUsuarioPage } from './formulario-usuario';

@NgModule({
  declarations: [
    FormularioUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(FormularioUsuarioPage),
  ],
})
export class FormularioUsuarioPageModule {}
