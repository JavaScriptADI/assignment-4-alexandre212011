console.log(" FizzBuzz from 1 to 100:");
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
console.log(" 100 Random Numbers between 1 and 100:");
for (let i = 0; i < 100; i++) {
  console.log(Math.floor(Math.random() * 100) + 1);
}
let sumEven = 0;
for (let i = 2; i <= 1000; i += 2) {
  sumEven += i;
}
console.log(" Sum of all even numbers between 1 and 1000:", sumEven);
let sumDiv3or5 = 0;
for (let i = 1; i <= 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sumDiv3or5 += i;
  }
}
console.log(" Sum of all numbers (3 or 5) between 1 and 1000:", sumDiv3or5);
let sumDiv3a5 = 0;
for (let i = 1; i <= 1000; i++) {
  if (i % 15 === 0) {
    sumDiv3a5 += i;
  }
}
console.log(" Sum of all numbers by both (3 and 5) between 1 and 1000:", sumDiv3a5);