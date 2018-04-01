export class WordSymbol {

  private _name: string;
  private _symbolImageURL: string;

  constructor(Name: string, symbolImage: string) {
    this._name = Name,
    this._symbolImageURL = symbolImage;
  }

  set name(newName: string) {
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  get symbolImageURL() {
    return this._symbolImageURL;
  }

  set symbolImageURL(newSymbolImageURL: string) {
    this._symbolImageURL = newSymbolImageURL;
  }
}
