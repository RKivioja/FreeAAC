import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { CardDataProvider } from '../../providers/card-data/card-data';
import { ImageDataProvider } from '../../providers/image-data/image-data';

import { Card } from '../../classes/card';
import { WordSymbol } from '../../classes/wordsymbol';

import { HomePage } from '../home/home';
import { SelectsymbolmodalPage } from '../selectsymbolmodal/selectsymbolmodal';

@IonicPage()
@Component({
  selector: 'page-cardcreate',
  templateUrl: 'cardcreate.html',
  })

export class CardcreatePage {
  
  public card: Card;
  public sizeOptions: Array<{ gridSize: number }> = [];
  public cardName: string = "";
  public selectedGridSize: number = 4;

  public constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public cardDataProvider: CardDataProvider,
    public imageDataProvider: ImageDataProvider
    ) {
    this.card = new Card("", this.selectedGridSize, new Array<WordSymbol>());

    this.loadSizeOptions();
    this.fillGrid();
  }

  public promptForWordSymbol(wordSymbol) {
    let selectSymbolModal = this.modalCtrl.create(SelectsymbolmodalPage);
    selectSymbolModal.present();
    selectSymbolModal.onDidDismiss(data => {
      if(data != undefined)
      {
        this.card.wordSymbols.find(_ => _.symbolImageURL === wordSymbol.symbolImageURL).symbolImageURL = data;
      }
    })
  }

  public sizeSelected() {
    this.card.gridSize = this.selectedGridSize;
    this.card.wordSymbols = [];
    this.fillGrid();
  }

  public saveButtonTapped() {
    if(!(this.cardName.length === 0) || this.cardName.trim())
    {
      this.saveCardData();

      this.navCtrl.push(HomePage);
  
      let cardSavedToast = this.toastCtrl.create({
        message: 'Kortin tallentaminen onnistui',
        duration: 3000
      });
      cardSavedToast.present();
    }
    else
    {
      let cardNameMissingToast = this.toastCtrl.create({
        message: 'Kortille täytyy antaa nimi ennen tallentamista',
        duration: 3000
      });
      cardNameMissingToast.present();
    }
  }

  public cancelButtonTapped() {
    this.navCtrl.pop();
  }

  private loadSizeOptions() {
    for (let i = 2; i <= 12; i = i + 2)
    {
      this.sizeOptions.push({
        gridSize: i
      });
    }
  }

  private fillGrid()
  {
    let wordSymbols: Array<WordSymbol> = [];
    
    for (let i = 0; i < this.card.gridSize; i++)
    {
      //TODO: lataa placeholderit ja tarjoa kuvia vasta modaalissa
      wordSymbols.push(new WordSymbol("+", this.imageDataProvider.getImageURLs()[i]));
    } 

    this.card.wordSymbols = wordSymbols;
  }

  private saveCardData() {
    this.card.name = this.cardName;
    this.cardDataProvider.saveCard(this.card);
  }
}
