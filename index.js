
function randGen(max){
    const rand = Math.floor(Math.random() * max); // eventually figure out how to get length of data, so that I can change 17 with data.length;
    console.log(rand)
    return rand;
}

function fetchingQuote(rand){
    var quote;
    fetch("./book-quotes.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => quote = data[0].Quote); //YESSS IT WORKS
    console.log(quote);
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
newText.textContent = 'Amazing Quote: IDK how to continue yet, will come back to it later D:';




