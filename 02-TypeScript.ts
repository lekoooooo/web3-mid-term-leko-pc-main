//! დაწერეთ არსებული კოდი Typescript-ში:

// მაგალითი 1
let UserName: string = "Alice";

// მაგალითი 2

let numbers: number[] = [1, 2, 3];

// მაგალითი 3

function multiply(a: number, b: number) {
  return a * b;
}

// მაგალითი 4
type UserProps = {
  id: number;
  name: string;
};
const nickName: UserProps = { id: 1, name: "Alice" };

// მაგალითი 5
// რისთვის ვიყენებთ არსებული კოდში = Guest-ს :

function greet(name: string = "Guest") {}

// პასუხი:
//ჩვენ guest-ს ვაყენებთ როგორც default-ს,
//  თუ ფუნქციის გამოძახებისას name-ს არ გადავცემთ არგუმენტს, ავტომატურად გამოუჩნდება hello guest

// მაგალითი 6
// დაწერეთ ტიპი რომელიც მოერგება ყველა ქვემოთ ჩამოთვლილ ელემენტს. მაგ: type Config = {

type ConfigProps = {
  theme?: string;
  options?: {
    fontSize: number;
    layout: null;
  };
  tester?: string;
};
const config1 = {
  theme: "dark",
  options: {
    fontSize: 16,
    layout: null,
  },
};

const config2 = {
  theme: "dark",
};

const config3 = {
  tester: "test",
};

// მაგალითი 7
// დაწერეთ ტიპი რომელიც მოერგება ყველა ქვემოთ ჩამოთვლილ ელემენტს. მაგ: type MixedArray =

type MixedArray = (number | string | boolean | object)[];

const array1 = [42, "hello", { name: "Alice" }];
const array2 = ["apple", true, { isValid: false }];
const array3 = [];

// მაგალითი 8
// აღწერეთ რისი ტიპიზაცია ხდება არსებულ კოდში წერილობით

type Handler = {
  process?: () => string;
  validate?: (input: string) => boolean;
  log?: () => void;
};

//Handler არის ფუნქციების ობიექტი,
//  process-ი არ არის სავალდებულო რომელიც არაფერს იღებს არგუმენტად
// და აბრუნებს სტრინგს.

//validate არ არის სავალდებულო რომელიც იღებს არგუმენტს სტრინგის სახით
//და აბრუნებს boolean-ს

//log-იც არ არის სავალდებულო ფუნქცია
//  რომელიც არგუმენტად არ იღებს არაფერს
//აბრუნებს void-ს (სიცარიელეს)

// მაგალითი 9

// შექმენით ტიპი მონაცემისთივს:

type User = {
  id: number;
  username: string;
  isAdmin: boolean;
  profile: {
    fullName: string;
    age: number;
    interests: string[];
  };
  settings: {
    theme: string;
    notifications: {
      email: boolean;
      sms: boolean;
    };
  };
  metadata: undefined;
};

const user: User = {
  id: 101,
  username: "tech_learner",
  isAdmin: false,
  profile: {
    fullName: "Alice Johnson",
    age: 25,
    interests: ["coding", "gaming", "reading"],
  },
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
    },
  },
  metadata: undefined,
};
