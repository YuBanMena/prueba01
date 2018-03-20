import { HomePage } from './../home/home';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Nav} from 'ionic-angular';
import { MostrarAlumnoPage } from '../mostrar-alumno/mostrar-alumno';
import { RegistrarAlumnoPage } from './../registrar-alumno/registrar-alumno';

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})

export class InicioPage {

  @ViewChild('usuario')usuario;
  @ViewChild('contrasena')contrasena;

  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }


  iniciarSesion(){

    if (this.usuario.value=="" && this.contrasena.value==""){
      this.navCtrl.push(HomePage);
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Credenciales',
        //subTitle: 'El usuario es: '+ this.usuario.value+ " Contraseña: " + this.contrasena.value + "",
        subTitle: 'Comprueba tus credenciales',
        buttons: ['OK']
      });
      alert.present();
    }

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

}
