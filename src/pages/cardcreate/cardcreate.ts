import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { CardDataProvider } from '../../providers/card-data/card-data';

import { Card } from '../../classes/card';
import { WordSymbol } from '../../classes/wordsymbol';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-cardcreate',
  templateUrl: 'cardcreate.html',
  })

export class CardcreatePage {
  
  card: Card;
  sizeOptions: Array<{ gridSize: number }>;
  cardName: string;
  selectedGridSize: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
              public toastCtrl: ToastController, public cardDataProvider: CardDataProvider) {
    this.sizeOptions = [];
    this.card = new Card("", 4, new Array<WordSymbol>());
    this.cardName = "";

    this.loadSizeOptions();
    this.fillGrid();
  }

  loadSizeOptions() {
    for (let i = 2; i <= 12; i = i + 2)
    {
      this.sizeOptions.push({
        gridSize: i
      });
    }
  }

  fillGrid()
  {
    let wordSymbols: Array<WordSymbol> = [];
    
    for (let i = 0; i < this.card.gridSize; i++)
    {
      wordSymbols.push(new WordSymbol("+", "test"));
    } 

    this.card.wordSymbols = wordSymbols;
  }

  sizeSelected() {
    this.card.gridSize = this.selectedGridSize;
    this.card.wordSymbols = [];
    this.fillGrid();
  }

  promptForWordSymbol(wordSymbol) {
    let prompt = this.alertCtrl.create({
      title: 'Lisää symboli',
      inputs: [
        {
          name: 'symbolname',
          placeholder: 'Symboli'
        },
      ],
      buttons: [
        {
          text: 'Peruuta'
        },
        {
          text: 'Tallenna',
          handler: data => {
            this.card.wordSymbols[this.card.wordSymbols.indexOf(wordSymbol)].name = data.symbolname;
          }
        }
      ]
    });
    prompt.present();
  }

  saveButtonTapped() {
    this.saveCardData();

    this.navCtrl.push(HomePage);

    let cardSavedToast = this.toastCtrl.create({
      message: 'Kortin tallentaminen onnistui',
      duration: 3000
    });
    cardSavedToast.present();
  }

  cancelButtonTapped() {
    this.navCtrl.pop();
  }

  saveCardData() {
    this.card.name = this.cardName;
    this.cardDataProvider.saveCard(this.card);
  }
}
