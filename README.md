EcoSave Project
===============

Project Overview
----------------
EcoSave is an interactive web platform designed to help young people discover and participate in environmental volunteer activities. By combining eco-friendly actions with a gamified reward system, EcoSave motivates users to take meaningful steps toward sustainability. Users can earn points for participating in events, advance through a circular puzzle system with milestone bonuses, and access lucky draws for rewards, including premium prizes.

Features
--------
1. Browse and join environmental events with clear descriptions and impact information.
2. Earn EcoSave points for participation.
3. Gamified Collectible Puzzle System with 100-step circular track and bonus milestones.
4. Lucky Draw system for redeeming points and winning prizes.
5. Track points and progress via local storage.
6. Smooth UI animations (powered by anime.js) and responsive scrolling features.
7. Navigation helpers: scroll to events section, go to event details, back button, navbar shrink on scroll, footer highlight.

Installation / Setup
-------------------
1. Clone or download the project folder.
2. Open `home.html` in a web browser 
3. Ensure internet connection for loading anime.js from CDN:
   `<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>`
4. Your main JS file (`home_and_events_detail.js`) should be loaded after anime.js.
5. Local storage will store user points and last attended event.

Usage
-----
- Navigate the homepage to browse eco-friendly events.
- Click on an event to attend and earn Eco Points.
- Points contribute to the circular puzzle system and unlock bonus rewards.
- Complete the puzzle cycle to access the Lucky Draw for exciting prizes.
- Track your progress in real-time via the user interface.

Technologies Used
-----------------
- HTML5, CSS3, JavaScript
- Anime.js for animations
- Local Storage for persistent user points

Notes / Known Issues
-------------------
- Ensure anime.js is loaded before your script to avoid `ReferenceError: anime is not defined`.
- The project is designed for browser usage and may not work correctly in Node.js environments.
- Local Storage is per browser; switching browsers will reset points.

Contributors
------------
- Wei Yang, Cheng En, Wee Keat

License
-------
This project is for educational/demo purposes. Modify and use freely for non-commercial purposes.

