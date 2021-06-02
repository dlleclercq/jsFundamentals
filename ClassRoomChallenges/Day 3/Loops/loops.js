let a = 0;
a = a + 1;
console.log(a);
// expected output: 1

a++;
console.log(a);
// expected output: 2

a--;
console.log(a);

let squared = 2 ** 2

console.log(squared);
// expected output: 4

squared = 8 ** 2;
console.log(squared);
// expected output: 64

// Remainder
console.log(12 % 5);
// expected output: 2

console.log(35 % 2);

let numberToCheck = 26;

if (numberToCheck % 2 === 0) {
    console.log("this is even");
} else {
    console.log("this is odd");
}


/*
************
 FOR LOOPS
************
    - Loops offer us a quick and easy way to do something repeadetly
*/

/* BRONZE

    - Write a for loop that runs until it's reached the end of the alphabet array, and prints each letter to the console.

*/

/* SILVER

    - Write a conditional that is nested inside of the for loop that checks if the index of each character in the alphabet array is even or odd. If the index is even, console.log the letter. If the index is odd, console.log 'the index is an odd number'.

*/

/* GOLD

    - Declare a variable of arr that is initialized as an empty array. If the index of the character in the alphabet array is even, add that character to the variable of arr, and console.log arr. If the index is odd - using string interpolation - console.log 'the index ___ is an odd number'.

    - Use Google to search for an array method that allows you to add one or more elements to an array

*/

/* PLATINUM

    - Convert the conditional into a ternary

*/

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr = [];

// for (let i = 0 ; i < alphabet.length ; i++){
//     if (i % 2 === 0) {
//         console.log(alphabet[i]);
//     } else {
//         console.log("the index is an odd number");
//     }}

// for (let i = 0 ; i < alphabet.length ; i++){
//     if (i % 2 === 0) {
//         arr.push(alphabet[i]);
//         console.log(arr);
//     } else {
//         console.log(`the index ${alphabet[i]} is an odd number`);
//     }}

    for (let i = 0 ; i < alphabet.length ; i++){
        i % 2 === 0 ? arr.push(alphabet[i]) & console.log(arr) : console.log(`the index ${alphabet[i]} is an odd number`)
    }