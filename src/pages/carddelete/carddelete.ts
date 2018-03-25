import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Card } from '../../classes/card';

import { CardDataProvider } from '../../providers/card-data/card-data';

@IonicPage()
@Component({
  selector: 'page-carddelete',
  templateUrl: 'carddelete.html',
})
export class CarddeletePage {

  cards: Array<Card>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cardDataProvider: CardDataProvider) {
    this.cards = this.cardDataProvider.getCards();
  }

  cardDeleteTapped(card)
  {
    this.cardDataProvider.deleteCard(card);
    this.cards = this.cardDataProvider.getCards();
  }

}
