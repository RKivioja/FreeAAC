import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  message: Array<String>;

  symbols: Array<{ title: string, symbolImage: string }>;

  static readonly DEFAULT_GRIDSIZE = 12;
  gridSize: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.message = [];
    this.symbols = [];
    this.gridSize = MainPage.DEFAULT_GRIDSIZE;

    this.loadSymbols();
  }

  loadSymbols() {
    for (let i = 1; i <= this.gridSize; i++) {
      this.symbols.push({
        title: 'Symbol ' + i,
        symbolImage: "symbol.png"
      });
    }
  }

  symbolTapped(event, symbol) {
    this.message.push(symbol.title);
  }

  backspaceTapped(event, symbol) {
    this.message.pop();
  }
}
