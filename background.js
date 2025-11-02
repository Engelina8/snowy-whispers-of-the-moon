(function () {
  // Detect current day (from URL or today's date)
  let currentDay = 1;
  const params = new URLSearchParams(window.location.search);
  if (params.has("day")) {
    currentDay = parseInt(params.get("day"));
  } else {
    currentDay = new Date().getDate();
  }

  // Define visual phases
  const phases = [
    {
      name: "Beginnings",
      range: [1, 6],
      background: "radial-gradient(circle at top, #0a0f1f 0%, #060913 100%)",
      snowColor: "white",
      snowOpacity: 0.8,
      starEffect: false,
      symbol: "🌑",
    },
    {
      name: "Discovery",
      range: [7, 12],
      background: "radial-gradient(circle at top, #101b3f 0%, #0a0f1f 100%)",
      snowColor: "rgba(200, 220, 255, 0.9)",
      snowOpacity: 0.9,
      starEffect: true,
      symbol: "🌘",
    },
    {
      name: "Connection",
      range: [13, 20],
      background: "radial-gradient(circle at bottom, #182752 0%, #0a0f1f 100%)",
      snowColor: "rgba(210, 220, 255, 0.8)",
      snowOpacity: 0.9,
      shadowEffect: true,
      symbol: "🌓",
    },
    {
      name: "Revelation",
      range: [21, 25],
      background: "radial-gradient(circle at center, #243468 0%, #0e1633 100%)",
      snowColor: "rgba(230, 240, 255, 1)",
      snowOpacity: 1,
      heartEffect: true,
      symbol: "🌕",
    },
    {
      name: "Reflection",
      range: [26, 31],
      background: "linear-gradient(to bottom, #1b2647 0%, #4b4b72 50%, #f0d6b6 100%)",
      snowColor: "rgba(255, 240, 220, 0.9)",
      snowOpacity: 0.9,
      finalGlow: true,
      symbol: "🌗",
    },
  ];

  // Determine current phase
  const phase =
    phases.find((p) => currentDay >= p.range[0] && currentDay <= p.range[1]) ||
    phases[0];

  // Apply background transition
  document.body.style.background = phase.background;
  document.body.style.transition = "background 2s ease";

  // Update snowflakes
  document.querySelectorAll(".snowflake").forEach((flake) => {
    flake.style.background = phase.snowColor;
    flake.style.opacity = phase.snowOpacity;
  });

  // ✨ Add subtle star effects (Discovery phase)
  if (phase.starEffect) {
    for (let i = 0; i < 20; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      document.body.appendChild(star);
    }
  }

  // 💫 Optional: Shape shadows (Connection)
  if (phase.shadowEffect) {
    const shadow = document.createElement("div");
    shadow.classList.add("ground-shadows");
    document.body.appendChild(shadow);
  }

  // 💖 Heart pause effect (Revelation)
  if (phase.heartEffect) {
    setInterval(() => {
      const heart = document.createElement("div");
      heart.classList.add("snow-heart");
      heart.style.left = `${50 + (Math.random() * 10 - 5)}vw`;
      heart.style.top = `${50 + (Math.random() * 10 - 5)}vh`;
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 2000);
    }, 8000);
  }

  // 🌕 Final glow (Reflection)
  if (phase.finalGlow) {
    const glow = document.createElement("div");
    glow.classList.add("final-glow");
    document.body.appendChild(glow);

    // Day 31 message will be triggered from day.html when riddle is solved
  }

  // 🌙 Inject phase indicator on day.html only
  if (params.has("day")) {
    const phaseBadge = document.createElement("div");
    phaseBadge.classList.add("phase-badge");
    phaseBadge.textContent = `${phase.symbol} ${phase.name}`;
    document.body.appendChild(phaseBadge);
  }
})();