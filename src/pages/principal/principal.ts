import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Pagina2Page,EmergenciasPage} from "../index.pages";

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  // emer:any = EmergenciasPage;
  // pagina2:any = Pagina2Page;

  constructor(public navCtrl: NavController,  public navParams: NavParams) {}

  navegarPagina(){
    this.navCtrl.push(Pagina2Page);
  }
  navegarNumeros(){
    this.navCtrl.push(EmergenciasPage);
  }

}
