import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import {Pagina2Page,EmergenciasPage} from "../index.pages";

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  pagina2:any = Pagina2Page;
  constructor(public navCtrl: NavController,
              private menuCtrl: MenuController) {}

  // emer:any = EmergenciasPage;
  // pagina2:any = Pagina2Page;

  navegarPagina(){
    this.navCtrl.push(Pagina2Page);
  }
  mostrarMenu(){
    this.menuCtrl.toggle();
  }
  navegarNumeros(){
    this.navCtrl.push(EmergenciasPage);
  }

}
