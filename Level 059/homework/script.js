let paragraphElement = document.getElementById("myParagraph");

let paragraphText = paragraphElement.textContent;

alert(paragraphText);


let styledParagraph = document.getElementById("styledParagraph");

let paragraphStyles = {
    color: styledParagraph.style.color,
    "bg-color": styledParagraph.style.backgroundColor,
    "font-weight": styledParagraph.style.fontWeight,
    "font-size": styledParagraph.style.fontSize
};

console.log(paragraphStyles);

let divBlock = document.getElementById("myDiv");


divBlock.style.display = "block";            
divBlock.style.backgroundColor = "lightgreen"; 
divBlock.style.padding = "10px";             
divBlock.style.fontSize = "40px";