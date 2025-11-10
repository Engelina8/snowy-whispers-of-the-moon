// Make days data globally accessible
const days = [
    // 🌑 Beginnings (Days 1–6)
    {
      title: "The First Whisper",
      riddle: "I am taken before you rise, but found before you sleep. I glow without flame — what am I?",
      answer: "moon",
        storyFile: "stories/01.md",
      phase: "🌑"
    },
    {
      title: "Frozen Words",
      riddle: "I vanish as you speak, yet I echo in the cold — what am I?",
      answer: "breath",
        storyFile: "stories/02.md",
      phase: "🌑"
    },
    {
      title: "Echoes Beneath Ice",
      riddle: "I sleep under glass, yet I move with the wind. What am I?",
      answer: "water",
        storyFile: "stories/03.md",
      phase: "🌑"
    },
    {
      title: "Lanterns in Snow",
      riddle: "I burn without heat, I wander without feet — what am I?",
      answer: "light",
        storyFile: "stories/04.md",
      phase: "🌑"
    },
    {
      title: "The Silent Hour",
      riddle: "I arrive between the ticks of time. What am I?",
      answer: "midnight",
        storyFile: "stories/05.md",
      phase: "🌑"
    },
    {
      title: "Footprints of the Dawn",
      riddle: "I follow the moon and lead the sun. What am I?",
      answer: "twilight",
        storyFile: "stories/06.md",
      phase: "🌑"
    },

    // 🌘 Discovery (Days 7–13)
    {
      title: "Silver Threads",
      riddle: "I bind the sky and earth with unseen strings. What am I?",
      answer: "snowflake",
        storyFile: "stories/07.md",
      phase: "🌘"
    },
    {
      title: "Whispered Coordinates",
      riddle: "I tell where you are but never where you go. What am I?",
      answer: "star",
        storyFile: "stories/08.md",
      phase: "🌘"
    },
    {
      title: "The Shy Flame",
      riddle: "I hide from wind yet crave the dark. What am I?",
      answer: "candle",
        storyFile: "stories/09.md",
      phase: "🌘"
    },
    {
      title: "Winter's Quill",
      riddle: "I write without ink, but my words vanish by noon. What am I?",
      answer: "frost",
        storyFile: "stories/10.md",
      phase: "🌘"
    },
    {
      title: "Frozen Compass",
      riddle: "I always point, yet I cannot move. What am I?",
      answer: "north",
        storyFile: "stories/11.md",
      phase: "🌘"
    },
    {
      title: "A Thread Through the Dark",
      riddle: "I guide you through shadows, yet I am made of shadows too. What am I?",
      answer: "path",
        storyFile: "stories/12.md",
      phase: "🌘"
    },

    // 🌓 Connection (Days 14–20)
    {
      title: "Hands of Starlight",
      riddle: "I reach for you but never touch. What am I?",
      answer: "light",
        storyFile: "stories/13.md",
      phase: "🌓"
    },
    {
      title: "The Bridge of Dreams",
      riddle: "I exist between sleep and waking. What am I?",
      answer: "dream",
        storyFile: "stories/14.md",
      phase: "🌓"
    },
    {
      title: "Frozen Symphony",
      riddle: "I make no sound, yet all can hear me. What am I?",
      answer: "silence",
        storyFile: "stories/15.md",
      phase: "🌓"
    },
    {
      title: "The Hidden Word",
      riddle: "You speak me without sound, read me without eyes. What am I?",
      answer: "thought",
        storyFile: "stories/16.md",
      phase: "🌓"
    },
    {
      title: "Reflected Faces",
      riddle: "I am always before you, yet never ahead. What am I?",
      answer: "mirror",
        storyFile: "stories/17.md",
      phase: "🌓"
    },
    {
      title: "The Thread of You",
      riddle: "I am invisible, yet I pull you closer. What am I?",
      answer: "connection",
        storyFile: "stories/18.md",
      phase: "🌓"
    },
    {
      title: "Constellation's Secret",
      riddle: "I am countless, yet I form one. What am I?",
      answer: "constellation",
        storyFile: "stories/19.md",
      phase: "🌓"
    },

    // 🌕 Revelation (Days 21–25)
    {
      title: "The Blooming Night",
      riddle: "I grow when the sun fades. What am I?",
      answer: "moonflower",
        storyFile: "stories/20.md",
      phase: "🌕"
    },
    {
      title: "Snow in Stillness",
      riddle: "I fall but never break, melt yet never weep. What am I?",
      answer: "snow",
        storyFile: "stories/21.md",
      phase: "🌕"
    },
    {
      title: "The Luminous Heart",
      riddle: "I am made of warmth and light, yet I live in darkness. What am I?",
      answer: "love",
        storyFile: "stories/22.md",
      phase: "🌕"
    },
    {
      title: "Whispers of the Moon",
      riddle: "I speak in tides, in silver, in silence. What am I?",
      answer: "moonlight",
        storyFile: "stories/23.md",
      phase: "🌕"
    },
    {
      title: "The Gift Beneath Ice",
      riddle: "I am hidden in plain sight, waiting to be thawed. What am I?",
      answer: "truth",
        storyFile: "stories/24.md",
      phase: "🌕"
    },

    // 🌗 Reflection (Days 26–31)
    {
      title: "Threads of Gold",
      riddle: "I weave endings into beginnings. What am I?",
      answer: "memory",
        storyFile: "stories/25.md",
      phase: "🌗"
    },
    {
      title: "The Mirror Moon",
      riddle: "I show what is hidden, not what is gone. What am I?",
      answer: "reflection",
        storyFile: "stories/26.md",
      phase: "🌗"
    },
    {
      title: "Footprints of Light",
      riddle: "I fade as you follow, yet I mark your path. What am I?",
      answer: "footprints",
        storyFile: "stories/27.md",
      phase: "🌗"
    },
    {
      title: "The Last Whisper",
      riddle: "I am the echo of all that came before. What am I?",
      answer: "echo",
        storyFile: "stories/28.md",
      phase: "🌗"
    },
    {
      title: "Aurora's Promise",
      riddle: "I am born from darkness but bring color. What am I?",
      answer: "aurora",
        storyFile: "stories/29.md",
      phase: "🌗"
    },
    {
      title: "The Unwritten Chapter",
      riddle: "I begin when you stop. What am I?",
      answer: "future",
        storyFile: "stories/30.md",
      phase: "🌗"
    },
    {
      title: "For You",
      riddle: "There is no riddle today — only this truth: you were the story all along.",
      answer: "love",
        storyFile: "stories/31.md",
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
