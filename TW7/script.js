//////////// First Task
// let btn = document.getElementById('btn');
//         let container = document.getElementById('container');

//         btn.addEventListener("click", () => {
//             let h1 = document.createElement('h1');
//             changeTime()
//             h1.textContent = time;
//             h1.setAttribute('class', 'heading');
//             container.appendChild(h1);
//             changeBodyColor()
//         })

function getRandomColor() {
    return Math.trunc((Math.random() * 256))
}
function changeBodyColor() {
    setInterval(() => {
        document.body.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
    }, 1000);
}


// let date;
// let time;

// function changeTime() {
//     setInterval(() => {
//         date = new Date();
//         time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
//     }, 1000)
    
// }

//////////// Second Task
let time = document.getElementById("time");

function changeTime() {
    let date = new Date();
    let newTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    time.textContent = newTime;
    changeBodyColor()
    setInterval(changeTime, 1000);
}

window.onload = changeTime;
