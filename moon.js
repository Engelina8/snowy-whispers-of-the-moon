(function() {
  // Get day number from URL
  const urlParams = new URLSearchParams(window.location.search);
  const currentDay = parseInt(urlParams.get("day")) || 1;

  // Define moon phases
  const moonPhases = [
    { range: [1, 7], symbol: "🌑", name: "Beginnings", text: "The Moon begins to whisper." },
    { range: [8, 14], symbol: "🌘", name: "Discovery", text: "The Moon watches quietly." },
    { range: [15, 21], symbol: "🌓", name: "Connection", text: "The Moon listens and learns." },
    { range: [22, 25], symbol: "🌕", name: "Revelation", text: "The Moon shines with truth." },
    { range: [26, 31], symbol: "🌗", name: "Reflection", text: "The Moon remembers every whisper." },
  ];

  const currentPhase = moonPhases.find(p => currentDay >= p.range[0] && currentDay <= p.range[1]) || moonPhases[0];

  // Create moon phase element
  const moonContainer = document.createElement("div");
  moonContainer.classList.add("moon-phase");
  moonContainer.innerHTML = `
    <div class="moon-symbol">${currentPhase.symbol}</div>
    <div class="moon-caption">${currentPhase.name}</div>
    <p class="moon-text">${currentPhase.text}</p>
  `;
  
  document.body.appendChild(moonContainer);
})();