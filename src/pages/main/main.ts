import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  message: Array<String>;
  messageSize: number;
  static readonly DEFAULT_MESSAGESIZE = 3;

  cardOptions: Array<{ name: string, location: string }>;

  symbols: Array<{ title: string, symbolImage: string }>;

  gridSize: number;
  static readonly DEFAULT_GRIDSIZE = 12;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.message = [];
    this.messageSize = MainPage.DEFAULT_MESSAGESIZE;
    this.cardOptions = [];
    this.symbols = [];
    this.gridSize = MainPage.DEFAULT_GRIDSIZE;

    this.loadCardOptions();
    this.loadSymbols("card");
  }

  loadCardOptions() {
    //TODO: load card options from storage
    this.cardOptions.push({
      name: 'Emoji',
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

    this.loadSymbols(loadedCard);
  }

  loadSymbols(card) {
    this.symbols.length = 0;
    for (let i = 1; i <= this.gridSize; i++) {
      this.symbols.push({
        title: 'Symbol ' + i,
        symbolImage: "symbol.png"
      });
    }
  }

  symbolTapped(event, symbol) {
    if (this.message.length < this.messageSize) {
      this.message.push(symbol.title);
    }
  }

  backspaceTapped() {
    this.message.pop();
  }
}
