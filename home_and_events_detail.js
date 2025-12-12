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

function attendEvent() {
  window.location.href = "car_puzzle_reward.html";
}

// =====================
// GLOBAL POINT SYSTEM
// =====================
function getPoints() {
    return parseInt(localStorage.getItem("ecoPoints") || "0");
}

function setPoints(value) {
    localStorage.setItem("ecoPoints", value);
}

function addPoints(value) {
    let current = getPoints();
    setPoints(current + value);
}

function attendEvent(eventName) {
    // Add 20 points for attending event
    addPoints(20);

    // Save last reward message
    alert(`You attended ${eventName} and earned +20 Eco Points!`);

    // Redirect to reward popup page
    window.location.href = "car_puzzle_reward.html";
}

// =====================
// EMAIL OTP SYSTEM
// =====================
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

// for testing purpose for now use {} to store
const otpStore = {}; // this is to show like => { "email": { otp: 123456, expires: Date } }

// Nodemailer settings()
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "wkeattea@gmail.com",
        pass: "lqqpktppdsmfvulv" // Change to ur own App Password
    }
});
// generate the six OTp for you(random)
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}
// send OTP to your email
app.post("/send-otp", (req, res) => {
    const { email } = req.body;
    const otp = generateOTP();
    const expires = Date.now() + 5 * 60 * 1000; // 5 mins valid only, can change the time also

    otpStore[email] = { otp, expires };

    const mailOptions = {
        from: "wkeattea@gmail.com",
        to: email,
        subject: "Your 2FA Code from Wei Yang",
        html: `<h2>Your 2FA Code:</h2><h1>${otp}</h1><p>Expires in 5 minutes</p>`
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Failed to send email" });
        }
        console.log("Email sent:", info.response);
        return res.json({ message: "OTP sent" });
    });
});

// ensure the input opt is == generate opt and is not expires yet)
app.post("/verify-otp", (req, res) => {
    const { email, otp } = req.body;
    const record = otpStore[email];

    if (!record) return res.status(400).json({ message: "No OTP sent" });
    if (Date.now() > record.expires) return res.status(400).json({ message: "OTP expired" });
    if (Number(otp) !== record.otp) return res.status(400).json({ message: "Incorrect OTP" });


    // delete the otp and allow them to login to next page
    delete otpStore[email];
    res.json({ message: "OTP verified" });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
