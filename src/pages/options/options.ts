import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardcreatePage } from '../cardcreate/cardcreate';
import { CarddeletePage } from '../carddelete/carddelete';

@IonicPage()
@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  createNewCardButtonTapped() {
    this.navCtrl.push(CardcreatePage);
  }

  deleteCardButtonTapped() {
    this.navCtrl.push(CarddeletePage);
  }

}
