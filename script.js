// script.js

function openBrowser(browser) {
    let message;

    switch (browser) {
        case 'chrome':
            message = "We don't have that.";
            break;
        case 'firefox':
            message = "Sorry, but we cannot access that.";
            break;
        case 'tor':
            message = "Got it! Launching Tor and connecting. This may take a while...";
            // Additional code to launch Tor can be added here
            break;
        case 'hackweb':
            message = "Launching Hack Web.";
            // Additional code for Hack Web can be added here
            break;
        default:
            message = "Invalid browser selection.";
            break;
    }

    document.getElementById('browser-display').innerHTML = `<p>${message}</p>`;
}
