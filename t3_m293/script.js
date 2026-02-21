/* ======================= BURGER MENÜ ======================= */
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const logo = document.querySelector(".logo");

function toggleMenu() {
  menuToggle.classList.toggle("open");
  navLinks.classList.toggle("active");
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Klick außerhalb schließt Menü
  document.addEventListener("click", (e) => {
    if (
      navLinks.classList.contains("active") &&
      !navLinks.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      toggleMenu();
    }
  });

  // Klick auf Menü-Link schließt Menü wieder
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      toggleMenu();
    });
  });
}

/* ======================= AKTIVE SEITE MARKIEREN ======================= */
document.querySelectorAll(".nav-links a").forEach((link) => {
  if (window.location.href.includes(link.getAttribute("href"))) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

/* ======================= IMPRESSUM POPUP ======================= */
const impressumBtn = document.getElementById("impressumBtn");
const impressumPopup = document.getElementById("impressumPopup");
const closePopup = document.getElementById("closePopup");

if (impressumBtn && impressumPopup && closePopup) {
  impressumBtn.addEventListener("click", () => {
    impressumPopup.style.display = "flex";
  });

  closePopup.addEventListener("click", () => {
    impressumPopup.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === impressumPopup) {
      impressumPopup.style.display = "none";
    }
  });
}

/* ======================= BOXEN HOVER & TOUCH ======================= */
document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("touchstart", () => {
    box.classList.add("active");
  });
  box.addEventListener("touchend", () => {
    setTimeout(() => box.classList.remove("active"), 200);
  });
});

/* ======================= BOX CLICK EFFECT ======================= */
document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("click", () => {
    document.querySelectorAll(".box").forEach((b) => b.classList.remove("clicked"));
    box.classList.add("clicked");
  });
});

/* ======================= TABS SPIELPLAN ======================= */
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

if (tabs.length > 0) {
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));
      tab.classList.add("active");
      if (tabContents[index]) tabContents[index].classList.add("active");
    });
  });
}

/* ======================= SUCHE SPIELPLAN ======================= */
const searchInput = document.getElementById("searchInput");
const previousGames = document.querySelectorAll("#previous .game-box");

if (searchInput && previousGames.length > 0) {
  searchInput.addEventListener("input", function () {
    const filter = searchInput.value.toLowerCase();
    previousGames.forEach((game) => {
      const opponent = game.querySelector("h3").textContent.toLowerCase();
      game.style.display = opponent.includes(filter) ? "" : "none";
    });
  });
}

/* ======================= TRIKOTSYSTEM ======================= */
const seasonSelect = document.getElementById("seasonSelect");
const fieldImg = document.getElementById("fieldImg");
const keeperImg = document.getElementById("keeperImg");
const fieldLabel = document.getElementById("fieldLabel");
const keeperLabel = document.getElementById("keeperLabel");

const prevField = document.getElementById("prevField");
const nextField = document.getElementById("nextField");
const prevKeeper = document.getElementById("prevKeeper");
const nextKeeper = document.getElementById("nextKeeper");

if (seasonSelect && fieldImg && keeperImg && fieldLabel && keeperLabel) {

// Alle Trikotbilder pro Saison
const trikotData = [
  {
    field: [
      { src: "bilder_t3/trikots/heim_2025.webp", label: "Heimtrikot" },
      { src: "bilder_t3/trikots/auswaerts_2025.webp", label: "Auswärtstrikot" },
      { src: "bilder_t3/trikots/alternativ_2025.jpg", label: "Alternativtrikot" },
      { src: "bilder_t3/trikots/4.avif", label: "4-Trikot" },
    ],
    keeper: [
      { src: "bilder_t3/trikots/tor1_2025.webp", label: "Torwarttrikot 1" },
      { src: "bilder_t3/trikots/tor2_2025.webp", label: "Torwarttrikot 2" },
    ],
  },
  {
    field: [
      { src: "bilder_t3/trikots/heim_2024.avif", label: "Heimtrikot" },
      { src: "bilder_t3/trikots/auswaerts_2024.jpg", label: "Auswärtstrikot" },
      { src: "bilder_t3/trikots/alternativ_2024.jpg", label: "Alternativtrikot" },
    ],
    keeper: [
      { src: "bilder_t3/trikots/tor1_2024.webp", label: "Torwarttrikot 1" },
      { src: "bilder_t3/trikots/tor2_2024.jpg", label: "Torwarttrikot 2" },
    ],
  },
  {
    field: [
      { src: "bilder_t3/trikots/heim_2023.jpg", label: "Heimtrikot" },
      { src: "bilder_t3/trikots/auswaerts_2023.webp", label: "Auswärtstrikot" },
      { src: "bilder_t3/trikots/alternativ_2023.webp", label: "Alternativtrikot" },
    ],
    keeper: [
      { src: "bilder_t3/trikots/tor1_2023.webp", label: "Torwarttrikot 1" },
      { src: "bilder_t3/trikots/tor2_2023.jpg", label: "Torwarttrikot 2" },
    ],
  },
  {
    field: [
      { src: "bilder_t3/trikots/heim_2022.webp", label: "Heimtrikot" },
      { src: "bilder_t3/trikots/auswaerts_2022.jpg", label: "Auswärtstrikot" },
      { src: "bilder_t3/trikots/alternativ_2022.jpg", label: "Alternativtrikot" },
    ],
    keeper: [
      { src: "bilder_t3/trikots/tor1_2022.webp", label: "Torwarttrikot 1" },
      { src: "bilder_t3/trikots/tor2_2022.jpg", label: "Torwarttrikot 2" },
    ],
  },
  {
    field: [
      { src: "bilder_t3/trikots/heim_2021.jpg", label: "Heimtrikot" },
      { src: "bilder_t3/trikots/auswaerts_2021.jpg", label: "Auswärtstrikot" },
      { src: "bilder_t3/trikots/alternativ_2021.webp", label: "Alternativtrikot" },
    ],
    keeper: [
      { src: "bilder_t3/trikots/tor1_2021.jpg", label: "Torwarttrikot 1" },
      { src: "bilder_t3/trikots/tor2_2021.jpg", label: "Torwarttrikot 2" },
    ],
  },
];

let currentSeason = 0;
let currentField = 0;
let currentKeeper = 0;

function updateImages() {
  const data = trikotData[currentSeason];
  if (!data) return;

  fieldImg.src = data.field[currentField].src;
  fieldLabel.textContent = data.field[currentField].label;
  keeperImg.src = data.keeper[currentKeeper].src;
  keeperLabel.textContent = data.keeper[currentKeeper].label;
}

// Navigation für Spielertrikots
if (nextField && prevField) {
  nextField.addEventListener("click", () => {
    const len = trikotData[currentSeason].field.length;
    currentField = (currentField + 1) % len;
    updateImages();
  });

  prevField.addEventListener("click", () => {
    const len = trikotData[currentSeason].field.length;
    currentField = (currentField - 1 + len) % len;
    updateImages();
  });
}

// Navigation für Torwarttrikots
if (nextKeeper && prevKeeper) {
  nextKeeper.addEventListener("click", () => {
    const len = trikotData[currentSeason].keeper.length;
    currentKeeper = (currentKeeper + 1) % len;
    updateImages();
  });

  prevKeeper.addEventListener("click", () => {
    const len = trikotData[currentSeason].keeper.length;
    currentKeeper = (currentKeeper - 1 + len) % len;
    updateImages();
  });
}

// Saisonwechsel
if (seasonSelect) {
  seasonSelect.addEventListener("change", (e) => {
    currentSeason = parseInt(e.target.value);
    currentField = 0;
    currentKeeper = 0;
    updateImages();
  });
}

updateImages();
}

/* ======================= SANFTER SEITENÜBERGANG ======================= */
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");

  const pageLinks = document.querySelectorAll("a[href]");
  pageLinks.forEach((link) => {
    const href = link.getAttribute("href");
    // Nur echte Seitenlinks, kein Anker oder JS-Link
    if (href && !href.startsWith("#") && !href.startsWith("javascript:")) {
      link.addEventListener("click", (e) => {
        // Nur bei linken Maustaste und ohne Strg/Cmd
        if (e.button === 0 && !e.metaKey && !e.ctrlKey) {
          e.preventDefault();
          const target = link.href;
          document.body.classList.add("fade-out");
          setTimeout(() => {
            window.location.assign(target);
          }, 300);
        }
      });
    }
  });
});

/* ======================= ERFOLGE-ANIMATION ======================= */
// Alle Erfolge-Boxen auswählen
const erfolgeBoxes = document.querySelectorAll(".erfolge-boxen .box");

// Intersection Observer erstellen
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Verzögerung zwischen den Boxen, damit sie nacheinander erscheinen
      setTimeout(() => {
        entry.target.classList.add("visible"); // Klasse für Animation hinzufügen
      }, index * 200); // 200ms Abstand zwischen den Boxen
    }
  });
}, { 
  threshold: 0.2 // Box wird animiert, wenn 20% sichtbar sind
});

// Jede Box beobachten
erfolgeBoxes.forEach((box) => observer.observe(box));
