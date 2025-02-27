// script.js
const welcomeText = document.getElementById('welcome-text');
const welcomeScreen = document.getElementById('welcome-screen');
const enterButton = document.getElementById('enter-button');
const portfolioContent = document.getElementById('portfolio-content');
const doodleBoy = document.getElementById('doodle-boy');
const chatbotContainer = document.getElementById('chatbot-container');
const chatLog = document.getElementById('chat-log');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const folderNav = document.getElementById('folder-nav');
const contentSections = document.querySelectorAll('.content-section');

// Typing Effect
const textToType = "Welcome, To My World";
let i = 0;

function typeWriter() {
    if (i < textToType.length) {
        welcomeText.textContent += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, 50); // Adjust speed here
    } else {
        // After typing, add a class to trigger the transition
        setTimeout(() => {
            welcomeScreen.classList.add('transitioned');
        }, 500); // Delay before transition starts
    }
}

//Show the portfolio container
function showPortfolio() {
    welcomeScreen.classList.add('hidden');
    portfolioContent.classList.remove('hidden');
    document.body.style.overflow = 'auto'; // Enable scrolling
}

// Function to display a specific content section
function showSection(sectionId) {
    contentSections.forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
}

// Function to handle chatbot interactions (PLACEHOLDER)
function handleChatbot(message) {
    // ********************************************************************
    // **  AI INTEGRATION POINT  **
    // This is where you would integrate your AI logic.
    // 1. Send the 'message' to your AI.
    // 2. Get the AI's response.
    // 3. Based on the response, decide:
    //    -  What to display in the chat log.
    //    -  Whether to redirect to a specific content section.
    // ********************************************************************

    let aiResponse = "I'm just a placeholder AI for now.  Tell me more!"; // Default response

    //Example: If user asks about projects, redirect to the projects section
    if (message.toLowerCase().includes("projects")) {
        showSection("projects");
        aiResponse = "Redirecting you to my projects...";
    }

    // Add AI response to chat log
    const responseElement = document.createElement('p');
    responseElement.textContent = "AI: " + aiResponse;
    chatLog.appendChild(responseElement);
    chatLog.scrollTop = chatLog.scrollHeight; // Scroll to bottom
}

// Event Listeners
enterButton.addEventListener('click', showPortfolio);

doodleBoy.addEventListener('click', () => {
    chatbotContainer.classList.toggle('hidden');
});

chatSend.addEventListener('click', () => {
    const message = chatInput.value;
    if (message.trim() !== "") {
        // Add user message to chat log
        const messageElement = document.createElement('p');
        messageElement.textContent = "You: " + message;
        chatLog.appendChild(messageElement);
        chatLog.scrollTop = chatLog.scrollHeight; // Scroll to bottom
        chatInput.value = "";

        handleChatbot(message);
    }
});

folderNav.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const sectionId = event.target.dataset.section;
        showSection(sectionId);
    }
});

// Start the typing effect when the page loads
typeWriter();
