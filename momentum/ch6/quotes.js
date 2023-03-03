const quotes = [
    {
        quote: "quote num 1",
        author: "auth 1"
    },
    {
        quote: "quote num 2",
        author: "auth 2"
    },
    {
        quote: "quote num 3",
        author: "auth 3"
    },
    {
        quote: "quote num 4",
        author: "auth 4"
    },
    {
        quote: "quote num 5",
        author: "auth 5"
    },
    {
        quote: "quote num 6",
        author: "auth 6"
    },
    {
        quote: "quote num 7",
        author: "auth 7"
    },
    {
        quote: "quote num 8",
        author: "auth 8"
    },
    {
        quote: "quote num 9",
        author: "auth 9"
    },
    {
        quote: "quote num 10",
        author: "auth 10"
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
