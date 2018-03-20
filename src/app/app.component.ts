import { HomePage } from './../pages/home/home';
import { RegistrarAlumnoPage } from './../pages/registrar-alumno/registrar-alumno';
import { MostrarAlumnoPage } from './../pages/mostrar-alumno/mostrar-alumno';
import { InicioPage } from './../pages/inicio/inicio';
import { Component, ViewChild } from '@angular/core';
import { Platform, App, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage:any = InicioPage;
  pages: Array<{ titulo: string, component: any }>

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, app: App, menu: MenuController) {
    menu.enable(true);
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.pages = [
        { titulo: 'Registrar Alumno', component: RegistrarAlumnoPage },
        { titulo: 'Ver Alumnos', component: HomePage },
      ];
    });
  }
  open(page) {
    this.nav.setRoot(page.component);
  }
}

