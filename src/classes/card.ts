import { WordSymbol } from '../classes/wordsymbol';

export class Card {

  private name: string;
  private gridSize: number;
  private symbols: Array<WordSymbol>;

  constructor(Name: string, GridSize: number, Symbols: Array<WordSymbol>) {
    this.name = Name;
    this.gridSize = GridSize;
    this.symbols = Symbols;
  }
}
