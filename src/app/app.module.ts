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
  Pagina4Page
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
    Pagina4Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    Pagina4Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
