var modal = document.getElementById('image-viewer');

var imgs = document.getElementsByClassName('card-img-top');

var modalImage = document.getElementById('modal-image');

function openModal(img){
    console.log('open image modal');

    // disable page scrolling
    document.getElementsByTagName('html')[0].classList.add('overflow-hidden');
   
    //make modal visible
    modal.classList.add('d-flex');
    modalImage.src = img.src;
    // caption.innerText = this.alt;

    // enable blur
    document.getElementById('comic-container').classList.add('blur');

    // set card info
    setImageCardInfo(img); 
}

// close function

function closeModal(){
    modal.classList.remove('d-flex');
    document.getElementsByTagName('html')[0].classList.remove('overflow-hidden');
    console.log('close');

    // disable blur
    document.getElementById('comic-container').classList.remove('blur');
}

// document.getElementById('close-button').onclick = closeModal;
// document.getElementById('modal-background').onclick = closeModal;


// Info card fucntion
function setImageCardInfo(img){
    var comicName = document.getElementById('comic-name');
    var comicTitle = document.getElementById('comic-title');
    var comicDesc = document.getElementById('comic-description');

    // TODO: change this hack to proper REST api alternative
    // comicName.innerText = this.src.split('/')[2].split('.')[0];
    // var info = this.alt.split('|');
    comicName.innerText = img.alt;
    // comicDesc.innerText = info[1];

}

// var close = document.getElementById('close-button');

// close.onclick = function(){
//     modal.style.display = "none";
// }
