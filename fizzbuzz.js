// # FizzBuzz

// Write a function that returns an array of integers from 1 up to and including a maximum number. But:

// -  For multiples of 3, add "Fizz" to the array instead of the number.
// -  For multiples of 5, add "Buzz" to the array instead of the number.
// -  For multiples of 3 and 5, add "FizzBuzz" to the array instead of the number.

function getFizzBuzz(max) {
   // YOUR CODE HERE
   let getFizzBuzz = [];
   for (let i = 0; i < 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
         return "Fizzbuzz";
      } else if (i % 5 === 0) {
         return "Buzz";
      } else if (i % 3 === 0) {
         return "Fizz";
      }
   }
}

console.log(getFizzBuzz(100)); // generates a list of numbers 1 to 100, replacing some numbers as indicated.
