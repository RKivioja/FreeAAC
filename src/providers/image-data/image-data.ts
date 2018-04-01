import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Img } from 'ionic-angular';
import { glob} from 'glob';

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
    /* glob("tähän pattern", function (er, files) {
      console.log(er);
      console.log(files);
    }); */

    let urlList: string[] = [
      "../../assets/imgs/wordsymbols/aakkoset/a_0.jpg",
      "../../assets/imgs/wordsymbols/aakkoset/aa.jpg",
      "../../assets/imgs/wordsymbols/aakkoset/b.jpg",
      "../../assets/imgs/wordsymbols/aakkoset/c.jpg"
    ];

    for (let i = 0; i < urlList.length; i++)
    {
      this.imageURLs.push(urlList[i]);
    }
  }

}
