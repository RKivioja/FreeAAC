export class WordSymbol {

  private _name: string;
  private _symbolImage: string;

  constructor(Name: string, symbolImage: string) {
    this._name = Name,
    this._symbolImage = symbolImage;
  }

  set name(newName: string) {
    this._name = newName;
  }

  get name() {
    return this._name;
  }
}
