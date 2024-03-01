const circle = document.querySelector('.circle');
const text = document.querySelector('.text'); 
var div = document.getElementById("myDiv");

let moveRight = false;

circle.addEventListener("click", function() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'black' ? 'white' : 'black';
    
    text.style.color = text.style.color === 'white' ? 'black' : 'white';
    if(!moveRight){
        div.style.transform = "translateX(100px)";
        }else{
        div.style.transform = "none";
        }
        moveRight = !moveRight;
});


    