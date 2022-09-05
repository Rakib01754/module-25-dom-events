// option -2 

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option -3 


const purpleBg = document.getElementById('make-purple');
purpleBg.onclick = makePurple;

function makePurple() {
    document.body.style.backgroundColor = 'purple'
}

// option 4 

const aquaBg = document.getElementById('make-tomato');
aquaBg.onclick = function () {
    document.body.style.backgroundColor = 'tomato'
}

// option 5
document.getElementById('make-green').addEventListener('click', makeGreen)

function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

// Option 6\

document.getElementById('make-pink').addEventListener('click', function () {
    document.body.style.backgroundColor = 'pink'
})




