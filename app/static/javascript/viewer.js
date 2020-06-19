var modal = document.getElementById('image-viewer');

var imgs = document.getElementsByClassName('card-img-top');

var modalImage = document.getElementById('modal-image');
var caption = document.getElementById('caption');

for (img of imgs){
    img.onclick = function(){
        console.log('open image modal');
        
        // disable page scrolling
        document.getElementsByTagName('html')[0].classList.add('overflow-hidden');
       
        //make modal visible
        modal.classList.add('d-flex');
        modalImage.src = this.src;
        // caption.innerText = this.alt;

        // enable blur
        document.getElementById('comic-container').classList.add('blur');
    }
}

// close function

function closeModal(){
    modal.classList.remove('d-flex');
    document.getElementsByTagName('html')[0].classList.remove('overflow-hidden');
    console.log('close');

    // disable blur
    document.getElementById('comic-container').classList.remove('blur');
}

document.getElementById('close-button').onclick = closeModal;
document.getElementById('modal-background').onclick = closeModal;


// var close = document.getElementById('close-button');

// close.onclick = function(){
//     modal.style.display = "none";
// }
