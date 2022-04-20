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
        reject("This is rejected")
    }
})

// console.log(countValue);

countValue.then((result)=>{
    console.log(result)
}).catch((res)=>{
    console.log(res)
}).finally(()=>{
    console.log('finally');
})