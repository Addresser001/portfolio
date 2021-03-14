// let nav_button = document.getElementById('nav-button');
// let nav_Toggle_icon1 = document.getElementById('nav-icon-1');
// let nav_Toggle_icon2 = document.getElementById('nav-icon-2');
// nav_Toggle_icon2.style.display="none"
// nav_button.onclick = function(){
//     if(nav_Toggle_icon1.className =="navbar-toggler-icon"){
//         nav_Toggle_icon1.style.display="none"
//         nav_Toggle_icon2.style.display="block"
//         nav_Toggle_icon1.className ="navigation-icon-2"

//     }else {
//         nav_Toggle_icon2.style.display="none"
//         nav_Toggle_icon1.style.display="block"
//         nav_Toggle_icon1.className ="navbar-toggler-icon"
//     }
// }


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}







let about_text =document.getElementById('about-text');
let about_button =document.getElementById('about-button');

about_button.onclick = function(){
    if(about_text.className =="about-close"){
        about_text.className = 'about-open';
        about_button.innerHTML = 'View less'
    }else{
        about_text.className = 'about-close';
        about_button.innerHTML = 'View more'
    }
}



let form = document.getElementById('form');
let contact_me_button = document.getElementById('contact-me-button');

contact_me_button.onclick = function(){
    if(form.className =="form-hide"){
        form.className ="form-show";
    }else{
        form.className ="form-hide";
    }
}

