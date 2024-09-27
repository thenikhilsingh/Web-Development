// Write a program to calculate factorial of a number using reduce and for loops.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const red = (a, b) => {
    return b - a
}
console.log(arr.reduce(red))
