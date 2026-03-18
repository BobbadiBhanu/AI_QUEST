// Sample motivational quotes
const quotes = [
    "Believe in yourself! Have faith in your abilities!",
    "Success is not the key to happiness. Happiness is the key to success.",
    "The only way to do great work is to love what you do.",
    "It always seems impossible until it's done.",
    "Don't watch the clock; do what it does. Keep going.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "Don't wait for opportunity. Create it.",
    "You are never too old to set another goal or to dream a new dream.",
    "The best way to predict the future is to create it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream big and dare to fail.",
    "Don’t stop when you’re tired. Stop when you’re done."
];

// Get elements
const quoteDisplay = document.getElementById('quoteText');
const generateQuoteBtn = document.getElementById('generateQuoteBtn');
const loadingSpinner = document.getElementById('loading');
const video = document.getElementById('inspiringVideo');
const message = document.querySelector('.message h2');

// Function to get a random quote
function getQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Show the loading spinner while generating the new quote
    loadingSpinner.style.display = 'block';

    // Hide the video and message while generating a new quote
    video.style.display = 'none';
    message.style.display = 'none';

    setTimeout(() => {
        // Add a fade-out effect before the new quote appears
        quoteDisplay.style.opacity = 0;
        setTimeout(() => {
            quoteDisplay.textContent = `"${randomQuote}"`;
            quoteDisplay.style.opacity = 1;
        }, 300); // Delay before quote appears (for smooth transition)

        // Show video and message after quote change
        video.style.display = 'block';
        message.style.display = 'block';

        // Hide the loading spinner after the quote is displayed
        loadingSpinner.style.display = 'none';
    }, 500);
}

// Event listener for button click
generateQuoteBtn.addEventListener('click', getQuote);

// Optionally, generate the first quote on page load
getQuote();
