(function () {
  // Detect current day (from URL or today's date)
  let currentDay = 1;
  const params = new URLSearchParams(window.location.search);
  if (params.has("day")) {
    currentDay = parseInt(params.get("day"));
  } else {
    currentDay = new Date().getDate();
  }

  // Date-gating: Check if the requested day is available based on calendar date
  // Only gate on day.html pages (when ?day= parameter exists)
  if (params.has("day")) {
    const today = new Date();
    const currentMonth = today.getMonth(); // 0-11 (December = 11)
    const currentDate = today.getDate(); // 1-31
    
    // Only enforce gating in December
    if (currentMonth === 11) {
      if (currentDay > currentDate) {
        // Redirect to calendar if trying to access a future day
        window.location.href = "calendar.html";
        return;
      }
    }
    // Outside December, allow all days (for testing/viewing)
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

  // 🎂 Special birthday effect for Day 29
  if (currentDay === 29 && params.has("day")) {
    // Add birthday confetti
    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.animationDelay = `${Math.random() * 3}s`;
      confetti.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
      document.body.appendChild(confetti);
    }
    // Add birthday badge
    const birthdayBadge = document.createElement("div");
    birthdayBadge.classList.add("birthday-badge");
    birthdayBadge.innerHTML = "🎉 Happy Birthday! 🎂";
    document.body.appendChild(birthdayBadge);
  }

  // ❤️ Heart outline background for Day 31
  if (currentDay === 31 && params.has("day")) {
    const heartOutline = document.createElement("div");
    heartOutline.classList.add("heart-outline");
    // Generate heart using parametric equations: x = 16sin³(t), y = 13cos(t) - 5cos(2t) - 2cos(3t) - cos(4t)
    const heartPoints = [];
    const scale = 8;
    for (let t = 0; t <= Math.PI * 2; t += 0.1) {
      const x = scale * 16 * Math.pow(Math.sin(t), 3);
      const y = -scale * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
      heartPoints.push(`${x},${y}`);
    }
    
    heartOutline.innerHTML = `
      <svg width="400" height="400" viewBox="-200 -200 400 400" xmlns="http://www.w3.org/2000/svg">
        <polyline points="${heartPoints.join(' ')}"
                  fill="none"
                  stroke="rgba(255, 180, 200, 0.7)"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  filter="url(#glow)"/>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
    `;
    document.body.appendChild(heartOutline);
  }

  // 🌙 Inject phase indicator on day.html only
  if (params.has("day")) {
    const phaseBadge = document.createElement("div");
    phaseBadge.classList.add("phase-badge");
    phaseBadge.textContent = `${phase.symbol} ${phase.name}`;
    document.body.appendChild(phaseBadge);
  }
    // Centralized snowflake creation (used by all pages)
    function createSnowflakes(numSnowflakes = 40) {
      for (let i = 0; i < numSnowflakes; i++) {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        const size = Math.random() * 5 + 2;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${5 + Math.random() * 10}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowflake.style.opacity = Math.random() * 0.8 + 0.2;
        snowflake.style.animationTimingFunction = "linear";
        document.body.appendChild(snowflake);
      }
    }

    // Create the default snowflakes once
    createSnowflakes(40);

  })();