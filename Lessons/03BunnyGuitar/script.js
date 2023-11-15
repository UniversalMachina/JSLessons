// function appendMessage(messageText, sender) {
//     var chatBox = document.getElementById('chat-box');
//     var messageDiv = document.createElement('div');
//     messageDiv.classList.add('message', sender);
    
//     // if (sender === 'bot') {
//     //     // Add icon to the bot message bubble
//     //     var icon = document.createElement('img');
//     //     icon.src = 'BunnyGuitar.png'; // Path to the bunny icon
//     //     icon.classList.add('message-icon');
//     //     messageDiv.appendChild(icon);
//     // }

//     var textNode = document.createTextNode(messageText);
//     messageDiv.appendChild(textNode);

//     chatBox.appendChild(messageDiv);
//     chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the new message
// }

// function sendMessage() {
//     var userInput = document.getElementById('user-input');
//     var message = userInput.value.trim();
//     userInput.value = '';
    
//     if (message) {
//         // Append user message
//         appendMessage(message, 'user');
        
//         // Send the message to the Python server
//         fetch('http://localhost:5000/send_message', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ message: message }),
//         })
//         .then(response => response.json())
//         .then(data => {
//             // Append bot response
//             appendMessage(data.reply, 'bot');
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
//     }
// }

function appendMessage(messageText, sender) {
    var chatBox = document.getElementById('chat-box');
    var messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);

    var textNode = document.createTextNode(messageText);
    messageDiv.appendChild(textNode);

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the new message
}

function streamMessage(userInput) {
    fetch('http://localhost:5000/stream', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userInput })
    })
    .then(response => {
        const reader = response.body.getReader();
        let accumulatedText = '';
        let messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'bot');
        document.getElementById('chat-box').appendChild(messageDiv);

        function push() {
            reader.read().then(({ done, value }) => {
                if (done) {
                    console.log('Stream complete');
                    return;
                }

                const textChunk = new TextDecoder().decode(value);
                try {
                    const data = JSON.parse(textChunk);
                    if (data && data.reply) {
                        accumulatedText += data.reply;
                        messageDiv.textContent = accumulatedText;
                    }
                } catch (error) {
                    // This catch block can handle cases where partial JSON chunks are received
                    console.error('Error parsing JSON:', error);
                }

                document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight; // Scroll to the new message
                push();
            });
        }
        push();
    })
    .catch(error => console.error('Error:', error));
}

document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        appendMessage(this.value, 'user'); // Display user message
        streamMessage(this.value);
        this.value = '';  // Clear the input field
    }
});

document.querySelector('button').addEventListener('click', function () {
    const userInputField = document.getElementById('user-input');
    appendMessage(userInputField.value, 'user'); // Display user message
    streamMessage(userInputField.value);
    userInputField.value = '';  // Clear the input field
});
