<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BreakUp Simulator – Code Edition</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>💔 BreakUp Simulator – Code Edition 💔</h1>
    <div id="stack-selection" class="section">
      <p>Select your ex-tech stack:</p>
      <div class="buttons">
        <button onclick="startBreakup('react')">⚛️ React</button>
        <button onclick="startBreakup('python')">🐍 Python</button>
        <button onclick="startBreakup('git')">🔧 Git</button>
      </div>
    </div>

    <div id="chat-container" class="chat hidden">
      <div id="chat-box"></div>
      <div id="reply-options" class="hidden">
        <button onclick="userReply('I can change!')">I can change!</button>
        <button onclick="userReply('You never appreciated me.')">You never appreciated me.</button>
      </div>
    </div>

    <div id="end-message" class="end hidden">
      <p>It's over. But maybe... someday, you'll refactor this relationship 💔</p>
    </div>
  </div>

  <script>
    const techScripts = {
      react: [
        "Hey... I just think we're not compatible anymore. Your JSX is too messy.",
        "Remember when we started with just a create-react-app? That was magical...",
        "But then you brought in Redux, React Router, Tailwind, and I couldn’t keep up.",
        "I need something... simpler. Maybe just HTML and vanilla JS."
      ],
      python: [
        "It’s not you, it’s indentation.",
        "I loved our Flask dates and Jupyter notebook journaling...",
        "But lately, you've been distant. Too object-oriented.",
        "I found someone else. They’re statically typed."
      ],
      git: [
        "We need to branch out. For real.",
        "You're always staging and committing but never truly pushing your feelings.",
        "You said we’d squash the past. But you rebase it every time.",
        "I'm tired of resolving conflicts."
      ]
    };

    let currentStack = null;
    let currentIndex = 0;

    function startBreakup(stack) {
      currentStack = stack;
      currentIndex = 0;
      document.getElementById("stack-selection").classList.add("hidden");
      document.getElementById("chat-container").classList.remove("hidden");
      nextLine();
    }

    function nextLine() {
      const chatBox = document.getElementById("chat-box");
      if (currentIndex < techScripts[currentStack].length) {
        const line = techScripts[currentStack][currentIndex];
        const p = document.createElement("p");
        p.textContent = line;
        chatBox.appendChild(p);
        currentIndex++;

        if (currentIndex === 2) {
          document.getElementById("reply-options").classList.remove("hidden");
        }
      } else {
        document.getElementById("reply-options").classList.add("hidden");
        document.getElementById("end-message").classList.remove("hidden");
      }
    }

    function userReply(response) {
      const chatBox = document.getElementById("chat-box");
      const reply = document.createElement("p");
      reply.classList.add("user-reply");
      reply.textContent = response;
      chatBox.appendChild(reply);
      document.getElementById("reply-options").classList.add("hidden");
      setTimeout(nextLine, 800);
    }
  </script>
</body>
</html>
