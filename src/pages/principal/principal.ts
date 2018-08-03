import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import {Pagina2Page,EmergenciasPage} from "../index.pages";
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { LoadingController, Loading } from 'ionic-angular';

declare var google;


@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  map: any;
  loading: Loading;

  pagina2:any = Pagina2Page;
  constructor(public navCtrl: NavController,
              private menuCtrl: MenuController,
              private geolocation: Geolocation,
              private loadCtrl: LoadingController) {}

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
