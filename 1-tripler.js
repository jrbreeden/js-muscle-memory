/*******************************************************************************
// Write a function tripler(array) that takes in an array and returns a new array
// containing 3 times every element of the original array.

// Examples:

//tripler([1,2,3]); // => [ 3, 6, 9 ]
// tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/

function tripler(array) {
  const numbers = [];
  for(let i = 0; i < array.length; i++){
    numbers.push(array[i] *3)
  }
  return numbers
}
console.log(tripler([5, 6, 7]))