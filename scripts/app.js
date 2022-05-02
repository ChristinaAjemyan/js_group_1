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


fetch('https://raw.githubusercontent.com/ChristinaAjemyan/js_group_1/master/data/users-2.json',
    {
        method: 'GET'
    })
    .then(async (response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json()
        console.log(result)
    })

function multiplactionTable(max) {
    for (let i = 1; i < max; i++) {
        let div = '<div class="col">'
        for (let j = 1; j < 10; j++) {
            let col = `<p>${i}*${j}=${j * i}</p>`;
            div += col;
        }
        div += '</div>'
        document.getElementById("multiplactionTable").innerHTML = document.getElementById("multiplactionTable").innerHTML+div;
        console.log(div)

    }
}
// multiplactionTable(10)

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return this.radius**2*Math.PI;
    }

    getPerimeter() {
        return this.radius*2*Math.PI;
    }
}

const circle1=new Circle(10);
console.log(circle1.getPerimeter())
console.log(circle1.getArea())