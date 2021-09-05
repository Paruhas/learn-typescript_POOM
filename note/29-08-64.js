const add1 = (a, b) => a + b;

/**
 * @param a{number}
 * @param b{number}
 * @returns(number)
 */

const add2 = (a, b) => {
  return a + b;
};

console.log(add2("1", 1));

/* ========================== */

const person1 = {
  nickname: "BOB",
  age: 15,
};

/**
 * @type {{nickname: string}}
 */

// const nickname = "Bob"; // ไว้ตอนจะ node ไฟล์ person2 จะได้ไม่ error

const person2 = {
  nickname,
};

/* ========================== */

// Null, Undefined

const getUser = () => {};

const user = getUser();

user.address.province; // ERROR: cannot read property 'address' of undefined
