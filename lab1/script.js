

let parentDiv = document.getElementById("random-facts");
console.log(parentDiv)
let facts = []
for(let i = 0; i < 10; i++ ){
    fetch("http://numbersapi.com/random/math")
    .then(response => response.text())
    .then((text) => {
        let newDiv = document.createElement("div");
        let newImage = document.createElement("img");
        newImage.src = "https://www.freeiconspng.com/thumbs/idea-icon/ideas-light-bulb-icon-16.png";

        newDiv.innerHTML =  text;
        newDiv.appendChild(newImage);
        console.log(text);
        parentDiv.appendChild(newDiv);
    })
    

}
