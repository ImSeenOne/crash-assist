import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

import { User } from "../../models/user";

import { PrincipalPage } from '../index.pages';

import { FormularioUsuarioPage } from '../index.pages';

import { AngularFireAuth } from 'angularfire2/auth';




@IonicPage()
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {

user = {} as User;

  principal = PrincipalPage;

  form = FormularioUsuarioPage;



  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController) {
  }

  async login(user: User) {
    try{
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
      this.openRootPage(this.principal);
    } catch(e) {
      console.error(e);
      let alert = this.alertCtrl.create({
        title: '¡Usuario/contraseña incorrectos!',
        subTitle: 'Intenta de nuevo, ¡sabemos que puedes! :)',
        buttons: [{
            text:'Aceptar',
            handler:() => {
              this.navCtrl.popToRoot();
            }
          },
          {
            text:'¡No estoy registrado!',
            handler:() => {
              this.navCtrl.push(this.form);
            }
          }
        ]
      });
      alert.present();
    }
  }

  register() {
    this.navCtrl.push(this.form);
  }

  openRootPage(pagina:any){
    this.navCtrl.setRoot(pagina);
  }

}
