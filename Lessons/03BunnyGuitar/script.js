function appendMessage(messageText, sender) {
    var chatBox = document.getElementById('chat-box');
    var messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    
    // if (sender === 'bot') {
    //     // Add icon to the bot message bubble
    //     var icon = document.createElement('img');
    //     icon.src = 'BunnyGuitar.png'; // Path to the bunny icon
    //     icon.classList.add('message-icon');
    //     messageDiv.appendChild(icon);
    // }

    var textNode = document.createTextNode(messageText);
    messageDiv.appendChild(textNode);

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the new message
}

function sendMessage() {
    var userInput = document.getElementById('user-input');
    var message = userInput.value.trim();
    userInput.value = '';
    
    if (message) {
        // Append user message
        appendMessage(message, 'user');
        
        // Send the message to the Python server
        fetch('http://localhost:5000/send_message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: message }),
        })
        .then(response => response.json())
        .then(data => {
            // Append bot response
            appendMessage(data.reply, 'bot');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
}
