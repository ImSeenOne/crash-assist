import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

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
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
