// 2. Use ```.map``` to create a new array of objects where each object has a property for ```index``` and ```value``` based on the elements in the array. Print the new array of objects.

// ```
// let arr = [1, 2, 3, 4];
// let num_objects = []; // new array to hold objects
// ```

// Example Object to Return:
// ```
// {
//   index: 1,
//   value: 2
// }

let mainArray = [5,10,15,20];
let numObjects = [];

numObjects = mainArray.map(
    (el, idx) => {
        return (
            {
                index: idx,
                value: el
            }
        )
    
    }
);

console.log(numObjects);