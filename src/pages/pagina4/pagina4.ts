import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { LoadingController, Loading } from 'ionic-angular';

 declare var google;


@IonicPage()
@Component({
  selector: 'page-pagina4',
  templateUrl: 'pagina4.html',
})
export class Pagina4Page {
  map: any;
  loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl:AlertController,private geolocation:Geolocation,
  private loadCtrl: LoadingController) {
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina4Page');
  }*/

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

        // create a new map by passing HTMLElement
        let mapEle: HTMLElement = document.getElementById('map');

        // create LatLng object
        let myLatLng = {lat: latitude, lng: longitude};

        // create map
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
}
