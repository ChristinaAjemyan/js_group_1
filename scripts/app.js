"use strict"
class Person {
    constructor(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName,
            this.age = age;
        this.gender = gender;
    }
}
class Student extends Person {
    constructor(firstName, lastName, age, gender, speciality) {
        super(firstName, lastName, age, gender);
        this.speciality = speciality;
        this.programmingLanguages = [];
    }

    addNewProgrammingLanguage(newLanguage) {
        this.programmingLanguages.push(newLanguage);
    }
}



const student1 = new Student('John', 'Doe', 25, 'male', 'programmer');
// console.log(student1);
student1.addNewProgrammingLanguage('JavaScript');
// console.log(student1.programmingLanguages);
student1.addNewProgrammingLanguage('Angular');
// console.log(student1.programmingLanguages);


class DateFormatter extends Date {

    getFormattedDate() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
    }

}

// console.log(new DateFormatter('Dectember 19, 1975 23:02:00').getFormattedDate());

const count = false;

const countValue = new Promise((resolve, reject) => {
    if (count) {
        resolve("This is resolved")
    } else {
        // reject("This is rejected")
    }
})

// console.log(countValue);

// countValue.then((result)=>{
//     console.log(result)
// }).catch((res)=>{
//     console.log(res)
// }).finally(()=>{
//     console.log('finally');
// })

let object = {
    x: 1,
    y: {
        z: ''
    }
}

// try {
//     console.log(object);
//     // console.log(x)
//     // console.log(object.o.p);
// } catch (err) {
//     console.log('error', err);
// } finally {
//     console.log('finally')
// }
let json = '{ "age": 30, "name":"asdsadas" }'; // incomplete data

try {

    let user = JSON.parse(json); // <-- no errors

    if (!user.name) {
        const err = new SyntaxError("Incomplete data: no name"); // (*)
        throw err
    }

    // alert(user.name);

} catch (err) {
    // alert("JSON Error: " + err.message); // JSON Error: Incomplete data: no name
}




// throw 10

async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done!")
        }, 1000)
        console.log(4)
    });

    let result = await promise; // wait until the promise resolves (*)
    console.log(3);
    // alert(result); // "done!"
}

// console.log(1);
// f();
// console.log(2);



// fetch('https://raw.githubusercontent.com/ChristinaAjemyan/js_group_1/master/data/users-2.json')
//   .then(response => response.json())
//   .then(data => console.log(data));
// console.log('after try catch')

fetch('https://raw.githubusercontent.com/ChristinaAjemyan/js_group_1/master/data/users-2.json',
    {
        method: 'GET'
    })
    .then(async (response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log(response)
        const result = await response.json()
        console.log(result)
    })