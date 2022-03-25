
function showMessage(message) {
    const div = document.getElementById('myDiv');
    div.innerHTML = message;
}

// let i = 2;
// const interval = setInterval(function () {
//     i--;
//     showMessage(`${i}`)
//     if (i === 0) {
//         showMessage('<h1>barev</h1>')
//         clearInterval(interval)
//     }
// // }, 1000)

// const span = document.querySelector('#mySpan');
// const div = document.getElementById('myDiv');

// let newSpan = document.createElement('span');
// newSpan.innerText = ' new span';
// newSpan.id = 'newSpan';
// newSpan.style.color = 'red';
// console.log(newSpan);
// div.appendChild(newSpan)
// newSpan = document.getElementById('newSpan');
// const span2 = document.createElement('span');
// span2.innerText = '2nd span'
// div.insertBefore(span2, newSpan)
const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
];


const sizes = [
    [100, 100],
    [56, 78],
    [50, 250],
    [40, 45],
    [120, 100],
    [56, 22],
    [130, 250],
    [40, 90],
    [100, 500],
    [18, 78],
    [300, 250],
    [40, 400],
    [220, 300],
    [86, 90],
    [270, 250],
    [90, 90],
    [10, 12],
    [98, 67],
    [520, 150],
    [40, 40],
]

function myFunction() {
    for (let i = 0; i < colorArray.length; i++) {
        let newDiv = document.createElement("div")
        newDiv.style.backgroundColor = colorArray[i]
        newDiv.style.width = sizes[i][0] + "px"
        newDiv.style.height = sizes[i][1] + "px"
        newDiv.style.float = "left"
        document.querySelector("body").appendChild(newDiv)
    }

}
//myFunction()

function showAllDiv() {
    let str = '';
    for (let i = 0; i < colorArray.length; i++) {
        document.body.style.display = 'flex'
        str += `<div style="background-color: ${colorArray[i]}; width:${sizes[i][0]}px; height:${sizes[i][1]}px;"></div>`
    }
    document.body.innerHTML = str;


}
// showAllDiv()

let numberX = (num, n) => [num ** n];

// console.log(numberX(2,2));

let myfunc = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i
        }
    }
    return 'element not found'
}
// [4,7,0,2].findIndex(function(el) {
//     return el === 7;
// })
// const i = [4,7,0,2].findIndex(el=>el===7)
// console.log(i)


// let x = 1;
// let y = 7;

// x === 0 ? y === 7 ? alert('07') : alert('0') : alert('none')

// if (x === 0) {
//     if(y===7) {
//         alert('07')
//     } else {
//         alert('0')
//     }
// } else {
//     alert('none')
// }

// let div = document.querySelector('#myDiv');

// setTimeout(()=>{
//     div.classList.remove('bold')
// }, 2000)

// setTimeout(()=>{
//     div.classList.remove('size-xl')
// }, 4000)

// setTimeout(()=>{
//     div.classList.remove('color-red')
// }, 6000)

// setTimeout(()=>{
//     div.classList.add('bold')
// }, 8000)

// setTimeout(()=>{
//     div.classList.add('color-red')
// }, 10000)

// setTimeout(()=>{
//     div.classList.add('size-xl')
// }, 12000)

// setTimeout(()=>{
//     div.classList.toggle('transparent')
// }, 3000)

// setTimeout(()=>{
//     div.classList.toggle('transparent')
// }, 4000)

function famousUserText(obj) {
    let birthOfDate = new Date().getFullYear();
    let str = `${obj.name} ${obj.lastName} is famous actor born in ${birthOfDate - obj.age}`;
    document.querySelector('#person').innerHTML = str;
}

function notFamousUserText() {
    let str = `This user is not famous`;
    document.querySelector('#person').innerHTML = str;
}



// const user3 = users.find(user => user.id === 1);

// user3.isFamous === true ? famousUserText(user3) : notFamousUserText();

// function getDays(startDate, endDate) {
//     let start = new Date(startDate)
//     let end = new Date(endDate)
//     let dayCount = 0;
//     while (end > start) {
//         dayCount++
//         start.setDate(start.getDate() + 1)
//     }

//     return dayCount
// }
// console.log(getDays('2022.01.01', '2022.03.13'));
// let thisYear = new Date(1994).getFullYear();
// console.log(getDays(`${thisYear}.01.06`, new Date()));

// const clockSpan = document.getElementById('clock');
// let date = new Date();
// clockSpan.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
// setInterval(() => {
//     let date = new Date();
//     clockSpan.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
// }, 1000)



// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let arr2 = [1, 2, 3]
function shuffle(arr) {
    // 0 1 2
    let newArr = [];
    let usedIndexes = [];
    while (newArr.length !== arr.length) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        if (!usedIndexes.includes(randomIndex)) {
            newArr.push(arr[randomIndex]);
            usedIndexes.push(randomIndex);
        }
    }
    console.log(newArr)
}

// shuffle(arr2)

// function myfunc1(arr){
//     let x = '<hjsdfjhsdjd5654jdjdjn,:'
//     let str = ''
//     for(let i =0;i<arr;i++){
//         str+=x.charAt(Math.random() * x.length)
//     }
//     return str
// }
// console.log(myfunc1(8))



// function myNewFunc() {
//   let str = '';
//   let min = 33;
//   let max = 126;
//   for (let i = 0; i < 8; i++) {

//    str += String.fromCharCode(Math.floor(Math.random()*(max- min)+min))

//   }

//     console.log(str)
// }

// myNewFunc()

// const button = document.getElementById('buttonToClickOn')
// button.addEventListener('click', (event) => {
//     console.log(event)
// })

// let square = document.querySelector('.runningDiv');

// document.querySelector('.runningDiv').addEventListener('mousemove', () => {

//     let top = Math.floor(Math.random() * 100)
//     let left = Math.floor(Math.random() * 100)
//     square.style.top = top + '%'
//     square.style.left = left + '%'
// })

// document.getElementById('textInput').addEventListener('input', ()=>{
//     console.log('input')
// })
// document.getElementById('textInput').addEventListener('change', (event)=>{
//     console.log('change', event.target.value)

// })

// let arr = [1,2,3,4,5,6,7,8];
// let arr3 = [];
// arr.forEach((tiv, index)=>{
//     console.log(tiv, index)
// })

let nestedObjects = [
    {
        name: 'Employee',
        children: [
            {
                name: 'Vacation',
            },
            {
                name: 'Salary'
            },
            {
                name: 'Positions',
                children: [
                    {
                        name: 'Management',
                    },
                    {
                        name: 'Developement',
                        children: [
                            {
                                name: 'Mobile'
                            },
                            {
                                name: 'Web'
                            }
                        ]
                    },
                ]
            }
        ]
    },
    {
        name: 'Dashboard',
    },
    {
        name: 'Documents'
    },
    {
        name: 'Settings',
        children: [
            {
                name: 'Company details'
            },
            {
                name: 'User details'
            }
        ]
    }
]

function factorial(num) {
    if (num <= 0) {
        return 1
    } else {
        return (num * factorial(num - 1))
    }
}
// console.log(factorial(4))

function displayName(array) {
    let ul = document.createElement('ul');
    array.forEach(el => {
        let li = document.createElement('li');
        ul.appendChild(li)
        if (el.children) {
            li.innerHTML = el.name
            li.appendChild(displayName(el.children))
        } else {
            li.innerHTML = el.name
        }
    })
    return ul;
}
// document.body.appendChild(displayName(nestedObjects))
function createChessBoard() {
    let evenColor;
    let oddColor;
    for (let i = 0; i < 9; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        if (i % 2 === 0) {
            evenColor = 'white';
            oddColor = 'black';
        } else {
            evenColor = 'black';
            oddColor = 'white';
        }
        for (let j = 0; j < 9; j++) {
            let col = document.createElement('div');
            col.classList.add('col');
            if (i === 0 && j !== 0) {
                col.innerHTML = String.fromCharCode(96 + j)
            }
            if (i !== 0 && j == 0) {
                col.innerHTML = i
            }
            if (i > 0 && j > 0) {
                if (j % 2 !== 0) {
                    col.classList.add(evenColor)
                } else {
                    col.classList.add(oddColor)
                }
            }

            row.appendChild(col)
        }
        document.getElementById('chessBoard').appendChild(row)
    }
}
createChessBoard();