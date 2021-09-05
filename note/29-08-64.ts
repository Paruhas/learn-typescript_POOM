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

// =====

const flip = (n: boolean) => !n;
flip(false);

// Functions

const add2 = (a: number, b: number): number | undefined => {
  return undefined;
  return a + b;
};

// Arrays vs Tuples

const hello: "hello" = "hello";
const birthDay1: number[] = [7, 11, 2001];
const birthDay2: (number | string)[] = ["WED", "NOV", 2001];
const nestArr: number[][] = [
  [1, 2],
  [3, 4],
];

// ===== EXERCISE GRID (NEST-ARR) =====

const grid: (true | 5)[][] = [[true], [5]];

// =====

// Tuples

function useState(): [number, () => void] {
  return [1, () => {}];
}

const [counter, setCounter] = useState();

// ===== EXERCISE useEffect in TS =====

function useEffect() {}

function useEffect1(arg1: () => () => void, arg: unknown[]): void {}

// =====

const person: [name: string, age: number, isProgrammer: boolean] = [
  "Poom",
  20,
  true,
];

// Unknown && Type Guard

function add3(a: unknown, b: unknown) {
  if (typeof a === "string" || typeof b === "string") {
    return console.log("this is string");
  }
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
}

add3(10, 10);

const isPerson = (person: unknown): person is { name: string } => true;

function getName(person: unknown) {
  if (isPerson(person)) {
    person.name;
  }
}

// Null, Undefined

const shouldBeNull = null;
const shouldBeUndefined = undefined;
