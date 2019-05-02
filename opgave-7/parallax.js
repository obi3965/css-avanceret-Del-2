let parallaxEffect = document.querySelector('#parallax');

//we can add our scroll event on our window object
window.addEventListener('scroll', function(){

    let speed = 0.3;
    //here we can see how much the user scrolls to the top
    let offset = window.pageYOffset;
    console.log('Offset:' + offset);
    console.log('offset * 0.7' + offset * 0.7)
    parallaxEffect.style.backgroundPositionY = offset * (1 - speed) + "px";
    
})


function Scroll(){
    let top = document.querySelector('.navbar');
    let yPos = window.pageYOffset;

    if(yPos > 476){
        top.style.height = "70px";
    }else{
        top.style.height = "150px";
    }
    console.log(yPos)
}

window.addEventListener("scroll", Scroll);