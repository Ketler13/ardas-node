const io = require("socket.io-client");

const socket = io("/", { transports: ["websocket"] });

const sendButton = document.querySelector(".send-button");
const messageInput = document.querySelector(".message-input");
const messagesList = document.querySelector(".messages-list");

socket.on("connect", () => {
  socket.emit("authentication", { username: "John", password: "secret" });
  socket.on("authenticated", () => {
    socket.on("message", data => {
      const messageEl = document.createElement("li");
      messageEl.innerHTML = data;
      messagesList.appendChild(messageEl);
    });

    sendButton.addEventListener("click", () =>
      socket.emit("message", messageInput.value)
    );
  });
  socket.on("unauthorized", () => console.log("Unauthorized"));
});
