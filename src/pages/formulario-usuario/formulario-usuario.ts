import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-formulario-usuario',
  templateUrl: 'formulario-usuario.html',
})
export class FormularioUsuarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl:MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioUsuarioPage');
  }
  mostrarMenu(){
    this.menuCtrl.toggle();
  }

}
