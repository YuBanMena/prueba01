import { HttpProvider } from '../../providers/http/http';
import { HomePage } from './../home/home';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-mostrar-alumno',
  templateUrl: 'mostrar-alumno.html',
})
export class MostrarAlumnoPage {
  @ViewChild('nombre') nombre;
  @ViewChild('apMaterno')apMaterno;
  @ViewChild('apPaterno')apPaterno;
  @ViewChild('usuario') usuario;
  @ViewChild('password') password;
  @ViewChild('id')id;

  persona = {
    id_Persona: '',
    usuario: '',
    password: '',
    apellidoPaterno: '',
    nombre: '',
    apellidoMaterno: ''
  };
  constructor(public appCtrl: App,public navCtrl: NavController, public navParams: NavParams, public http: HttpProvider) {
  }
  borrarPersona(){
    this.http.removePersona(this.id.value).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
    this.irIndex();
  }

  editarPersona() {
    this.rellenarPersona();
    this.http.editPersona(this.persona,this.id.value).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
    this.irIndex();
  }

  irIndex() {
    this.appCtrl.getRootNav().setRoot(HomePage);
  }

  rellenarPersona(){
    this.persona.id_Persona = this.id.value;
    this.persona.nombre = this.nombre.value
    this.persona.apellidoPaterno=this.apPaterno.value
    this.persona.apellidoMaterno=this.apMaterno.value;
    this.persona.usuario=this.usuario.value;
    this.persona.password=this.password.value;
    alert(this.persona.nombre);
  }

  ionViewDidLoad() {
    //this.appCtrl.getRootNav().setRoot(this.appCtrl.getRootNav().getActive().component);
    this.nombre.value = this.navParams.get('nombre');
    this.apMaterno.value = this.navParams.get('apellidoMaterno');
    this.apPaterno.value = this.navParams.get('apellidoPaterno');
    this.id.value=this.navParams.get('id_Persona');
    this.usuario.value=this.navParams.get('usuario');
    this.password.value=this.navParams.get('password');

  }

}
