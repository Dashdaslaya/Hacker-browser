// script.js

function openBrowser(browser) {
    // Magic happens here to load the chosen browser content dynamically
    // You can use AJAX, fetch, or other techniques to load content based on the browser chosen
    // For now, let's just display a message
    document.getElementById('browser-display').innerHTML = `<p>You've entered the magical realm of ${browser}!</p>`;
}
