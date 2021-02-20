const colors = ["red", "green", "blue", "orange", "purple"];
const container = document.querySelector("section");
const h1 = document.querySelector("h1");
const span = document.querySelector("span");

for(let color of colors){
    const box = document.createElement("div");
    container.appendChild(box);
    box.style.backgroundColor = color;
    box.addEventListener("click", function(){
        h1.innerText = "Your selected color is: ";
        span.innerText = color;
        span.style.backgroundColor = color;
    })
}
