
function showRoast() {
  const message = document.getElementById("roastExtra");
  if (message) {
    message.classList.remove("hidden");
    message.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

// GAME 1: IQ QUIZ
function quiz(answer) {
  const result = document.getElementById("quizResult");

  if (answer === 3) {
    result.textContent = "ትክክል! 12ቱም ወራት ቢያንስ 28 ቀናት አሏቸው! 🧠🎉";
  } else {
    result.textContent = "እንደገና አስብ! ሁሉም ወራት 28 ቀናት አሏቸው! 😂";
  }
}

// GAME 2: SPIN WHEEL
const challenges = [
  "ለ10 ሰከንድ ዳንስ! 💃",
  "ሶስት የወደፊት ግቦችህን ተናገር! 🎯",
  "አስቂኝ ታሪክ አጫውት! 😂",
  "የልደት ፎቶ አንሳ! 📸",
  "ለጓደኛህ መልካም ምኞት አድርግ! 🤝",
  "የምትወደውን ዘፈን ዘምር! 🎤",
  "የዛሬውን ደስታ በሙሉ አጣጥም! 🥳"
];

function spin() {
  const wheel = document.getElementById("wheel");
  const result = document.getElementById("wheelResult");

  if (!wheel || !result) return;

  wheel.classList.remove("spinning");
  void wheel.offsetWidth;
  wheel.classList.add("spinning");

  result.textContent = "ዕድልህ እየተወሰነ ነው...";

  setTimeout(() => {
    const index = Math.floor(Math.random() * challenges.length);
    result.textContent = "🎉 ፈተናህ፦ " + challenges[index];
    wheel.classList.remove("spinning");
  }, 1400);
}

// GAME 3: WOULD YOU RATHER
const choices = [
  ["ብዙ ገንዘብ 💰", "ዓለምን መዞር 🌍"],
  ["ታዋቂ መሆን ⭐", "በስውር ሀብታም መሆን 💎"],
  ["የወደፊቱን ማየት 🔮", "የሰዎችን ሀሳብ ማወቅ 🧠"],
  ["ያለ ገደብ ምግብ 🍕", "ያለ ገደብ ጉዞ ✈️"]
];

let choiceIndex = 0;

function displayChoice() {
  const q = document.getElementById("choiceQuestion");
  if (!q) return;

  q.textContent = "የትኛውን ትመርጣለህ?";
  document.getElementById("choiceA").textContent =
    choices[choiceIndex][0];
  document.getElementById("choiceB").textContent =
    choices[choiceIndex][1];
  document.getElementById("choiceResult").textContent = "";
}

function pick(option) {
  document.getElementById("choiceResult").textContent =
    "ምርጫህ ተመዝግቧል! 😎 ምክንያቱንስ አብራራ!";
}

function nextChoice() {
  choiceIndex = (choiceIndex + 1) % choices.length;
  displayChoice();
}

// MUSIC
function musicToggle() {
  const music = document.getElementById("music");
  const status = document.getElementById("musicStatus");

  if (!music) return;

  if (music.paused) {
    music.play().then(() => {
      status.textContent = "🎵 ሙዚቃው እየተጫወተ ነው!";
    }).catch(() => {
      status.textContent = "ሙዚቃውን ለማጫወት የድምፅ ፋይሉን አረጋግጥ።";
    });
  } else {
    music.pause();
    status.textContent = "ሙዚቃው ቆሟል።";
  }
}

// FINAL GIFT
function openGift() {
  const gift = document.getElementById("gift");
  if (!gift) return;

  gift.classList.remove("hidden");
  launchConfetti();

  gift.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

// CONFETTI
function launchConfetti() {
  const canvas = document.getElementById("confetti");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();

  canvas.width = rect.width;
  canvas.height = rect.height;

  const pieces = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: -Math.random() * canvas.height,
    size: Math.random() * 7 + 3,
    speed: Math.random() * 4 + 2,
    rotation: Math.random() * 6,
    color: ["#ffdc73", "#ff70c1", "#ffffff",
            "#69e5ff", "#b99aff"][Math.floor(Math.random() * 5)]
  }));

  let frame = 0;

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach(p => {
      p.y += p.speed;
      p.rotation += 0.1;
      p.x += Math.sin(p.rotation) * 1.5;

      ctx.fillStyle = p.color;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    });

    frame++;

    if (frame < 240) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  animate();
}

// INITIALIZE
document.addEventListener("DOMContentLoaded", displayChoice);
function playSurpriseSound() {
    const sound = document.getElementById("surpriseSound");

    if (sound) {
        sound.currentTime = 0;

        sound.play().catch(error => {
            console.log("Audio playback error:", error);
        });
    }
}

