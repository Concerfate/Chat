window.onload = function() {
  // Generate a random key
  var randomKey = Math.random().toString(36).substr(2, 8);
  document.getElementById("random-key-value").innerHTML = randomKey;

  // Connect to another key
  var connectBtn = document.getElementById("connect-btn");
  connectBtn.addEventListener("click", function() {
    var keyInput = document.getElementById("key-input").value;
    if (keyInput !== "" && keyInput !== randomKey) {
      // Clear message list
      var messageList = document.getElementById("message-list");
      messageList.innerHTML = "";

      // Enable message input and send button
      var messageInput = document.getElementById("message-input");
      var sendBtn = document.getElementById("send-btn");
      messageInput.disabled = false;
      sendBtn.disabled = false;

      // TODO: Connect to the other key
      console.log("Connected to key: " + keyInput);
    }
  });

  // Send a message
  var sendBtn = document.getElementById("send-btn");
  sendBtn.addEventListener("click", function() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value.trim();
    if (message !== "") {
      // Add message to message list
      var messageList = document.getElementById("message-list");
      var messageItem = document.createElement("div");
      messageItem.className = "message-item";
      messageItem.innerHTML = "<span>" + randomKey + ":</span> " + message;
      messageList.appendChild(messageItem);
      
      // Clear message input
      messageInput.value = "";
      
      // TODO: Send message to the other key
      console.log("Sent message: " + message);
    }
  });
};
