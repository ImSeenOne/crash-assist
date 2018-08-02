import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EmergenciasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-emergencias',
  templateUrl: 'emergencias.html',
})
export class EmergenciasPage {
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
      nombre:"Denuncia anonima",
      numero:"numero pro"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmergenciasPage');
  }

}
