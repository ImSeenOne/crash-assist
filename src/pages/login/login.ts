import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController} from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user = {
    name: 'Administrator',
    username: 'admin'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl:MenuController) {
}

  login() {
    //this.events.publish('user:login');
  }
  mostrarMenu(){
    this.menuCtrl.toggle();
  }
}
