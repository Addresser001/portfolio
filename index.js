
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";


  if(document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    document.getElementById("about_section").className ="about-out";

  }

  if(document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
    document.getElementById("project_out").className ="projectShow";

  }

  
}







// let about_text =document.getElementById('about-text');
// let about_button =document.getElementById('about-button');

// about_button.onclick = function(){
//     if(about_text.className =="about-close"){
//         about_text.className = 'about-open';
//         about_button.innerHTML = 'View less'
//     }else{
//         about_text.className = 'about-close';
//         about_button.innerHTML = 'View more'
//     }
// }




// window.onscroll= function(){showItems()}

// function showItems(){
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         document.getElementById("about_section").className ="about-out";

//     }
// }

