
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

const span = document.querySelector('#mySpan');
const div = document.getElementById('myDiv');

const newSpan = document.createElement('span');
newSpan.innerText = ' new span';
newSpan.id = 'newSpan';
newSpan.style.color = 'red';
console.log(newSpan);
div.appendChild(newSpan)
newSpan = document.getElementById('newSpan');
const span2 = document.createElement('span');
span2.innerText = '2nd span'
div.insertBefore(span2, newSpan)
