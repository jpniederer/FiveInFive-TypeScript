import { Person } from './person'

export class User implements Person {
  name: string;
  private hiddenId: number;
  age?: number;

  constructor(name: string) {
    this.name = name;
    this.hiddenId = Math.random() * 1000000;
  }

  displayName() {
    console.log(this.name);
  }
}