// // function x() {
// //   for (let i = 1; i <= 5; i++) {
// //     setTimeout(function () {
// //       console.log("namaste vali", i);
// //     }, i * 1000);
// //   }
// // }

// // x();

// function outest() {
//   let c = 100;
//   function outer(b) {
//     let a = 10;
//     function inner() {
//       console.log(a, b, c);
//     }
//     return inner;
//   }
//   return outer;
// }
// let a = 30;
// let close = outest()("test");
// close();

// function counter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// let result = counter();
// for (let i = 0; i < 10; i++) {
//   result();
// }

// let result2 = counter();
// for (let i = 5; i < 10; i++) {
//   result2();
// }

// function MyFunction() {
//   let count = 0;
//   this.incrementCounter = function () {
//     count++;
//     console.log("increment", count);
//   };

//   this.decrementCounter = function () {
//     count--;
//     console.log("decrement", count);
//   };
// }

// const countResult = new MyFunction();

// countResult.decrementCounter();

const t1 = performance.now();

function x() {
  console.log("call back function");
}
function y(x) {
  x();
}

y(x);
for (let index = 0; index < 100; index++) {
  console.log(index);
}

function xyz() {
  console.log("call back function 123");
}
const t2 = performance.now();
console.log(t2 - t1);
setTimeout(xyz, 1000);
