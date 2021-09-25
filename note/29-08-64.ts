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

function getUsername(): string | undefined {
  return "Hello";
}

const username = getUsername();
// username?.charCodeAt();

// Inline object typing

//Inline Type Annotation - fixed keys
const person1: {
  name: string;
  address: {
    province: {
      title: string;
    };
  }[];
} = {
  name: "Bob",
  address: [
    {
      province: { title: "Bangkok" },
    },
  ],
};

//Index Types
//Type key === string, value === number
const person2: {
  [key: string]: number;
} = {
  id: 1,
};

//Type-alias
type Id = {
  [key: string]: number | null;
};

const person3: Id = {
  id: null,
};

type TPerson = {
  firstname: string;
  lastname: string;
};

const person4: TPerson = {
  firstname: "a",
  lastname: "b",
};

//interface & (inheritance - extends)
interface IntPerson1 extends TelType {
  tel: number;
}

interface TelType {
  telType: string;
}

const personTel: IntPerson1 = {
  tel: 1234,
  telType: "home",
};

//interface & (inheritance - Intersect(&) with Type-alias)
interface IntRole {
  role: string;
}

type TRole = {
  role: string;
};

type TPerson1 = {
  name: string;
} & { role: string };

const person5: TPerson1 = {
  name: "abc",
  role: "admin",
};

//Generic Type : <>
type A = Record<string, any>;

function setPerson(person: {}) {}

// useCase - type ใน Redux
type ReduxActions = { type: "setUser" } | { type: "getUser" };

// useCase - Type-alias define type-name
type Name = string;
const user: { name: Name } = {
  name: "Mr",
};

// useCase - Union
type TAngle = 0 | 90 | 180 | 270 | 360;

function setAngles(angle: TAngle) {}

setAngles(90);

// Union and Intersect
type IFirstName = {
  fname: string;
};

type ILastName = {
  lname: string;
};

function getFullNameUnion(name: IFirstName | ILastName) {
  name;
}

function getFullNameIntersect(name: IFirstName & ILastName) {
  name.fname;
}

// Discriminated Unions

type User = {
  name: string;
};

type Action =
  | { type: "setUser"; payload: User }
  | { type: "getUser"; payload: undefined; error: Error };

function reducer(state: User, action: Action) {
  action.type; // ' type: "setUser" | type: "getUser" '

  if (action.type === "setUser") {
    action.payload; // ' payload: User '
  }
}

// Shaping the data model with Interface and Type ( and Union )
// Union VS Intersect

type Hello1 = { name: string } & { name: number };
type Hello2 = { name: string } | { name: number };

const hello1: Hello2 = { name: "a" };
type StringAndNumber = string & number;

// Optional

function fetchUserData(userId: number, context?: unknown) {}

fetchUserData(1);

// Intersect VS extends

type A1 = string & number;
type A2 = string & "Hello";

interface PermissionObj {
  name: string;
}

// interface User1 extends PermissionObj {
//   name: number;
// }

interface Person2 {
  username: string;
  age?: number;
  status?: string;
}

const person6: Person2 = { username: "abc" };

// Type Casting: As and As Unknown

function loadFeed(post: (string | number)[]) {
  const postAs = post as unknown as {};
  postAs;
}

loadFeed([1, 2, 3, "4"]);

// Enums vs Enums with String Values

enum Version {
  /** Version1 */
  v1 = "v1",
  v2 = "v2",
}

function setVersion(version: Version) {
  if (version === Version.v1) {
    version;
  }
}

// as const

const pie = ["22/7", "3.14"] as const;
type K = typeof pie[number];

// pie.push() // Error

// Type Narrowing and Widening
const isYed = (name: string): name is "yed" => true;

function sayYed(name: string) {
  if (name === "yed") {
    name;
  }

  if (isYed(name)) {
    name;
  }
}

// Generic Types

function toggleNormal(a: string | number): string | number {
  return a;
}

const resultToggleNormal = toggleNormal("hello");

function toggleGeneric<T extends string | number>(a: T): T {
  return a;
}

const resultToggleGeneric1 = toggleGeneric("hello");
const resultToggleGeneric2 = toggleGeneric(1);
// const resultToggleGeneric3 = toggleGeneric(true); // Error

// Generic Keyof

interface Book {
  id: string;
  isbn: string;
}

type keyOfBook = keyof Book;
var example: keyof Book = "id"; // will auto correct `id` or `isbn` (Union) [key name in Interface Book]
type valueOfBook = Book["id"]; // will auto correct `id` or `isbn` (Union) [key name in Interface Book]

function setBook<K extends keyof Book, V extends Book[K]>(key: K, value: V) {}

setBook("id", "1");
setBook("isbn", "ABP-255");

type A1B2 = { a: 1; b: 2 };
type A1B2_C = keyof A1B2;

type A1B2_editKey = `-${A1B2_C}`;

function tests<K extends A1B2_C, V extends A1B2[K]>(key: K, value: V) {}

tests("a", 1);
tests("b", 2);

// Using Generics

function sampleType(value: string | number): string | number {
  return value;
}

const getSampleType = sampleType(20); // getSampleType = string | number

function genericsType<T extends string | number>(value: T): T {
  return value;
}

const getGenericsType = genericsType(20); // getGenericsType = 20

// Map over types -> Mapped Type

type Statuses = "active" | "inactive";

type Statuses1 = {
  [P in "active" | "inactive"]: boolean;
};

// Non-Null Assertion Operator (!)

function getSomething(): null | string {
  return null;
}

const something = getSomething()!;
something?.concat();

// Common TS Helper Types (Generics) & How to read generics
// Record, Partial, Readonly, Omit, Pick, Exclude, etc.
//Record

type Record_Sample<K extends keyof any, T> = {
  [P in K]: T;
};

const universityStudentAge: Record<string | number, number> = {
  Y1: 18,
  20: 20,
};

type Record2 = {
  [P in string | number]: number;
};

const recordStatus: Record2 = {
  Y2: 19,
  21: 21,
};

type Record3<K extends string, V> = {
  [P in K]: V;
};

type Record3_Status = Record3<Statuses, boolean>;

//Partial

interface LanguageCode {
  en_US: string;
  th_TH: string;
}

type OptionLanguageCode = Partial<LanguageCode>;

const languageCodeMap: OptionLanguageCode = {};

type Partial_Sample<T> = {
  [P in keyof T]?: T[P];
};

//Readonly

type SeverID = {
  id: number;
};

type Readonly_Sample<T> = {
  readonly [P in keyof T]: T[P];
};

type ReadonlyServerID = Readonly_Sample<SeverID>;

//Pick

type Pick_Sample<T, K extends keyof T> = {
  [P in K]: T[P];
};

interface Book1 {
  id: number;
  name: string;
  description: string;
}

type Book1_ThatHaveSomeData = Pick<Book1, "id" | "name">;

const newBook1: Book1_ThatHaveSomeData = {
  id: 2,
  name: "YES",
};

//Exclude, Extract

type UnluckyNumber = 4 | 13 | 112 | 555;

type UnluckyNumber_Without555 = Exclude<UnluckyNumber, 555>;
type UnluckyNumber_Real = Extract<UnluckyNumber, 0 | 4 | 13>;

// Readonly in Interface

//Conditional Type

type CheckType<T> = T extends string
  ? "is String"
  : T extends number
  ? "is Number"
  : "none at all";

type ResultCheck_string = CheckType<"a">;
type ResultCheck_number = CheckType<1>;
type ResultCheck_none = CheckType<true>;

//Infer

type CheckTypeInfer1<T> = T extends Array<infer InsideArr>
  ? ["is Array", InsideArr]
  : "none at all";

type ResultCheckInfer1_array1 = CheckTypeInfer1<[50]>;
type ResultCheckInfer1_array2 = CheckTypeInfer1<[50, 30]>;

type CheckTypeInfer2<T> = T extends [infer index00, infer index01]
  ? ["is Array", index00, index01]
  : "none at all";

type ResultCheckInfer2_array1 = CheckTypeInfer2<[50]>;
type ResultCheckInfer2_array2 = CheckTypeInfer2<[50, 30]>;

type CheckTypeInfer_Long<T> = T extends [infer index00, ...infer indexXX]
  ? ["is Array", index00, indexXX]
  : "none at all";

type ResultCheckInfer_Long_array1 = CheckTypeInfer_Long<[50]>;
type ResultCheckInfer_Long_array2 = CheckTypeInfer_Long<[50, 30]>;

// Additional Content
//Creat JSON typescript Schema

function ref<T>(type: T) {
  return { type: "ref" as "ref", value: type };
}

const newRef = ref({ type: "number" as "number" });
