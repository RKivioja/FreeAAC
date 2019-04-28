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

  private static readonly DEFAULT_MESSAGESIZE = 3;
  private static readonly DEFAULT_GRIDSIZE = 12;

  public message: Array<string> = [];
  public messageSize: number = MainPage.DEFAULT_MESSAGESIZE;
  public selectedCardName: string;
  public cardOptions: Array<Card> = [];
  public wordSymbols: Array<WordSymbol> = [];
  public gridSize: number = MainPage.DEFAULT_GRIDSIZE;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private cardDataProvider: CardDataProvider
    ) {
    this.cardOptions = this.cardDataProvider.cards;
  }

  public cardSelected() {
    var loadedCard = this.cardDataProvider.getCard(this.selectedCardName);
    this.loadWordSymbols(loadedCard);
  }

  public wordSymbolTapped(event, wordSymbol) {
    if (this.message.length < this.messageSize) {
      this.message.push(wordSymbol.symbolImageURL);
    }
  }

  public backspaceTapped() {
    this.message.pop();
  }
  
  private loadWordSymbols(card) {
    this.wordSymbols = card.wordSymbols;
    this.gridSize = card.gridSize;
  }
}
