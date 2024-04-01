
const form = document.querySelector('[name=signup]');
const input = form.querySelector('#name');
const photo = document.querySelector('.photo');
const googleLink = document.querySelector('#google');


function googleToLink(event) {
    console.log(event);
    if (input.value != 'Deniz') {
        alert('Opps, you are not Deniz');
        event.preventDefault();
    }
}

function hadlePhotoClick(event) {

    if (event.type === "click") {
        console.log("Its click");
    } else {
        console.log("Its different");
    }
}



photo.addEventListener('click', hadlePhotoClick);
photo.addEventListener('keyup', hadlePhotoClick);
// googleLink.addEventListener('click', googleToLink);

