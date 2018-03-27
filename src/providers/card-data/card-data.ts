import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Card } from '../../classes/card';

@Injectable()
export class CardDataProvider {
  
  cards: Array<Card>;
 
  constructor(public http: HttpClient) {
    this.cards = [];
  }

  saveCard(card) {
    this.cards.push(card);
  }

  deleteCard(card) {
    var index = this.cards.indexOf(card, 0);
    if (index > -1) {
      this.cards.splice(index, 1);
    }
  }
  
  getCard(cardName)
  {
    return this.cards.find(_ => _.name === cardName);
  }

  getCards()
  {
    return this.cards;
  }
}
