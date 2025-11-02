// backgrounds.js
(function () {
  // Detect current day
  let currentDay = 1;

  // For calendar.html (no ?day param), we can default to today's real date (1–31)
  const params = new URLSearchParams(window.location.search);
  if (params.has('day')) {
    currentDay = parseInt(params.get('day'));
  } else {
    currentDay = new Date().getDate();
  }

  // Define visual phases
  const phases = [
    {
      name: "Beginnings",
      range: [1, 7],
      background: "radial-gradient(circle at top, #0a0f1f 0%, #060913 100%)",
      snowColor: "white",
      snowOpacity: 0.8,
      starEffect: false,
    },
    {
      name: "Discovery",
      range: [8, 14],
      background: "radial-gradient(circle at top, #101b3f 0%, #0a0f1f 100%)",
      snowColor: "rgba(200, 220, 255, 0.9)",
      snowOpacity: 0.9,
      starEffect: true,
    },
    {
      name: "Connection",
      range: [15, 21],
      background: "radial-gradient(circle at bottom, #182752 0%, #0a0f1f 100%)",
      snowColor: "rgba(210, 220, 255, 0.8)",
      snowOpacity: 0.9,
      shadowEffect: true,
    },
    {
      name: "Revelation",
      range: [22, 25],
      background: "radial-gradient(circle at center, #243468 0%, #0e1633 100%)",
      snowColor: "rgba(230, 240, 255, 1)",
      snowOpacity: 1,
      heartEffect: true,
    },
    {
      name: "Reflection",
      range: [26, 31],
      background: "linear-gradient(to bottom, #1b2647 0%, #4b4b72 50%, #f0d6b6 100%)",
      snowColor: "rgba(255, 240, 220, 0.9)",
      snowOpacity: 0.9,
      finalGlow: true,
    },
  ];

  // Determine current phase
  const phase = phases.find(p => currentDay >= p.range[0] && currentDay <= p.range[1]) || phases[0];

  // Apply background
  document.body.style.background = phase.background;
  document.body.style.transition = "background 2s ease";

  // Update existing snowflakes
  document.querySelectorAll(".snowflake").forEach(snowflake => {
    snowflake.style.background = phase.snowColor;
    snowflake.style.opacity = phase.snowOpacity;
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
  }
})();