const dino = document.getElementById("dino");
const ktus = document.getElementById("ktus");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump() {
    if (dino.classList != 'jump') {
    dino.classList.add("jump")
}
setTimeout(function() {
    dino.classList.remove('jump')
}, 300)
}

let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let ktusleft = parseInt(window.getComputedStyle(ktus).getPropertyValue('left'));

    if (ktusleft < 50 && ktusleft > 0 && dinoTop >= 140) {
        alert('Вы проиграли, нажмите "OK" для рестарта');
    }
}, 10)


var counterVal = 0;

function incrementClick() {
    updateDisplay(++counterVal);
}

function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}

