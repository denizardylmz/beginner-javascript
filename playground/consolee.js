


function buzzer() {
    console.log('Bzzzzzz!');
    
}

function sayHi() {
    console.log('Hii!');
}

function setImmediateInterval(funcToRun, ms) {
    
    funcToRun();
    return setInterval(funcToRun, ms);
}



const poopInterval = setInterval(function () {
    console.log('poop');
}, 1000);


// setTimeout(function () {
//     console.log('poop');
// }, 1000);
