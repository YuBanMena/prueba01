import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

/**
 * Generated class for the ContacPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contac',
  templateUrl: 'contac.html',
})
export class ContacPage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }


  items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];


  atras(){

    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.pop();
  }

  itemSelected(item: string) {
    let alert = this.alertCtrl.create({
      title: item,
      subTitle: item,
      buttons: ['OK']
    });
    alert.present();
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
    let alert = this.alertCtrl.create({
      title: item.nombre,
      subTitle: item.apellidoPaterno + ""+  item.apellidoMaterno+"" ,
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContacPage');
  }

}
