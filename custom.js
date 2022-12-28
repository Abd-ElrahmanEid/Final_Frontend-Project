//---------------------------------Counter-------------------------------------------------------------------------------------------------

let number = 0 
let counter = document.querySelector("#number1")

let interval = setInterval(function(){
    number++ 
    counter.innerHTML = number

    if(number == 1648){
        clearInterval(interval)
    }
});




//---------------------------------Scroll button---------------------------------------------------------------------------------------------------

let hide = document.querySelector(".hide")
let links = document.querySelectorAll("div ul li a")



window.onscroll = function() {

    if (window.scrollY > 500){
        hide.style.display = 'block'
    }
    else {
        hide.style.display = 'none'
    }

//----------------------------------------Change navbar color-------------------------------------------------------------------------------



    if (window.scrollY >= 0 && window.scrollY < 250 ){
        links[0].style.color = 'crimson'
    }
    else {
        links[0].style.color = 'black'
    }

    if (window.scrollY >= 250 && window.scrollY < 1100 ){
        links[1].style.color = 'crimson'
    }
    else {
        links[1].style.color = 'black'
    }


    if (window.scrollY >= 1100 && window.scrollY < 3000 ){
        links[2].style.color = 'crimson'
    }
    else {
        links[2].style.color = 'black'
    }


    if (window.scrollY >= 3000 && window.scrollY < 5350 ){
        links[3].style.color = 'crimson'
    }
    else {
        links[3].style.color = 'black'
    }


    if (window.scrollY >= 5350 && window.scrollY < 7050 ){
        links[4].style.color = 'crimson'
    }
    else {
        links[4].style.color = 'black'
    }



    if (window.scrollY >= 7050 && window.scrollY < 8200 ){
        links[5].style.color = 'crimson'
    }
    else {
        links[5].style.color = 'black'
    }


    if (window.scrollY >= 8200 ){
        links[6].style.color = 'crimson'
    }
    else {
        links[6].style.color = 'black'
    }


};



//--------------------------------------------------Show navbar----------------------------------------------------------------------

let zorar = document.querySelector("#zorar")

let divaya = document.querySelector("#divaya")

zorar.addEventListener("click" , function(){

    if(divaya.style.display == "none"){
        divaya.style.display = "block"
    } else{
        divaya.style.display = "none"
    }
});


//--------------------------------------------------hide navbar----------------------------------------------------------------------

let circle = document.querySelector("#circle")

circle.addEventListener("click" , function(){

    if(divaya.style.display == "none"){
        divaya.style.display = "block"
    } else{
        divaya.style.display = "none"
    }

})


//-----------------------------------------------------

let ancors = document.querySelectorAll("#divaya ul li a")

ancors[0].addEventListener("click" , function(){

    if(divaya.style.display == "none"){
        divaya.style.display = "block"
    } else{
        divaya.style.display = "none"
    }

})


ancors[1].addEventListener("click" , function(){

    if(divaya.style.display == "none"){
        divaya.style.display = "block"
    } else{
        divaya.style.display = "none"
    }

})


ancors[2].addEventListener("click" , function(){

    if(divaya.style.display == "none"){
        divaya.style.display = "block"
    } else{
        divaya.style.display = "none"
    }

})


ancors[3].addEventListener("click" , function(){

    if(divaya.style.display == "none"){
        divaya.style.display = "block"
    } else{
        divaya.style.display = "none"
    }

})



ancors[4].addEventListener("click" , function(){

    if(divaya.style.display == "none"){
        divaya.style.display = "block"
    } else{
        divaya.style.display = "none"
    }

})




ancors[5].addEventListener("click" , function(){

    if(divaya.style.display == "none"){
        divaya.style.display = "block"
    } else{
        divaya.style.display = "none"
    }

})




ancors[6].addEventListener("click" , function(){

    if(divaya.style.display == "none"){
        divaya.style.display = "block"
    } else{
        divaya.style.display = "none"
    }

})



let dont = document.querySelector("#do")

dont.addEventListener("click" , function(){

    if(divaya.style.display == "none"){
        divaya.style.display = "block"
    } else{
        divaya.style.display = "none"
    }

})








