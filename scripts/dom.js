
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