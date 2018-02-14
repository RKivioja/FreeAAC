class Card {

  private name: string;
  private gridSize: number;
  private symbols: Array<{ title: string, symbolImage: string }>;

  constructor(Name: string, GridSize: number, Symbols: Array<{ title: string, symbolImage: string }>) {
    this.name = Name;
    this.gridSize = GridSize;
    this.symbols = Symbols;
  }
}