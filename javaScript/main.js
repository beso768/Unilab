// loader 
var container = document.getElementById("loaderDiv") ;
var loader = document.getElementById("loader") ;
function load(){
    setTimeout(function (){
        loader.style.display = "none" ;
        container.style.display = "block" ;
    },2000)
}
window.addEventListener("load", load()) ;

// burger-icon 
var burger = document.getElementById("burgerIcon") ;
var menu = document.getElementById("burgerMenu");
burgerIcon.addEventListener("click" , function(){
    menu.style.left = "0" ;
})

var back = document.getElementById("Back") ;
back.addEventListener("click" , function(){
    menu.style.left = "-100%" ;
});

// redirect code
// var redirect = document.getElementById("redirect");

// redirect.addEventListener("click" , function(){
//     "document.location = "index2.html" ;"
// }); 