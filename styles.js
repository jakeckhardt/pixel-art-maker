let boxContainer = document.getElementById("boxContainer");
let colorContainer = document.getElementsByClassName("color");
let colorBox = document.getElementById("colorBox");
let fillIn = document.getElementsByClassName("fillIn");
let currentColor = "rgb(0,0,0)";
let boxContainerSize = window.getComputedStyle(boxContainer, null).getPropertyValue("width");
boxContainerSize = parseFloat(boxContainerSize.slice(0,-2))-12;


function makeBoxes(num) {
  boxContainer.innerHTML = "";
  let third = num * .35;
  for (i=0; i<third; i++) {
    let divLine = document.createElement("div");
    divLine.className = "clearboth";
    divLine.innerHTML="";
    for(j=0; j<num; j++){
      let div = document.createElement("div");
      let size = boxContainerSize / num;
      size = size + "px";
      div.className = "fillIn";
      div.style.height = size;
      div.style.width = size;
      divLine.appendChild(div);
    }
    boxContainer.appendChild(divLine);
  }
}

boxContainer.addEventListener("click", (event) => {
  event.target.style.backgroundColor = currentColor;
  event.stopPropagation();
});


colorBox.addEventListener("click", (event) =>{
  currentColor = window.getComputedStyle(event.target, null).getPropertyValue("background-color");
  console.log(currentColor);
});


makeBoxes(120);
//console.log(boxContainer);