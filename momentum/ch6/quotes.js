const quotes = [
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", 
        author: "Winston Churchill"
    },
    {
        quote: "The best way to predict your future is to create it.", 
        author: "Abraham Lincoln"
    },
    {
        quote: "The only way to do great work is to love what you do.", 
        author: "Steve Jobs"
    },
    {
        quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", 
        author: "Maya Angelou"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.", 
        author: "Confucius"
    },
    {
        quote: "Don't let yesterday take up too much of today.", 
        author: "Will Rogers"
    },
    {
        quote: "Believe you can and you're halfway there.", 
        author: "Theodore Roosevelt"
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.", 
        author: "Thomas Edison"
    },
    {
        quote: "Life is a journey, and if you fall in love with the journey, you will be in love forever.", 
        author: "Peter Hagerty"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", 
        author: "Nelson Mandela"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
