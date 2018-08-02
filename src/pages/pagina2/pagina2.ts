import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams AlertController } from 'ionic-angular';

import {Pagina3Page,PrincipalPage} from '../index.pages';

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {
  pagina3:any = Pagina3Page;
  pagina1:any = PrincipalPage;
  mutantes:any[] = [
    {
      nombre:"llanta",
      poder:"Cambio de llanta "
    },
    {
      nombre:"choque",
      poder:"Choque"
    },
    {
      nombre:"choques",
      poder:"Choque con otro vehiculo"
    },
    {
      nombre:"fallo",
      poder:"Fallo mecanico"
    }
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

  irPagina3(mutante:any){

    this.navCtrl.push(Pagina3Page, {'mutantes': mutante});
  }


  presentAlert() {
    let alert = this.alertCtrl.create({
      title: '¡Estamos en camino!',
      subTitle: 'Dependiendo de su ubicacion estaremos ahi dentro de 15 a 30 min',
      buttons: [{
        text:'Aceptar',
        handler:() => {


            this.navCtrl.popToRoot();

          }
      }]
    });
    alert.present();
  }



}
