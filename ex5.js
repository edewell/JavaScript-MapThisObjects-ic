// 5. Use ```map``` to take an array of names and return a new array that contains instances of objects you instantiated from the class below

// ```
// class Student{
//         constructor(name){
//                 this.name = name;
//         }
// }
// ```

// Iterate through the array returned using ```forEach``` and print the name property from each object instance in the array.
class Student{
        constructor(name){
                this.name = name;
        }
}

const namesArray = [ 'Deon', 'Greg', 'Harold', 'John'];

let allNames = namesArray.map(
    (el) => {
        return (
            new Student(el)
        )
    }
)

allNames.forEach(
    (el) => {
        console.log(el.name);
    }
)

console.log(allNames);