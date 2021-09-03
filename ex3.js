// 3. Use ```.reduce``` to return the sum of all the numbers, each multiplied by 2. Print the final sum value.

// ```
// let arr = [1, 2, 3, 4];
// let nums_doubled_sum = []; // new variable assign the final sum
// ```

let numArray = [2,4,6,8];

let newArray = numArray.reduce(
    // (el) => {
    //     console.log(`${el}`);
    // }
    (gtotal,dsum) => {
        return (gtotal = gtotal + (dsum * 2));
    }, 0
)

// let nums_doubled_sum = numArray.reduce(
//     (gtotal,dsum) => {
//         return (gtotal * dsum);
//     }
// )

console.log(newArray);