import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController, MenuController } from 'ionic-angular';
=======
import { IonicPage, NavController, NavParams } from 'ionic-angular';
>>>>>>> 04fce7f93fae48bbcc8d34f7b4e06f8359099fa8

import {Pagina2Page,EmergenciasPage} from "../index.pages";

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
<<<<<<< HEAD
  pagina2:any = Pagina2Page;
  constructor(public navCtrl: NavController,
              private menuCtrl: MenuController) {}
=======
  // emer:any = EmergenciasPage;
  // pagina2:any = Pagina2Page;

  constructor(public navCtrl: NavController,  public navParams: NavParams) {}
>>>>>>> 04fce7f93fae48bbcc8d34f7b4e06f8359099fa8

  navegarPagina(){
    this.navCtrl.push(Pagina2Page);
  }
<<<<<<< HEAD
  mostrarMenu(){
    this.menuCtrl.toggle();
=======
  navegarNumeros(){
    this.navCtrl.push(EmergenciasPage);
>>>>>>> 04fce7f93fae48bbcc8d34f7b4e06f8359099fa8
  }

}
