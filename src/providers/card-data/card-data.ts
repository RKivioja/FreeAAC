import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Card } from '../../classes/card';
import { WordSymbol } from '../../classes/wordsymbol';

@Injectable()
export class CardDataProvider {
  
  cards: Array<Card>;
 
  constructor(public http: HttpClient) {
    this.cards = [];
  }

  saveCard(card) {
    this.cards.push(card);
  }

  getCardName() {
    return this.cards[0].name;
  }
}
