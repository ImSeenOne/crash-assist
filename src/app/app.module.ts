import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireModule } from "angularfire2";
import { FIREBASE_CONFIG } from "./app.firebase.config";
import { AngularFireAuthModule } from "angularfire2/auth"



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
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
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
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {

}
