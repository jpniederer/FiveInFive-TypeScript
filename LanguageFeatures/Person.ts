class Person implements IPerson {
  name: string;
  age: number | null;
  private _netWorth: number;

  get netWorth(): number {
    return this._netWorth;
  }
  set netWorth (newNetWorth: number) {
    this._netWorth = newNetWorth;
  }

  getInfo() {
    this.printInfo();
    console.log(`Net Worth: ${this._netWorth}.`);
  }

  private printInfo() {
    if (this.age !== null) {
      console.log(`This person's name is ${this.name} they are ${this.age} years old.`);
    } else {
      console.log(`This person's name is ${this.name}.`);
    }
  }
}