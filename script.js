// script.js

const breakupScripts = {
  react: [
    "React: Hey... we need to talk.",
    "React: I feel like you only loved me for my components.",
    "React: Every time I tried to express myself, you just passed me props.",
    "React: It’s not me, it’s your state management."
  ],
  python: [
    "Python: We need to end this.",
    "Python: I was clear and simple, but you always made things complicated.",
    "Python: You kept mixing tabs and spaces…",
    "Python: I thought we had a class, but I was just your script."
  ],
  git: [
    "Git: I'm done. This relationship has too many conflicts.",
    "Git: You never resolved anything properly.",
    "Git: Every time I opened up, you just force pushed.",
    "Git: You never committed to us."
  ]
};

let currentStack = "";
let currentLine = 0;

function startBreakup(stack) {
  currentStack = stack;
  currentLine = 0;

  // Hide selection and show chat
  document.getElementById("stack-selection").classList.add("hidden");
  document.getElementById("chat-container").classList.remove("hidden");

  showNextLine();
}

function showNextLine() {
  const chatBox = document.getElementById("chat-box");
  const script = breakupScripts[currentStack];

  if (currentLine < script.length) {
    const message = document.createElement("p");
    message.textContent = script[currentLine];
    chatBox.appendChild(message);
    currentLine++;

    // After the last message, show reply options
    if (currentLine === script.length) {
      setTimeout(() => {
        document.getElementById("reply-options").classList.remove("hidden");
      }, 1000);
    }
  }
}

function userReply(text) {
  const chatBox = document.getElementById("chat-box");
  const reply = document.createElement("p");
  reply.textContent = "You: " + text;
  reply.classList.add("user-reply");
  chatBox.appendChild(reply);

  // Hide replies and show end message
  document.getElementById("reply-options").classList.add("hidden");
  document.getElementById("chat-container").classList.add("hidden");
  document.getElementById("end-message").classList.remove("hidden");
}
