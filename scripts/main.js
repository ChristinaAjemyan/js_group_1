// function returnFirst5(arr, count = arr.length, ...newNumbers) {
//     //arr = [5, 6, 7, 0, 9, 10, 5]
//     let tempArr = [];

//     for (let i = 0; i < count; i++) {
//         tempArr.push(arr[i]);
//     }
//     for (let i = 0; i < newNumbers.length; i++) {
//         tempArr.push(newNumbers[i])
//     }
//     console.log(newNumbers)
//     return tempArr;
// }

// const newArr = returnFirst5([5, 6, 7, 0, 9, 10, 5], 5, 1, 4, 6, 8)
// console.log(newArr);

// function getFirstCharIndex(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (char === str[i]) {
//             return i
//         }
//     }
// }
// const indexOfChar = getFirstCharIndex('find first t in this text', 'n');
// console.log(indexOfChar);

// function returnNewString(greeting, adj, ...names) {
//     let finalText = `${greeting} ${adj} `;
//     console.log(names)
//     finalText += names.join(' & ')
//     // for (let i = 0; i < names.length; i++) {
//     //     finalText += ' ' + names[i]
//     // }
//     console.log(finalText)

// }
// returnNewString('hello', 'dear', 'tom', 'frank', 'john', 'rebecca');


// function flatArrays(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] !== 'number') {
//             for(let j=0; j<arr[i].length;j++) {
//                 newArr.push(arr[i][j]);
//             }
//         } else {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// const newArr2 = flatArrays([3, 5, 6, [1, 90], 8, 0, [5, 7, 82]]);
// console.log(newArr2);
// delete newArr2[0];
// delete newArr2[7];
// delete newArr2[8];
// console.log(newArr2)


// function myFunc(arr){
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%2!==0){
//             arr.splice(i, 1)
//             i--;
//         }

//     }
//     return arr
// }
// const newAAA = myFunc([4, 5, -10, 8, 100, 99, 37, 49]) // [4, -10, 8, 100]
// console.log(newAAA)

function removeDuplicates(z) {
    //[5, 4, 4, 6, 8, 9]
    let newArr = [];
    for (let i = 0; i < z.length; i++) {
        let exists = false;
        for (let j = 0; j < newArr.length; i++) {
            if (z[i] === newArr[j]) {
                exists = true;
            }
        }
        if (!exists) {
            newArr.push(z[i]);
        }
    }
}
// function returnIndexOrPush(arr, item) {
//     for (let i = 0; i < arr.length; i++) {
//         if (item === arr[i]) {
//             return i;
//         }
//     }
//     arr.push(item);
//     return arr;
// }

// function filter(arr, cb) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let passed = cb(arr[i]);
//         if (passed) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// const evenNumbers = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], function (el) {
//     return el % 2 === 0;
// })

// const oddNumbers = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], function (el) {
//     return el % 2 !== 0
// })
// let strArr = ['hello', '123', '123456', 'skhdkashdkjashd', 'slad', 'yyyyyyyyyyyyyyyy']
// const longStrings = filter(strArr, function (el) {
//     return el.length === 3
// })

// function findItem(arr, check) {
//     for (let i = 0; i < arr.length; i++) {
//         let x = check(arr[i]);
//         if (x === true) {
//             return arr[i];
//         }

//     }
// }

// function findindex(arr, check) {
//     for (let i = 0; i < arr.length; i++) {
//         let x = check(arr[i]);
//         if (x === true) {
//             return i
//         }

//     }
// }
// let index = findindex([10, 24, 44, 21], function (b) {
//     if (b % 4 == 0) {
//         return true
//     }
// });

// function map(arr,cb){
//     let z = [];
//     for (let i = 0;i < arr.length;i++){
//         let g = cb(arr[i]);
//         z.push (g)
//     }return z;
// }
// let r = map([12,34,21,7],function (f){
//     return f * 10
// })
// console.log(r)

// function some(array,callback) {
//     for (let i = 0; i < array.length; i++) {
//         let value = callback(array[i]);
//         if (value) {

//             return true;
//         }
//     }
//     return false;
// }

// let result = some([5,555,55,6,4555,6,8,45,100],function(element){
//     return typeof element === 'string'
// })

// console.log(result);

// let car = [{
//     name:"Mercedes",
//     color:"Black",
//     style:"Fast"
// },{
//     name:"BMW",
//     color:"Black",
//     style:"Fast"
// },{
//     name:"Dodge",
//     color:"Black",
//     style:"Fast"
// }]

// function myFunc(arr){
//     for(let i = 0; i < arr.length;i++){
//         console.log(arr[i].name)
//     }
// }
// myFunc(car)

// function mYFunc(obekt){
//     if(obekt.name){
//         return obekt.name
//     }else{
//         return null
//     }
// }
// console.log(mYFunc({
//     name:"Merscedes"
// }));
// console.log(mYFunc({
//     year:2015,
// }));

// let x = {
//     name:"BMW",
//     color:"White",
//     style:"Fast",
// }

// function obekT(obekt,obektKey){
//     delete obekt[obektKey]
//     return obekt
// }
// console.log(obekT(x,"color"))


// let persons = {
//     name: 'test',
//     lastname: 'last name',
//     age: 2,
//     get dateOfBirth() {
//         return 2021 - this.age;
//     },
//     set dateOfBirth(date) {
//          this.dateOfBirthP = date;
//     }
// }

// persons.dateOfBirth = 1990;
// console.log(persons.dateOfBirth)
// console.log(persons)

// let person = {
//     name: 'Ani',
//     lastName: 'Hakobyan',
//     age: 30
// }
//{"name":"Ani","lastName":"Hakobyan","age":30}
// function stringify(object) {
//     let str = `{`
//     for (const key in object) {
//         if (Object.keys(object)[Object.keys(object).length - 1] == key) {
//             str += `"` + key + `":"` + object[key] + `"`
//         } else {
//             str += `"` + key + `":"` + object[key] + `"` + `,`
//         }

//     }
//     str += `}`
//     return str;
// }

// // console.log(stringify(person));
// // console.log(JSON.stringify(person));

// function myObj(obj) {
//     let arr = [];
//     for (let x in obj) {
//         arr.push([x, obj[x]])
//     }
//     return arr;
// }
// // console.log(myObj(obj = {
// //     name: "Ruz",
// //     age: "24"
// // }))
// /*Գրել ֆունկցիա, որը կստուգի արդյոք փոխանցված օբյեկտը դատարկ է
//  թե ոչ, և կվերադարձնի boolean արժեք։ Եթե օբյեկտը պարունակում է 
//  միայն undefined արժեքներ այդ դեպքում ևս օբյեկտը պետք է համարվի դատարկ։*/
// /*isEmptyObject({name: undefined}) => true
// isEmptyObject({}) => true
// isEmptyObject({name:’John’}) => false*/

// function isEmpty(object) {
//     let key = Object.keys(object)
//     let value = Object.values(object)
//     if (key.length == 0) {
//         return true;
//     } else {
//         let count = 0;
//         for (let i = 0; i < value.length; i++) {
//             if (value[i] == undefined) {
//                 count++
//                 if (count == value.length) {
//                     return true
//                 }
//             }
//         }
//     }
//     return false;
// }

// // console.log(isEmpty({}))

// function Person(first, last, age, color, work, date) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = color;
//     if (work) {
//         this.work = work
//     } else {
//         this.work = 'unemployed'
//     }
//     if (date) {
//         this.date = date
//     }
// }

// const firstPerson = new Person('John', 'Doe', 28, 'blue', undefined, 1990);
// const secondPerson = new Person('John', '', 28, 'blue', 'programmer');
// Person.prototype.nationality = 'test'
// console.log(firstPerson)
// console.log(secondPerson)

// let x = prompt('ygghhhhghghghghg')
// console.log(isNaN(x))
// while(isNaN(x)) {
//     x =  prompt('ygghhhhghghghghg');
// }
// console.log(-1*x)

// let a ="Hello World"
// let b="l"
// function test(x , y) {
//     let sum=0
//   for(let i=0 ; i<x.length; i++)  {
//       if(x[i]===y){
//           sum++
//       }

//   }
//     return sum
// }

// console.log(test(a,b))

// function removeExistingValue(arr, value) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             arr.splice(i, 1)
//             return arr;
//         }
//     }
// }

// console.log(removeExistingValue(['aaa', 'bbb', 'ccc', 'ddd'], 'aaa'))

/*
let x = [89,'15', 90, 150, -100, 'asdf', '-50']
function calculateSum(array) {
    let sum = 0;
    array.forEach(function (element) {
        if (isFinite(element)) {
            sum += +element;
        }
        
    });
    return sum;
}

console.log(calculateSum(x))  */


// let obj1 = { name: 'John'};

// function myfunction(obj) {
//     let obj2 = {};
//     for (let key in obj) {
//         obj2[key] = obj[key];
//     } 
//      return obj2
// }

// let x = myfunction(obj1)
// x.name = 'zzz';
// console.log(obj1)

// let arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
// Գտնել ամենահաճախ հանդիպող անդամը


let myArr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
function myFunction(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] += 1;
        } else {
            obj[arr[i]] = 1
        }
    }
    return obj;
}

function createPersonObject(firstName, lastName, age) {
    const obj = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        fullName: function() {
            return firstName + ' ' + lastName;
        }()
    }
    return obj;
}

const person1 = createPersonObject('John', 'Doe', 30);
// console.log(person1)

function addUserColor(obj, color) {
    obj.favoriteColor = color;
}

// addUserColor(person1, 'red');
// console.log(person1);

const users = [
    {
        id: 1,
        name: "John",
        lastName: "Doe",
        age: 20
    },
    {
        id: 2,
        name: "Joe",
        lastName: "Tribiano",
        age: 22
    },
    {
        id: 3,
        name: "Chandler",
        lastName: "Bing",
        age: 23
    },
    {
        id: 4,
        name: "Ross",
        lastName: "Geller",
        age: 25
    },
    {
        id: 5,
        name: "Monica",
        lastName: "Geller",
        age: 20
    },
    {
        id: 6,
        name: "Rachel",
        lastName: "Grin",
        age: 20
    },
]


function getById(num) {
    return users.find(function(user)
   {
       return user.id===num
   })
   

    
}
// console.log(getById(2))