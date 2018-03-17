import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CardDataProvider } from '../../providers/card-data/card-data';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  message: Array<String>;
  messageSize: number;
  static readonly DEFAULT_MESSAGESIZE = 3;

  //TODO: utilize new classes
  cardOptions: Array<{ name: string, location: string }>;
  wordSymbols: Array<{ title: string, symbolImage: string }>;

  gridSize: number;
  static readonly DEFAULT_GRIDSIZE = 12;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cardDataProvider: CardDataProvider) {

    this.message = [];
    this.messageSize = MainPage.DEFAULT_MESSAGESIZE;
    this.cardOptions = [];
    this.wordSymbols = [];
    this.gridSize = MainPage.DEFAULT_GRIDSIZE;

    this.loadCardOptions();
    this.loadWordSymbols("card");
  }

  loadCardOptions() {
    //TODO: load card options from storage
    this.cardOptions.push({
      name: this.cardDataProvider.message,
      location: 'C:/'
    });
    this.cardOptions.push({
      name: 'Emoji2',
      location: 'C:/'
    });
  }

  cardSelected() {
    //TODO: load a card from storage
    var loadedCard = "card";

    this.loadWordSymbols(loadedCard);
  }

  loadWordSymbols(card) {
    this.wordSymbols.length = 0;
    for (let i = 1; i <= this.gridSize; i++) {
      this.wordSymbols.push({
        title: 'Symbol ' + i,
        symbolImage: "symbol.png"
      });
    }
  }

  wordSymbolTapped(event, wordSymbol) {
    if (this.message.length < this.messageSize) {
      this.message.push(wordSymbol.title);
    }
  }

  backspaceTapped() {
    this.message.pop();
  }
}
