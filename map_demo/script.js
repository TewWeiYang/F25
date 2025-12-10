const path = [
  { top: 15, left: 15 },
  { top: 15, left: 135 },
  { top: 15, left: 255 },
  { top: 135, left: 255 },
  { top: 255, left: 255 }
];

let current = 0;

function movePlayer() {
  current = (current + 1) % path.length;

  anime({
    targets: "#player",
    top: path[current].top,
    left: path[current].left,
    duration: 800,
    easing: "easeInOutQuad"
  });
}
