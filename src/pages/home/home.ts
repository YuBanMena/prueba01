import { MostrarAlumnoPage } from './../mostrar-alumno/mostrar-alumno';
import { RegistrarAlumnoPage } from './../registrar-alumno/registrar-alumno';
import { ContacPage } from './../contac/contac';
import { Component } from '@angular/core';
import { NavController, AlertController, App} from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  personas: any;
  image: string = null;


  constructor(public appCtrl: App,
              public alertCtrl: AlertController,
              public http: HttpProvider,
              private camera: Camera

              ) {
    this.getPersonas();

  }

  getPersonas() {
    this.http.getPersonas()
      .then(data => {
        this.personas = data;
        console.log(this.personas);
      });
  }


  items2 = [
    {
      nombre: 'Yu Ban',
      apellidoPaterno: 'Mena',
      apellidoMaterno: 'Zabala'
    },
    {
      nombre: 'Hector Edgar',
      apellidoPaterno: 'Matias',
      apellidoMaterno: 'Rodriguez'
    }
  ];

  elementSelected(item) {
    this.appCtrl.getRootNav().setRoot(MostrarAlumnoPage, {
      id_Persona:item.id,
      nombre: item.nombre,
      apellidoPaterno: item.apellidoPaterno,
      apellidoMaterno: item.apellidoMaterno,
      usuario:item.usuario,
      password:item.password
    });
  }

  irARegistrarAlumno(){
    this.appCtrl.getRootNav().setRoot(RegistrarAlumnoPage);
  }
  ionViewDidLoad() {
  }

  getPicture() {
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture(options)
      .then(imageData => {
        this.image = `data:image/jpeg;base64,${imageData}`;
      })
      .catch(error => {
        console.error(error);
      });
  }



}
