const buttons = document.querySelectorAll('button.buy');
const button = document.querySelector('button.buy');



function handleBuyButtonClick(event) {

    console.log('Button!');
    // event.stopPropagation();
}

// buttons.forEach(x => x.addEventListener('click', handleBuyButtonClick));
// window.addEventListener('click', x => {
//     console.log('Its window!!');
//     console.log(x.type);
//     x.stopPropagation();
//     console.log(x.bubbles);
// });


const photo = document.querySelector('.photo');


photo.addEventListener('click', function () { console.log(this); } );