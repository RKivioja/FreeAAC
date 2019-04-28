import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { OptionsPage } from '../options/options';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController
    ) {
  }

  public startButtonTapped(event, item) {
    this.navCtrl.push(MainPage);
  }

  public optionsButtonTapped(event, item) {
    this.navCtrl.push(OptionsPage);
  }

  public infoButtonTapped(event, item) {
    this.navCtrl.push(InfoPage);
  }
}
