// alert('Hello')

// higher order functions
// const namesArray = ['rob', 'greg', 'tyler', 'deon', 'hal'];

// regular for loop
// for (let x = 0; x <= 10; x++)
// {
//     // do some stuff
// }

// forEach
// let myCallBack = function(el, idx)
// {
//     console.log(`${idx} ${el}`);
// }

// namesArray.forEach(myCallBack);


// namesArray.forEach((el) => {
//     console.log(`${el}`);
// });

// const namesArray = ['rob', 'greg', 'tyler', 'deon', 'hal'];

// namesArray.forEach(
//     (mycrap, myidx) => {
//         console.log(`${mycrap}`);
//     }
// )


// // map - map each element to a new array
// let myAllCapsArray = namesArray.map(
//     (el,idx) => {
//         return el.toUpperCase();
//     }
// );
// console.log(`Original Array: ${namesArray}`);
// console.log(`Mapped Array: ${myAllCapsArray}`);

let origarray = [{name:'bob', age: 23}, {name:'fred', age: 55}, {name:'ty', age: 14}];

let filteredPeople = origarray.filter(
    (el) => {
        return (el.age >= 20);
    }
).map(
    (el) => {
        return (el.name);
    }
).map(
    (el) => {
        return (el.toUpperCase);
    }
);

// console.log(filteredPeople.map(
//     (el => {
//         return (el.name)
//     })
// ))
// // let justNamesfromObjects = origarray.map(
//     (el) => {
//         return el.name;
//     }
// )


// reduce
// let salaryArray = [1000, 200, 500, 100];

// let totalSalaries = salaryArray.reduce(
//     (gtotal,nxtsalary) => {
//         return (gtotal + nxtsalary);
//         // if (nxtsalary > gtotal)
//         // {
//         //     return nxtsalary;
//         // }
//         // else
//         // {
//         //     return gtotal;
//         // }
//     }
// )

// // Print total
// console.log(`Total of salaries is ${totalSalaries}`);

// // filter - filter out elements from our new array
// let newFilterArray = salaryArray.filter(
//     (el) => {
//         // check if you want to filter it out or keep ir
//         return (el >= 300);
//     }
// );
// console.log(salaryArray);
// console.log(newFilterArray);