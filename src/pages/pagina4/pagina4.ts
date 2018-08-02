import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
/**
 * Generated class for the Pagina4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina4',
  templateUrl: 'pagina4.html',
})
export class Pagina4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina4Page');
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

  navegarPagina(){
    this.navCtrl.push(Pagina4Page);
  }
}
