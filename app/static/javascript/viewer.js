var modal = document.getElementById('image-viewer');

var imgs = document.getElementsByClassName('thumbnail');

var modalImage = document.getElementById('modal-image');
var caption = document.getElementById('caption');

for (img of imgs){
    img.onclick = function(){
        console.log('open image modal');
        
        // disable page scrolling
        document.getElementsByTagName('html')[0].classList.add('is-clipped');
       
        //make modal visible
        modal.className = modal.className + ' is-active';
        modalImage.src = this.src;
        caption.innerText = this.alt;

        // enable blur
        document.getElementById('body-container').classList.add('blur');
    }
}

// close function

function closeModal(){
    modal.className = 'modal';
    document.getElementsByTagName('html')[0].classList.remove('is-clipped');
    console.log('close');

    // disable blur
    document.getElementById('body-container').classList.remove('blur');
}

document.getElementById('close-button').onclick = closeModal;
document.getElementById('modal-background').onclick = closeModal;


// var close = document.getElementById('close-button');

// close.onclick = function(){
//     modal.style.display = "none";
// }
