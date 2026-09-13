const button = document.getElementById("btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

button.addEventListener("click", getQuote);

async function getQuote() {

    try {
        const response = await fetch(
            "https://dummyjson.com/quotes/random"
        );

        const data = await response.json();

        quote.textContent = `"${data.quote}"`;
        author.textContent = `— ${data.author}`;

    } catch (error) {
        quote.textContent = "Something went wrong!";
        console.log(error);
    }
}