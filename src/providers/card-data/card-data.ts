import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Card } from '../../classes/card';

@Injectable()
export class CardDataProvider {
  
  public cards: Array<Card> = [];
 
  constructor(
    public httpClient: HttpClient
    ) {
  }

  public saveCard(card: Card) {
    this.cards.push(card);
  }

  public deleteCard(card: Card) {
    var index = this.cards.indexOf(card, 0);
    if (index > -1) {
      this.cards.splice(index, 1);
    }
  }
  
  public getCard(cardName: string)
  {
    return this.cards.find(_ => _.name === cardName);
  }

  public getCards()
  {
    return this.cards;
  }
}
