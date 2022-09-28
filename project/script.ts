

let parentDiv: HTMLElement | null = document.getElementById("random-facts");

for(let i = 0; i < 10; i++ ){
    fetch("http://numbersapi.com/random/math")
    .then((response: Response) => response.text())
    .then((text: string) => {
        let newDiv: HTMLDivElement = document.createElement("div");
        let newImage: HTMLImageElement = document.createElement("img");
        
        newImage.src = "https://www.freeiconspng.com/thumbs/idea-icon/ideas-light-bulb-icon-16.png";

        newDiv.innerHTML =  text;
        newDiv.appendChild(newImage);
        parentDiv?.appendChild(newDiv);
    })
    

}
