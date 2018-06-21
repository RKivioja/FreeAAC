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

     /* glob("../../assets/imgs/wordsymbols/aakkoset/*.jpg", function (er, files) {
      console.log(er);
      console.log(files);
    }); */

    let urlList: string[] = [
      "../../assets/imgs/wordsymbols/aakkoset/a_0.jpg",
      "../../assets/imgs/wordsymbols/aakkoset/aa.jpg",
      "../../assets/imgs/wordsymbols/aakkoset/aaa.jpg",
      "../../assets/imgs/wordsymbols/aakkoset/b.jpg",
      "../../assets/imgs/wordsymbols/aakkoset/c.jpg",
      "../../assets/imgs/wordsymbols/aakkoset/d_0.jpg",
      "../../assets/imgs/wordsymbols/aakkoset/e.jpg",
      "../../assets/imgs/wordsymbols/aakkoset/f.jpg",
      "../../assets/imgs/wordsymbols/aakkoset/g_0.jpg",
      "../../assets/imgs/wordsymbols/aakkoset/h_0.jpg",
      "../../assets/imgs/wordsymbols/aakkoset/i.jpg",
      "../../assets/imgs/wordsymbols/aakkoset/iso_a.png",
      "../../assets/imgs/wordsymbols/aakkoset/iso_ae.png",
      "../../assets/imgs/wordsymbols/aakkoset/iso_b.png",
      "../../assets/imgs/wordsymbols/aakkoset/iso_c.png",
      "../../assets/imgs/wordsymbols/aakkoset/iso_d.png"
    ];

    for (let i = 0; i < urlList.length; i++)
    {
      this.imageURLs.push(urlList[i]);
    }
  }

}
