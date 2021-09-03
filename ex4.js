// Use ```.filter``` to return a new array that contains only the even numbers. Print the new array.

// ```
// let arr = [1, 22, 35, 40, 60, 2, 8, 100, 600, 3, 99, 71];
// let even_vals = []; // new array to hold result
// ```

let filterArray = [1, 22, 35, 40, 60, 2, 8, 100, 600, 3, 99, 71];
let even_vals = [];

even_vals = filterArray.filter(
    (el) => {
        return (el % 2 === 0);
    }
)

// let even_vals = filterArray.filter(
//     // (el) => {
//     //     return (el % 2)
//     // }
    
// )

// console.log(`Even numbers ${even_vals}`);
console.log(even_vals);