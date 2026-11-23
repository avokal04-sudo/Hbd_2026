
// ROAST PAGE
function revealRoast() {
  const message = document.getElementById("extraRoast");
  if (message) {
    message.classList.remove("hidden");
  }
}

// WOULD YOU RATHER GAME
const questions = [
  {
    q: "Would you rather become a millionaire or travel the world?",
    a: "Become a millionaire 💰",
    b: "Travel the world 🌍"
  },
  {
    q: "Would you rather read minds or see the future?",
    a: "Read minds 🧠",
    b: "See the future 🔮"
  },
  {
    q: "Would you rather have unlimited food or unlimited money?",
    a: "Unlimited food 🍕",
    b: "Unlimited money 💵"
  },
  {
    q: "Would you rather be famous or secretly wealthy?",
    a: "Famous ⭐",
    b: "Secretly wealthy 💎"
  },
  {
    q: "Would you rather never sleep or never study again?",
    a: "Never sleep 😴",
    b: "Never study 📚"
  }
];

let questionIndex = 0;

function displayQuestion() {
  const q = document.getElementById("question");
  if (!q) return;

  q.textContent = questions[questionIndex].q;
  document.getElementById("option1").textContent =
    questions[questionIndex].a;
  document.getElementById("option2").textContent =
    questions[questionIndex].b;

  document.getElementById("gameResult").textContent = "";
}

function chooseOption(choice) {
  const result = document.getElementById("gameResult");
  if (!result) return;

  result.textContent =
    choice === 1
      ? "Interesting choice! You know what you want! 😎"
      : "Bold decision! Let's see where that takes you! 😂";
}

function nextQuestion() {
  questionIndex = (questionIndex + 1) % questions.length;
  displayQuestion();
}

// BIRTHDAY WHEEL
const challenges = [
  "Give yourself a birthday speech! 🎤",
  "Tell your funniest memory! 😂",
  "Dance for 10 seconds! 💃",
  "Name three things you want to achieve! 🎯",
  "Take a birthday selfie! 📸",
  "Say one thing you are grateful for! 🙌",
  "Challenge a friend to a game! 🎮"
];

function spinWheel() {
  const wheel = document.getElementById("wheel");
  const result = document.getElementById("wheelResult");

  if (!wheel || !result) return;

  wheel.classList.remove("spinning");

  // Restart animation
  void wheel.offsetWidth;
  wheel.classList.add("spinning");

  result.textContent = "The birthday wheel is spinning...";

  setTimeout(() => {
    const random = Math.floor(Math.random() * challenges.length);
    result.textContent = "YOUR CHALLENGE: " + challenges[random];
    wheel.classList.remove("spinning");
  }, 1200);
}

// BIRTHDAY IQ QUIZ
function answerIQ(answer) {
  const result = document.getElementById("iqResult");
  if (!result) return;

  if (answer === 3) {
    result.textContent = "CORRECT! All 12 months have at least 28 days! 🧠";
  } else {
    result.textContent = "Not quite! Think carefully. Try again! 😂";
  }
}

// MUSIC PLAYER
function toggleMusic() {
  const music = document.getElementById("birthdayMusic");
  if (!music) return;

  if (music.paused) {
    music.play().catch(() => {
      alert("Please tap play again to start the music.");
    });
  } else {
    music.pause();
  }
}

// FINAL BIRTHDAY SURPRISE
function birthdaySurprise() {
  const gift = document.getElementById("birthdayGift");
  if (!gift) return;

  gift.classList.remove("hidden");

  const sound = document.getElementById("surpriseSound");
  if (sound) {
    sound.currentTime = 0;
    sound.play().catch(() => {});
  }

  launchConfetti();
  gift.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

// CONFETTI ANIMATION
function launchConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();

  const width = canvas.width = rect.width;
  const height = canvas.height = rect.height;

  const pieces = [];

  for (let i = 0; i < 130; i++) {
    pieces.push({
      x: Math.random() * width,
      y: -Math.random() * height,
      size: Math.random() * 7 + 3,
      speed: Math.random() * 4 + 2,
      angle: Math.random() * 6,
      color: ["#ffcc66", "#ff66cc", "#9e78ff", "#ffffff", "#55e6b0"][
        Math.floor(Math.random() * 5)
      ]
    });
  }

  let frame = 0;

  function animate() {
    ctx.clearRect(0, 0, width, height);

    pieces.forEach(piece => {
      piece.y += piece.speed;
      piece.angle += 0.08;
      piece.x += Math.sin(piece.angle) * 1.5;

      ctx.fillStyle = piece.color;
      ctx.fillRect(piece.x, piece.y, piece.size, piece.size);
    });

    frame++;

    if (frame < 240) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, width, height);
    }
  }

  animate();
}

// INITIALIZE
document.addEventListener("DOMContentLoaded", () => {
  displayQuestion();
});
  
