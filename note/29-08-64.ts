// Literals

const name1 = "Bob Alice"; // name1's Primitives type === "Bob Alice"
const name2: string = "Bob Alice"; // name2's Primitives type === string

const sayHello = (name: string) => `Say ${name}`;
sayHello("hi");

// Union in TypeScript
const sayHello1 = (name: "hello" | "hi") => `Say ${name}`;
sayHello1("hello");

// ===== EXERCISE LITERALS =====

const addInt = (a: 50, b: 30) => a + b;
addInt(50, 30);

const flip = (n: boolean) => !n;
flip(false);

// Functions

const add2 = (a: number, b: number): number | undefined => {
  return undefined;
  return a + b;
};

// Arrays vs Tuples

const hello: "hello" = "Hello";
const birthDay1: number[] = [7, 11, 2001];
const birthDay2: (number | string)[] = [7, 11, 2001];
const nestArr: number[][] = [
  [1, 2],
  [3, 4],
];
