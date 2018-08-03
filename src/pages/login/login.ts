import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { PrincipalPage } from '../index.pages';




@IonicPage()
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {
  principal = PrincipalPage;
  user = {
    name: 'Administrator',
    username: 'admin'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,) {
}

abrirPagina(pagina:any){
  //this.rootPage = pagina;
  this.navCtrl.setRoot(PrincipalPage);
}

}
