import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-emergencias',
  templateUrl: 'emergencias.html',
})
export class EmergenciasPage {
  numeros:any[] = [
    {
      nombre:"Num. Nacional",
      num:"911"
    },
    {
      nombre:"Informacion General",
      num:"040"
    },
    {
      nombre:"Policia, Emergencia",
      num:"060"
    },
    {
      nombre:"Bomberos",
      num:"068"
    },
    {
      nombre:"Policia Federal",
      num:"088"
    },
    {
      nombre:"Cruz Roja",
      num:"065"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmergenciasPage');
  }

}
