function getMoonPhase(date = new Date()) {
  const synodicMonth = 29.53058867;
  const knownNewMoon = new Date("2024-12-01T00:00:00Z"); // known new moon reference
  const daysSince = (date - knownNewMoon) / (1000 * 60 * 60 * 24);
  const phase = (daysSince % synodicMonth) / synodicMonth;

  if (phase < 0.03 || phase > 0.97) return "new";
  if (phase < 0.25) return "waxing";
  if (phase < 0.5) return "full";
  if (phase < 0.75) return "waning";
  return "new";
}

function updateMoonBackground() {
  const phase = getMoonPhase();
  const moon = document.createElement("div");
  moon.classList.add("moon", phase);
  document.body.appendChild(moon);
}

document.addEventListener("DOMContentLoaded", updateMoonBackground);
