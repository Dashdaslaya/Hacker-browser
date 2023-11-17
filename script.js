// script.js

let isHosting = false;

function openBrowser(browser) {
    let content;

    switch (browser) {
        case 'chrome':
            content = "We don't have that.";
            break;
        case 'firefox':
            content = "Sorry, but we cannot access that.";
            break;
        case 'tor':
            content = "Got it! Launching Tor and connecting. This may take a while...";
            // Additional code to launch Tor can be added here
            break;
        case 'hackweb':
            content = `
                <h2>Welcome to Hack Web</h2>
                <p>Please sign in or create an account:</p>
                <form id="hackweb-form">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required>

                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>

                    <button type="button" onclick="signIn()">Sign In</button>
                    <button type="button" onclick="createAccount()">Create Account</button>
                    
                    <button type="button" onclick="toggleHosting()">Toggle Hosting</button>
                    ${isHosting ? '<p>Hosting at: <strong>http://localhost:3000</strong></p>' : ''}
                </form>
            `;
            break;
        default:
            content = "Invalid browser selection.";
            break;
    }

    document.getElementById('browser-display').innerHTML = content;
}

function toggleHosting() {
    isHosting = !isHosting;
    alert(isHosting ? "Hosting started at http://localhost:3000" : "Hosting stopped");
}

function signIn() {
    // Add magical code for user sign-in
    alert("Signing in! (This is where the magic happens)");
}

function createAccount() {
    // Add magical code for account creation
    alert("Creating account! (More magic)");
}

