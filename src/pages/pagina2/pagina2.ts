import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams AlertController } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { LoadingController, Loading } from 'ionic-angular';

declare var google;


import {Pagina3Page,PrincipalPage, Pagina4Page} from '../index.pages';

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {
  map: any;
  loading: Loading;
  
  pagina3:any = Pagina3Page;
  pagina1:any = PrincipalPage;
  mutantes:any[] = [
    {
      nombre:"llanta",
      poder:"Cambio de llanta "
    },
    {
      nombre:"choque",
      poder:"Choque"
    },
    {
      nombre:"choques",
      poder:"Choque con otro vehiculo"
    },
    {
      nombre:"fallo",
      poder:"Fallo mecanico"
    }
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl:AlertController,private geolocation:Geolocation,
  private loadCtrl: LoadingController) {
  }

  irPagina3(mutante:any){

    this.navCtrl.push(Pagina3Page, {'mutantes': mutante});
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

  ionViewDidLoad(){
      this.loading = this.loadCtrl.create();
      this.loading.present();
      this.getPosition();
    }
    getPosition(): void{
        this.geolocation.getCurrentPosition()
        .then(response => {
          this.loadMap(response);
        })
        .catch(error =>{
          console.log(error);
          this.loading.dismiss();
        })
      }

      loadMap(position: Geoposition){
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        console.log(latitude, longitude);

        let mapEle: HTMLElement = document.getElementById('map');

        let myLatLng = {lat: latitude, lng: longitude};

        this.map = new google.maps.Map(mapEle, {
          center: myLatLng,
          zoom: 14
        });

        google.maps.event.addListenerOnce(this.map, 'idle', () => {
          this.loading.dismiss();
          let marker = new google.maps.Marker({
            position: myLatLng,
            map: this.map,
            title: 'Hello World!'
          });
          marker;
          mapEle.classList.add('show-map');
        });
      }

  irPagina4(){
    this.navCtrl.push(Pagina4Page);
  }


}
