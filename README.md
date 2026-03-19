# Rock, Paper, Scissors += Lizard, Spock

This is my solution to the Rock, Paper, Scissors challenge on Frontend Mentor. I implemented both the classic game and the advanced bonus mode.

## Quick Links

* **[Live Demo Site](https://assem44.github.io/rock-paper-scissors-game)**
* **[Frontend Mentor Challenge Page](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH)**

## Features

* **Two Game Modes:** A custom toggle switch to change between the Classic mode and the Advanced (Bonus) mode (Lizard, Spock).
* **Score Persistence:** The player's score is saved using the browser's `localStorage`, so it remains even if the page is refreshed.
* **Rules Modal:** A popup modal displaying the correct game rules depending on the active mode.
* **Responsive Layout:** Built with a Mobile-First approach, scaling up smoothly to desktop screens.
* **Animations:** Added keyframe animations (like the pulse effect for the winner) for a better user experience.

## Built With

* Semantic HTML5
* CSS Flexbox & Grid
* Mobile-first workflow
* Vanilla JavaScript 

## Project Structure

To keep the codebase clean and maintainable, I separated the core logic from the bonus features:
* **CSS:** `style.css` (core styles and layout) & `bonus.css` (overrides for the advanced mode).
* **JS:** `main.js` (game logic, score calculation, DOM manipulation) & `bonus.js` (toggle logic and UI updates).

## Screenshots

### Classic Mode
![Mobile Classic](./screenshots/mobile-normal.jpg)
![Desktop Classic](./screenshots/desktop-normal.jpg)

### Bonus Mode
![Mobile Bonus](./screenshots/mobile-bonus.jpg)
![Desktop Bonus](./screenshots/desktop-bonus.jpg)
