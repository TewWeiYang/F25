// Animate hero on load
anime({
  targets: ".hero",
  translateY: [-30, 0],
  opacity: [0, 1],
  duration: 800,
  easing: "easeOutExpo"
});

// Animate event cards
anime({
  targets: ".event-card",
  translateY: [50, 0],
  opacity: [0, 1],
  delay: anime.stagger(150),
  easing: "easeOutCubic"
});

// Scroll to events section
function scrollToEvents() {
  document.getElementById("events").scrollIntoView({ behavior: "smooth" });
}

// Navigate to selected event
function goToEventDetail(id) {
    localStorage.setItem("eventId", id);
    window.location.href = "events-detail.html";
}

// Back button
function goBack() {
  window.location.href = "home.html";
}

// NAVBAR SHRINK ON SCROLL
window.addEventListener("scroll", function () {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 30) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// FOOTER ACTIVE HIGHLIGHT
window.addEventListener("scroll", () => {
  const eventsSection = document.getElementById("events");

  if (!eventsSection) return;

  const top = eventsSection.getBoundingClientRect().top;

  if (top < 200 && top > -500) {
    document.getElementById("foot-events").classList.add("active");
    document.getElementById("foot-home").classList.remove("active");
  } else {
    document.getElementById("foot-home").classList.add("active");
    document.getElementById("foot-events").classList.remove("active");
  }
});
