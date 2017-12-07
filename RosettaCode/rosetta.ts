// Variables
let x: number = 42;
const y: number = 2;

// Arrays
let words: string[] = ["hi", "hello", "howdy"];

// Generics
let genericNumbers: Array<number> = [5, 10, 15];

// Generic Function
function LogThenReturn<T>(anything: T): T {
  console.log(anything);
  return anything;
}

let someString: string = LogThenReturn<string>('a string');

// Tuple
let t: [string, number];
t = ["key", 6];

// Enum
enum Grades { 
  A, B, C, D, F
}

// Loops
let numbers: number[];
for (let i = 0; i < 10; i++) {
  numbers[i] = i + 1;
}

numbers.forEach(n => console.log(n));

const countTo: number = 10;
let currentCount: number = 1;

while (currentCount < countTo) {
  console.log(currentCount);
  currentCount++;
}

// Promises
let p: Promise<string> = new Promise((resolve, reject) => {
  try {
    let someSum = 2 + 234234;
    resolve(someSum.toString());
  } catch (e) {
    reject(e);
  }
})

// async/await
function GetTheData(): any {
  let theData: number[];
  for (let i = 0; i < 3; i++) {
    setTimeout({}, 1000);
    theData[i] = i;
  }

  return theData;
}

async function getDataWithAsync() {
  try {
    let results = await GetTheData();
    console.log(results);
  } catch (err) {
    console.log(err);
  }
}

// Recursion
function Power(x: number, y: number): number {
  if (y <= 0)
    return 1;
  else
    return x * Power(x, y - 1);
}