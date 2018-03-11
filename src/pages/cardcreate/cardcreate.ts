import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.sizeOptions = [];
    this.card = new Card(null, 4, new Array<WordSymbol>());

    this.loadSizeOptions();
    this.fillGrid();
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
            console.log(data);
          }
        }
      ]
    });
    prompt.present();
}

}
