import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmergenciasPage } from './emergencias';

@NgModule({
  declarations: [
    EmergenciasPage,
  ],
  imports: [
    IonicPageModule.forChild(EmergenciasPage),
  ],
})
export class EmergenciasPageModule {

  numeros:any[] = [
    {
      nombre:"Num. Nacional",
      numero:"911"
    },
    {
      nombre:"Informacion General",
      numero:"040"
    },
    {
      nombre:"Radio Patrullas",
      numero:"Choque con otro vehiculo"
    },
    {
      nombre:"Bomberos",
      numero:"Fallo mecanico"
    },
    {
      nombre:"Denuncio anonima",
      numero:"Tu culop"
    }
  ];


}
