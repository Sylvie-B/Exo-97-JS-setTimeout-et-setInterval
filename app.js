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

