let timeout = document.getElementById('timeout-div');
let time = document.getElementById('timeout');

time.addEventListener('click', () => {
    setTimeout(() => {
        let newDiv = document.createElement('div');
        newDiv.style.marginTop = '2vh';
        newDiv.style.height = '5vh';
        newDiv.innerHTML = "Mon timout vient de créer ce div 2 secondes après le click sur le bouton !";
        timeout.appendChild(newDiv);
    }, 2000)
})

let inter = document.getElementById('interval-div');
let start = document.getElementById('interval-start');
let stop = document.getElementById('interval-stop');
let t = 0;
let newDiv = document.createElement('div');

start.addEventListener('click', function () {
    let count = setInterval(function () {
        if(t < 60){
            newDiv.innerHTML = t.toString();
            inter.appendChild(newDiv);
            t ++;
        }
        stop.addEventListener('click', () => {
            clearInterval(count);
        })
    }, 1000);
})

