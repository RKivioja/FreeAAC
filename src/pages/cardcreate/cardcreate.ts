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
  
  card: Card;
  sizeOptions: Array<{ gridSize: number }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sizeOptions = [];
    this.card = new Card(null, 4, new Array<WordSymbol>());

    this.loadSizeOptions();
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
    let wordSymbols: Array<WordSymbol> = [];
    
    for (let i = 0; i < this.card.wordSymbols.length; i++)
    {
      wordSymbols.push(new WordSymbol("test", "test"));
    } 

    this.card.wordSymbols = wordSymbols;
  }

}
