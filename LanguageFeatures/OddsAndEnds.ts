// Function with Data Annotations
function square(x: number): number {
  return x * x;
}

// Arrow functions
let squareArrow = (x: number) => x * x;
let helloArrow = () => console.log("Hello");
let subtract = (a, b) => a - b;

let values: number[] = [1000, 1500, 2000, 3000, 4444, 24];
let filteredValues: number[];
filteredValues = values.filter((value, index, array) => {
  if (value < 2000) {
    return true;
  }
}); // Should return [1000, 1500, 24]

// Function Types
let logger: (message: string) => void;
const cashOnHand = 15098594;
function logHasMoney(message: string): void {
  console.log(`Cash is available. ${message}`);
}
function logNoMoney(message: string): void {
  console.log(`There is no cash. ${message}`);
}
logger = cashOnHand > 0 ?
  logHasMoney :
  logNoMoney;
logger("That's what's up.");

// Creating an object from the Person class.
let josh = new Person();
josh.age = 28;
josh.name = "Josh";
josh.netWorth = 100000000;
josh.getInfo();

// Implementing an Interface
let Lauren = {
  name: "Lauren",
  age: 10,
  getInfo: () => console.log(`${this.name} is ${this.age}.`)
}
