import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Img } from 'ionic-angular';

@Injectable()
export class ImageDataProvider {

  imageURLs: Array<string>

  constructor(public http: HttpClient) {
    this.imageURLs = [];

    this.loadImageURLs();
  }

  getImageURLs()
  {
    return this.imageURLs;
  }

  loadImageURLs()
  {
    let imageURL = "../../assets/imgs/wordsymbols/aakkoset/a_0.jpg";

    this.imageURLs.push(imageURL);
  }

}
