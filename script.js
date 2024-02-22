window.addEventListener("scroll", function(){
    var header = document.querySelector(".main-nav");
    var subHeader = document.querySelector(".top-nav");
    header.classList.toggle("sticky-nav",window.scrollY > 40);
    subHeader.classList.toggle("hidden-nav",window.scrollY > 0);
});


const totop = document.querySelector(".scrolltop");

window.addEventListener("scroll", () => {
 if (window.pageYOffset > 370){
   totop.classList.add("active");
 }else{
   totop.classList.remove("active");
 }
});        

//   var screenWidth = window.innerWidth;
//   var brand = document.querySelector('navbar-brand')
//   var logo = document.querySelector('.logo2');
// console.log(screenWidth);

//   if (screenWidth <= 1300) {
       
//      logo.style.display='block';
//     // brand.classList.add('ms-0');
//       console.log('hello you1');

//     } else {
//       console.log("Hello");
//       logo.style.display='none';
//     }




var spinnerwrapper = document.querySelector('.spinner-wrapper');


// setTimeout (() => {
//     spinnerwrapper.style.opacity = '0';

// },1000);
window.addEventListener('load', () =>{
    spinnerwrapper.style.opacity = '0';

    setTimeout(() =>{
        spinnerwrapper.style.display = 'none';
    },1200)
});


