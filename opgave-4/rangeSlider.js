
let rangeSlider = document.querySelector("#rangeSlider");

let rangeSliderOutput = document.querySelector("#rangeValue");

rangeSliderOutput.innerHTML= rangeSlider.value;

rangeSlider.oninput = function(){
    rangeSliderOutput.innerHTML = this.value;
}

