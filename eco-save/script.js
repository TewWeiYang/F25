// Animate hero on load
anime({
  targets: ".hero",
  translateY: [-30, 0],
  opacity: [0, 1],
  duration: 800,
  easing: "easeOutExpo"
});

// Animate event cards staggered
anime({
  targets: ".event-card",
  translateY: [50, 0],
  opacity: [0, 1],
  delay: anime.stagger(150),
  easing: "easeOutCubic"
});

function scrollToEvents() {
  document.getElementById("events").scrollIntoView({ behavior: "smooth" });
}

function viewEvent(eventId) {
  const event = document.getElementById(eventId);
  event.scrollIntoView({ behavior: "smooth" });
}

// Page entrance animation
anime({
  targets: ".detail-card",
  translateY: [40, 0],
  opacity: [0, 1],
  delay: anime.stagger(150),
  easing: "easeOutCubic"
});

function goBack() {
  window.history.back();
}

// Animate embedded map on detail page
anime({
  targets: ".event-map",
  scale: [0.95, 1],
  opacity: [0, 1],
  duration: 600,
  easing: "easeOutExpo"
});

function goBack() {
  window.location.href = "index.html";
}