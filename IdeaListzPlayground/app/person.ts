export interface Person {
  name: string,
  age?: number;
  displayName: () => void;
}