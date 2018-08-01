import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController, AlertController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  mutante:any = {};

  constructor(public navParams: NavParams, public navCtrl: NavController, private alertCtrl: AlertController) {
    console.log(navParams);
    this.mutante = this.navParams.get("mutantes");
  }

irAtras(){

  this.navCtrl.pop();

}
irRoot(){

  this.navCtrl.popToRoot();

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
