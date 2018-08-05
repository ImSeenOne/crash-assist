import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { User } from "../../models/user";

@IonicPage()
@Component({
  selector: 'page-formulario-usuario',
  templateUrl: 'formulario-usuario.html',
})
export class FormularioUsuarioPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams, public menuCtrl:MenuController,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioUsuarioPage');
  }

  async register(user: User) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
      let alert = this.alertCtrl.create({
        title: '¡Registrado exitosamente!',
        subTitle: 'Ésta startup está en construcción, así que todos los usuarios estarán por defecto en el plan standard, tan pronto habilitemos los pagos: ¡podrás usar super y pro!',
        buttons: [{
          text:'Aceptar',
          handler:() => {


              this.navCtrl.popToRoot();

            }
        }]
      });
      alert.present();
    } catch (e) {
      console.error(e);
    }
  }

}
