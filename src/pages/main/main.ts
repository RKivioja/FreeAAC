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

  message: Array<String>;
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
    for(var card of this.cardDataProvider.cards)
    {
      this.cardOptions.push(card);
    }
  }

  cardSelected(cardName) {
    var loadedCard = this.cardDataProvider.getCard(this.selectedCardName);

    this.loadWordSymbols(loadedCard);
  }

  loadWordSymbols(card) {
    this.wordSymbols.length = 0;
    this.gridSize = card.gridSize;

    for (let i = 1; i <= this.gridSize; i++) {
      this.wordSymbols.push(new WordSymbol('Symbol ' + i, "symbol.png"));
    }
  }

  wordSymbolTapped(event, wordSymbol) {
    if (this.message.length < this.messageSize) {
      this.message.push(wordSymbol.name);
    }
  }

  backspaceTapped() {
    this.message.pop();
  }
}
