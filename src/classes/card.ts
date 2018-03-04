import { WordSymbol } from '../classes/wordsymbol';

export class Card {

  private _name: string;
  private _gridSize: number;
  private _wordSymbols: Array<WordSymbol>;

  constructor(Name: string, GridSize: number, Symbols: Array<WordSymbol>) {
    this._name = Name;
    this._gridSize = GridSize;
    this._wordSymbols = Symbols;
  }

  set name(newName: string) {
    this._name = newName;
  }

  set wordSymbols(newWordSymbols: Array<WordSymbol>) {
    this._wordSymbols = newWordSymbols;
  }

  get gridSize() {
    return this._gridSize;
  }

}
