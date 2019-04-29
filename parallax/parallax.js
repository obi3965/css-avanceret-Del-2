let parallaxEffect = document.querySelector('#parallax');

//we can add our scroll event on our window object
window.addEventListener('scroll', function(){

    //here we can see how much the user scrolls to the top
    let offset = window.pageYOffset;
    console.log('Offset:' + offset);
    console.log('offset * 0.7' + offset * 0.7)
    parallaxEffect.style.backgroundPositionY = offset * 0.7 + "px";
    
})