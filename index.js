function ageInDays(){
    let birthYear = prompt("What year were you born?");
    let ageInDays = (2022 - birthYear)* 365;
    let h1 = document.createElement("h1");
    let textAnswer = document.createTextNode("Your are "+ageInDays+" days old.");
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
}


function reset() {
    document.getElementById("ageInDays").remove();
}

function generateCat(){
    let image = document.createElement("img");
    let div = document.getElementById("flex-cat-gen");
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}