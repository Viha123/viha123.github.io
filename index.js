
function randGen(max){
    const rand = Math.floor(Math.random() * max); // eventually figure out how to get length of data, so that I can change 17 with data.length;
    console.log(rand)
    return rand;
}

function fetchingQuote(rand){
    fetch("./book-quotes.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data[rand].Quote)); //YESSS IT WORKS

}
function fetchingAuthor(rand){
    fetch("./book-quotes.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data[rand].Author));
}
const sectionRef = document.querySelector('section');
const newText = document.createElement('h2');
sectionRef.appendChild(newText);
newText.textContent = "Amazing quote";



