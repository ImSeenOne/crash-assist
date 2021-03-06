import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';

import { LoginPage, PrincipalPage,Ajustes2Page, TabsPage, FormularioUsuarioPage } from '../pages/index.pages';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  principal = PrincipalPage;
  tabs = TabsPage;
  ajustes2 = Ajustes2Page;
  home =  PrincipalPage;
  formulario = FormularioUsuarioPage;
  rootPage:any = LoginPage;

  user= {} as User;
  //logout = LoginPage;

  //rootPage:any = PrincipalPage;

  constructor(private afAuth: AngularFireAuth,
    platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ionViewWillLoad() {
    this.user = this.afAuth.auth.currentUser();
  }

  abrirPagina(pagina:any){
    this.rootPage = pagina;
    this.menuCtrl.close();
  }

  cerrar(log:LoginPage){
    this.rootPage = LoginPage;
  }





}
