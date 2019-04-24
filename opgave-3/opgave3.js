
document.addEventListener('DOMContentLoaded', (event)=>{


    let colorsBtn = document.querySelectorAll("#color-buttons button");

      colorsBtn.forEach(colorsBtnElement =>{
          colorsBtnElement.addEventListener('click', (event)=>{

            document.documentElement.style.setProperty("--chosen-color", 
            getComputedStyle(colorsBtnElement).backgroundColor)
          })
      })
     

    
})