// document.documentElement.style.setProperty("--main-bt-color","blue");






let col = getComputedStyle(document.documentElement).getPropertyValue("--main-bt-color");
console.log(col)