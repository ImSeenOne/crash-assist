import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
}

  login() {
    //this.events.publish('user:login');
  }
}
