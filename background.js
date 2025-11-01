// backgrounds.js
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const day = parseInt(params.get("day")) || 1; // e.g. day.html?day=5

  const root = document.documentElement;

  // Gradual changes in hue and shadow depth
  const hueShift = (day / 31) * 60; // from blue → lavender
  const snowDensity = 0.3 + (day / 62); // 0.3 to 0.8
  const shadowOpacity = (day / 31) * 0.5; // up to 50% visible

  root.style.setProperty("--background-hue", hueShift);
  root.style.setProperty("--snow-opacity", snowDensity);
  root.style.setProperty("--shadow-opacity", shadowOpacity);
});
