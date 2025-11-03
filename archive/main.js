// Archived copy of main.js — moved from project root
// 🌙 Snowy Whispers of the Moon — Main Logic (archived)

document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const day = parseInt(urlParams.get("day")) || 1;

  // Load the JSON file
  const response = await fetch("days.json");
  const days = await response.json();
  const today = days.find(d => d.day === day);

  if (!today) return alert("This day has not yet been revealed.");

  // Display content
  document.getElementById("title").textContent = `Day ${today.day} — ${today.title}`;
  document.getElementById("riddle").textContent = `“${today.riddle}”`;

  const storyDiv = document.getElementById("story");
  const revealBtn = document.getElementById("reveal-btn");

  revealBtn.addEventListener("click", () => {
    const input = document.getElementById("answer").value.trim().toLowerCase();
    if (today.answers.map(a => a.toLowerCase()).includes(input)) {
      storyDiv.textContent = today.story;
      storyDiv.style.display = "block";
      storyDiv.classList.add("fade-in");
    } else {
      alert("The whisper fades... try again.");
    }
  });

  // ❄️ Background evolution
  setBackgroundForDay(day);

  // 🌕 Add moon
  drawMoon();
});

// 🌙 Gradually evolving background
function setBackgroundForDay(day) {
  const body = document.body;
  const hue = 230 - day; // shifts from bluish to slightly violet
  body.style.background = `radial-gradient(circle at top, hsl(${hue}, 70%, 85%) 0%, #0e1633 90%)`;
}

// 🌕 Moon phase simulation
function drawMoon() {
  const moon = document.getElementById("moon");
  const today = new Date();
  const lunarCycle = 29.53;
  const newMoon = new Date("2025-10-02"); // base reference new moon
  const daysSince = (today - newMoon) / (1000 * 60 * 60 * 24);
  const phase = (daysSince % lunarCycle) / lunarCycle; // 0 = new, 0.5 = full

  moon.style.setProperty("--phase", phase);
}
