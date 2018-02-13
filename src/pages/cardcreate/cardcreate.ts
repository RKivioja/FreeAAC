import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CardcreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cardcreate',
  templateUrl: 'cardcreate.html',
})
export class CardcreatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //TODO: create class for cards
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardcreatePage');
  }

}
