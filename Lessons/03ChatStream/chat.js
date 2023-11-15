// function addMessageToDisplay(content) {
//     const messagesDiv = document.getElementById('messages');
//     const messageElement = document.createElement('div');
//     messageElement.textContent = content;
//     messagesDiv.appendChild(messageElement);
//     messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the latest message
// }

// function streamMessage() {
//     fetch('http://localhost:5000/stream')
//     .then(response => {
//         const reader = response.body.getReader();
//         function push() {
//             reader.read().then(({ done, value }) => {
//                 if (done) {
//                     console.log('Stream complete');
//                     return;
//                 }
//                 const text = new TextDecoder().decode(value);
//                 addMessageToDisplay(text);
//                 push();
//             });
//         }
//         push();
//     })
//     .catch(error => console.error('Error:', error));
// }

// // Bind the streamMessage function to the Enter key and the Send button
// document.getElementById('userInput').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         streamMessage();
//     }
// });

// document.querySelector('button').addEventListener('click', function () {
//     streamMessage();
// });
















// function addMessageToDisplay(content) {
//     const messagesDiv = document.getElementById('messages');
//     const messageElement = document.createElement('div');
//     messageElement.textContent = content;
//     messagesDiv.appendChild(messageElement);
//     messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the latest message
// }

// function streamMessage(userInput) {
//     fetch('http://localhost:5000/stream', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ message: userInput })
//     })
//     .then(response => {
//         const reader = response.body.getReader();
//         function push() {
//             reader.read().then(({ done, value }) => {
//                 if (done) {
//                     console.log('Stream complete');
//                     return;
//                 }
//                 const text = new TextDecoder().decode(value);
//                 addMessageToDisplay(JSON.parse(text).reply);
//                 push();
//             });
//         }
//         push();
//     })
//     .catch(error => console.error('Error:', error));
// }

// document.getElementById('userInput').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         streamMessage(this.value);
//         this.value = '';  // Clear the input field
//     }
// });

// document.querySelector('button').addEventListener('click', function () {
//     const userInputField = document.getElementById('userInput');
//     streamMessage(userInputField.value);
//     userInputField.value = '';  // Clear the input field
// });

















function addMessageToDisplay(content) {
    const messagesDiv = document.getElementById('messages');
    // Check if the last message element exists
    let lastMessageElement = messagesDiv.lastElementChild;

    // If it doesn't exist or if it's not a 'span', create a new one
    if (!lastMessageElement || lastMessageElement.tagName !== 'SPAN') {
        lastMessageElement = document.createElement('span');
        messagesDiv.appendChild(lastMessageElement);
    }

    // Append the new content to the last message element
    lastMessageElement.textContent += content + " "; // Add a space for separation

    // Scroll to the latest message
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
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
            function push() {
                reader.read().then(({ done, value }) => {
                    if (done) {
                        console.log('Stream complete');
                        return;
                    }
                    const text = new TextDecoder().decode(value);
                    addMessageToDisplay(JSON.parse(text).reply);
                    push();
                });
            }
            push();
        })
        .catch(error => console.error('Error:', error));
    }
    
    document.getElementById('userInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            streamMessage(this.value);
            this.value = '';  // Clear the input field
        }
    });
    
    document.querySelector('button').addEventListener('click', function () {
        const userInputField = document.getElementById('userInput');
        streamMessage(userInputField.value);
        userInputField.value = '';  // Clear the input field
    });
    
    