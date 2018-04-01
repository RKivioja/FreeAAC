import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { ImageDataProvider } from '../../providers/image-data/image-data';

@IonicPage()
@Component({
  selector: 'page-selectsymbolmodal',
  templateUrl: 'selectsymbolmodal.html',
})
export class SelectsymbolmodalPage {

  symbolImageOptions: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
              public imageDataProvider: ImageDataProvider) {
    this.symbolImageOptions = imageDataProvider.getImageURLs();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  selection(imageURL) {
    this.viewCtrl.dismiss(imageURL);
  }

}
