import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Card } from '../../classes/card';

import { CardDataProvider } from '../../providers/card-data/card-data';
import { WordSymbol } from '../../classes/wordsymbol';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  message: Array<string>;
  messageSize: number;
  static readonly DEFAULT_MESSAGESIZE = 3;

  selectedCardName: string;
  cardOptions: Array<Card>;
  wordSymbols: Array<WordSymbol>;

  gridSize: number;
  static readonly DEFAULT_GRIDSIZE = 12;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cardDataProvider: CardDataProvider) {
    this.message = [];
    this.messageSize = MainPage.DEFAULT_MESSAGESIZE;
    this.cardOptions = [];
    this.wordSymbols = [];
    this.gridSize = MainPage.DEFAULT_GRIDSIZE;

    this.loadCardOptions();
  }

  loadCardOptions() {
    this.cardOptions = this.cardDataProvider.cards;
  }

  cardSelected() {
    var loadedCard = this.cardDataProvider.getCard(this.selectedCardName);
    this.loadWordSymbols(loadedCard);
  }

  loadWordSymbols(card) {
    this.wordSymbols = card.wordSymbols;
    this.gridSize = card.gridSize;
  }

  wordSymbolTapped(event, wordSymbol) {
    if (this.message.length < this.messageSize) {
      this.message.push(wordSymbol.symbolImageURL);
    }
  }

  backspaceTapped() {
    this.message.pop();
  }
}
