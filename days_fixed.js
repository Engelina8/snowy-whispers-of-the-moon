// Make days data globally accessible
const days = [
    // 🌑 Beginnings (Days 1–6)
    {
      title: "The First Whisper",
      riddle: "I am taken before you rise, but found before you sleep. I glow without flame — what am I?",
      answer: "moon",
      story: "The first whisper drifts through the frost — a memory of moonlight and laughter, buried under snow yet still warm to the touch. The night listens.",
      phase: "🌑"
    },
    {
      title: "Frozen Breath",
      riddle: "I vanish as you speak, yet I echo in the cold — what am I?",
      answer: "breath",
      story: "Each word leaves a trail in the air, lingering for just a heartbeat before dissolving into silver mist.",
      phase: "🌑"
    },
    {
      title: "Echoes Beneath Ice",
      riddle: "I sleep under glass, yet I move with the wind. What am I?",
      answer: "water",
      story: "Beneath the frozen stream, tiny ripples still hum their secret songs, untouched by frost.",
      phase: "🌑"
    },
    {
      title: "Lanterns in Snow",
      riddle: "I burn without heat, I wander without feet — what am I?",
      answer: "light",
      story: "Distant lanterns flicker through the storm, like souls seeking their way home.",
      phase: "🌑"
    },
    {
      title: "The Silent Hour",
      riddle: "I arrive between the ticks of time. What am I?",
      answer: "midnight",
      story: "When all sound fades, the world breathes in — and the hour without a name begins.",
      phase: "🌑"
    },
    {
      title: "Footprints of the Dawn",
      riddle: "I follow the moon and lead the sun. What am I?",
      answer: "twilight",
      story: "Shadows stretch, reaching for warmth, but carry with them the cool serenity of night.",
      phase: "🌑"
    },

    // 🌘 Discovery (Days 7–13)
    {
      title: "Silver Threads",
      riddle: "I bind the sky and earth with unseen strings. What am I?",
      answer: "snowflake",
      story: "Each flake carries a whisper of a dream, woven in crystalline threads of memory.",
      phase: "🌘"
    },
    {
      title: "Whispered Coordinates",
      riddle: "I tell where you are but never where you go. What am I?",
      answer: "star",
      story: "Constellations shimmer overhead — a map written in ancient light.",
      phase: "🌘"
    },
    {
      title: "The Shy Flame",
      riddle: "I hide from wind yet crave the dark. What am I?",
      answer: "candle",
      story: "A single flame dances in defiance of the cold, small but certain.",
      phase: "🌘"
    },
    {
      title: "Winter's Quill",
      riddle: "I write without ink, but my words vanish by noon. What am I?",
      answer: "frost",
      story: "The frost sketches poems across the glass — fleeting and fragile as sighs.",
      phase: "🌘"
    },
    {
      title: "Frozen Compass",
      riddle: "I always point, yet I cannot move. What am I?",
      answer: "north",
      story: "The compass sleeps, but its needle dreams of auroras and home.",
      phase: "🌘"
    },
    {
      title: "A Thread Through the Dark",
      riddle: "I guide you through shadows, yet I am made of shadows too. What am I?",
      answer: "path",
      story: "The path glows faintly under the moon's touch, leading deeper into the hush of snow.",
      phase: "🌘"
    },

    // 🌓 Connection (Days 14–20)
    {
      title: "Hands of Starlight",
      riddle: "I reach for you but never touch. What am I?",
      answer: "light",
      story: "Moonbeams stretch across the distance, tender and eternal.",
      phase: "🌓"
    },
    {
      title: "The Bridge of Dreams",
      riddle: "I exist between sleep and waking. What am I?",
      answer: "dream",
      story: "The bridge hums softly beneath your feet, woven from every shared secret and sigh.",
      phase: "🌓"
    },
    {
      title: "Frozen Symphony",
      riddle: "I make no sound, yet all can hear me. What am I?",
      answer: "silence",
      story: "Even in stillness, the air trembles with unspoken music.",
      phase: "🌓"
    },
    {
      title: "The Hidden Word",
      riddle: "You speak me without sound, read me without eyes. What am I?",
      answer: "thought",
      story: "Some truths are whispered only between hearts.",
      phase: "🌓"
    },
    {
      title: "Reflected Faces",
      riddle: "I am always before you, yet never ahead. What am I?",
      answer: "mirror",
      story: "The mirror holds more than one reflection — perhaps a memory that lingers still.",
      phase: "🌓"
    },
    {
      title: "The Thread of You",
      riddle: "I am invisible, yet I pull you closer. What am I?",
      answer: "connection",
      story: "In every pause, in every sigh, something wordless reaches across the night.",
      phase: "🌓"
    },
    {
      title: "Constellation's Secret",
      riddle: "I am countless, yet I form one. What am I?",
      answer: "constellation",
      story: "The stars draw their own letters across the sky — and the message feels meant for you.",
      phase: "🌓"
    },

    // 🌕 Revelation (Days 21–25)
    {
      title: "The Blooming Night",
      riddle: "I grow when the sun fades. What am I?",
      answer: "moonflower",
      story: "Under silver light, the petals unfold — fragile yet fierce, just like hope.",
      phase: "🌕"
    },
    {
      title: "Snow in Stillness",
      riddle: "I fall but never break, melt yet never weep. What am I?",
      answer: "snow",
      story: "For a moment, time holds its breath — and every flake becomes a frozen heartbeat.",
      phase: "🌕"
    },
    {
      title: "The Luminous Heart",
      riddle: "I am made of warmth and light, yet I live in darkness. What am I?",
      answer: "love",
      story: "The snow pauses midair, shaping itself into a heart of frost and glow.",
      phase: "🌕"
    },
    {
      title: "Whispers of the Moon",
      riddle: "I speak in tides, in silver, in silence. What am I?",
      answer: "moonlight",
      story: "She watches from above — calm, knowing, ancient — and everything begins to make sense.",
      phase: "🌕"
    },
    {
      title: "The Gift Beneath Ice",
      riddle: "I am hidden in plain sight, waiting to be thawed. What am I?",
      answer: "truth",
      story: "When the ice melts, something glows beneath — a reflection of everything you've learned.",
      phase: "🌕"
    },

    // 🌗 Reflection (Days 26–31)
    {
      title: "Threads of Gold",
      riddle: "I weave endings into beginnings. What am I?",
      answer: "memory",
      story: "The first light of morning brushes the world with warmth — a promise kept.",
      phase: "🌗"
    },
    {
      title: "The Mirror Moon",
      riddle: "I show what is hidden, not what is gone. What am I?",
      answer: "reflection",
      story: "The moon gazes back — soft, forgiving — and the shadows bow their heads.",
      phase: "🌗"
    },
    {
      title: "Footprints of Light",
      riddle: "I fade as you follow, yet I mark your path. What am I?",
      answer: "footprints",
      story: "Snow holds every step — not to trap, but to remember.",
      phase: "🌗"
    },
    {
      title: "The Last Whisper",
      riddle: "I am the echo of all that came before. What am I?",
      answer: "echo",
      story: "The night exhales one final breath — a soft goodbye, shimmering with dawn.",
      phase: "🌗"
    },
    {
      title: "Aurora's Promise",
      riddle: "I am born from darkness but bring color. What am I?",
      answer: "aurora",
      story: "The sky blooms in ribbons of light — silent music for the soul.",
      phase: "🌗"
    },
    {
      title: "For You",
      riddle: "There is no riddle today — only this truth: you were the story all along.",
      answer: "love",
      story: "The final scene unfurls: snow, moonlight, and a glowing heart. Every whisper leads here — to you.",
      phase: "🌗"
    }
  ];

// Initialize phase data when DOM is loaded (for styling only)
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const currentDay = parseInt(params.get("day")) || 1;

  // Only set the phase attribute for styling - let day.html handle content
  const phase = 
    currentDay <= 6
    ? "Beginnings"
    : currentDay <= 12
    ? "Discovery"
    : currentDay <= 20
    ? "Connection"
    : currentDay <= 25
    ? "Revelation"
    : "Reflection";

  document.body.setAttribute("data-phase", phase);
});
