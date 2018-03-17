import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CardDataProvider {
  
  public message: any = "Kortti";
 
  constructor(public http: HttpClient) {
 
  }
 
  setMessage(message) {
    this.message = message;
  }

}
