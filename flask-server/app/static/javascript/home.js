
function setActiveNavLink(){
    // console.log('setting active item');
    var currentActive = document.getElementsByClassName('active');

    if (currentActive.length > 0 ){
        currentActive[0].classList.remove('active');
    }

    var path = window.location.pathname;

    if (path === '/' || path === '/feed/'){
        // homepage
        document.getElementById('home').classList.add('active');
    }
    else{
        document.getElementById(path.substr(1)).classList.add('active');
    }
}

// function setActiveItem(){
//     var currentActive = document.getElementsByClassName('active');
//     currentActive[0].classList.remove('active');
//     this.classList.add('active');
// }