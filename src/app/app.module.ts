import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';

import {
  PrincipalPage,
  Pagina2Page,
  Pagina3Page,
  AjustesPage,
  Ajustes2Page,
  TabsPage,
  ModalPage,
  EmergenciasPage,
  LoginPage,
  Pagina4Page,
  FormularioUsuarioPage
} from '../pages/index.pages';

export const firebaseConfig = {
  apiKey: "AIzaSyCAIFTqgoOwxDbm1dT0uqFJCwBmcoFS0xk",
    authDomain: "crash-assist.firebaseapp.com",
    databaseURL: "https://crash-assist.firebaseio.com",
    projectId: "crash-assist",
    storageBucket: "crash-assist.appspot.com",
    messagingSenderId: "686941476520"
};


@NgModule({
  declarations: [
    MyApp,
    PrincipalPage,
    Pagina2Page,
    Pagina3Page,
    AjustesPage,
    Ajustes2Page,
    TabsPage,
    ModalPage,
    EmergenciasPage,
    LoginPage,
    Pagina4Page,
    FormularioUsuarioPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage,
    Pagina2Page,
    Pagina3Page,
    AjustesPage,
    Ajustes2Page,
    TabsPage,
    ModalPage,
    EmergenciasPage,
    LoginPage,
    Pagina4Page,
    FormularioUsuarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
<<<<<<< HEAD
    Geolocation,
=======
    AngularFireDatabase,
>>>>>>> d57a78d4ea273a5643cfdf954ca05a54c273286a
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {

}
