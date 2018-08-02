import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import {Pagina2Page,EmergenciasPage} from "../index.pages";

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  emergencia:any = EmergenciasPage;
  pagina2:any = Pagina2Page;
  constructor(public navCtrl: NavController) {}

  navegarPagina(){
    this.navCtrl.push(Pagina2Page);
  }

}
