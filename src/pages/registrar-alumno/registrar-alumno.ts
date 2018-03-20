import { HttpProvider } from '../../providers/http/http';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-registrar-alumno',
  templateUrl: 'registrar-alumno.html',
})
export class RegistrarAlumnoPage {

  persona = {
    id_Persona: Math.floor(Math.random() * 999999),
    usuario: '',
    password: '',
    apellidoPaterno: '',
    nombre: '',
    apellidoMaterno: ''
  };
  constructor(public appCtrl: App,public navCtrl: NavController, public navParams: NavParams,public http:HttpProvider) {
  }

  storePersona() {
    this.http.addPersona(this.persona).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
    this.irIndex();
  }

  irIndex() {
    this.appCtrl.getRootNav().setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarAlumnoPage');
  }


}
