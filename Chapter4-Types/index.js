const item = {
  _name: "Javascript: Something",
  _price: 59.95,
  _author: "Huan Nguyen",
  _isbn: "123456789",

  set name(newName) {
    if (typeof newName === "string") {
      console.log("Set new name");
      this._name = newName;
    } else {
      throw new TypeError("Name must be a string.");
    }
  },
  get name() {
    console.log("Return name");
    return this._name;
  },
};

console.log(item);

// const item = Object.create(Object.prototype, {
//   name: {
//     value: "Javascript: Something",
//     writable: false,
//     configurable: true,
//     enumerable: true
//   },
//   price: {
//     value: 59.95,
//     writable: false,
//     configurable: true,
//     enumerable: true
//   },
//   author: {
//     value: "Huan Nguyen",
//     writable: false,
//     configurable: true,
//     enumerable: true
//   },
//   isbn: {
//     value: "123456789",
//     writable: false,
//     configurable: true,
//     enumerable: false
//   },
//   priceDescripting: {
//     value: function() {
//       console.log(`${this.author}: ${this.name}`);
//     }
//   }
// });

// console.log(item.name);
// console.log(item.price);
// console.log(item.author);
// console.log(item.isbn);

// item.priceDescripting();

// // class Item {
// //   constructor(name, price, author, isbn) {
// //     this.name = name;
// //     this.price = price;
// //     this.author = author;
// //     this.isbn = isbn;
// //   }

// //   printDescription() {
// //     console.log(`${this.author}: ${this.name}`);
// //   }
// // }

// // const item = new Item(
// //   "Javascript: Guide",
// //   59.95,
// //   "Huan Nguyen",
// //   "123456789"
// // );

// // console.log(item.name);
// // console.log(item.price);
// // console.log(item.author);
// // console.log(item.isbn);

// // item.printDescription();

// // console.log(Item.prototype);
// // console.log(item.__proto__);
// // console.log(Object.getPrototypeOf(item));
// // console.log(item.constructor);

// // // function Item(name, price, author, isbn) {
// // //   this.name = name;
// // //   this.price = price;
// // //   this.author = author;
// // //   this.isbn = isbn;
// // //   this.printDescription = function() {
// // //     console.log(`${this.author}: ${this.name}`);
// // //   }
// // // }

// // // const item = {
// // //   name: "Javascript: The Something",
// // //   price: 59.95,
// // //   author: "Philip Ackerman",
// // //   isbn: "978-4932-2286-5",
// // //   printDescription: function() {
// // //     console.log(`${this.author}: ${this.name}`)
// // //   }
// // // }

// // // console.log(item.name);
// // // console.log(item.price);
// // // console.log(item.author);
// // // console.log(item.isbn);

// // // item.printDescription();

// // // // console.log(typeof true);
// // // // console.log(typeof false);
// // // // console.log(typeof 4711);
// // // // console.log(typeof 22.22);
// // // // console.log(typeof "John Doe");
// // // // console.log(typeof function () {});
// // // // console.log(typeof {});
// // // // console.log(typeof []);
// // // // console.log(typeof null);
// // // // console.log(typeof undefined);
// // // // console.log(typeof Symbol("B"));
// // // // // boolean
// // // // // boolean
// // // // // number
// // // // // number
// // // // // string
// // // // // function
// // // // // object
// // // // // object
// // // // // object
// // // // // undefined
// // // // // symbol

// // // // // function example(x) {
// // // // //   console.log(x);
// // // // //   x = 5;
// // // // //   console.log(x);
// // // // // }

// // // // // let y = 4711;
// // // // // console.log(y);
// // // // // example(y);
// // // // // console.log(y);

// // // // // // const john = {
// // // // // //   firstName: "John",
// // // // // //   lastName: "Doe"
// // // // // // }

// // // // // // const john2 = john;
// // // // // // john2.firstName = "James";

// // // // // // console.log(john);
// // // // // // console.log(john2);
