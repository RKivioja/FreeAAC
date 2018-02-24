import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Card } from '../../classes/card';
import { WordSymbol } from '../../classes/wordsymbol';

@IonicPage()
@Component({
  selector: 'page-cardcreate',
  templateUrl: 'cardcreate.html',
  })

export class CardcreatePage {

  cards: Array<Card>;
  sizeOptions: Array<{ gridSize: number }>;
  gridSize: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cards = [];
    this.sizeOptions = [];
    this.gridSize = null;

    this.loadCards();
    this.loadSizeOptions();
  }

  loadCards() {
    //TODO: load cards from storage
    this.cards.push(new Card('Emoji', 4, new Array<WordSymbol>()));
  }

  loadSizeOptions() {
    this.sizeOptions.push({
      gridSize: 2
    });
    this.sizeOptions.push({
      gridSize: 4
    });
    this.sizeOptions.push({
      gridSize: 8
    });
    this.sizeOptions.push({
      gridSize: 12
    });
  }

  sizeSelected() {
    //TODO: fix this select so that the frontend shows gridSize in form "2x2" or "2*2"
    console.log(this.gridSize);
    this.gridSize = this.gridSize;
  }

}
