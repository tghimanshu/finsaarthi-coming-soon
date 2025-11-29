# Finsaarthi Coming Soon Page

This repository contains the source code for the "Coming Soon" landing page for Finsaarthi. The page features a countdown timer and a subscription form to collect user interests before the full launch.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation and Usage](#installation-and-usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Overview
The Finsaarthi "Coming Soon" page is designed to inform visitors about the upcoming launch of the financial services platform. It provides a visual countdown to the launch date and allows users to subscribe via email to receive updates.

## Features
- **Countdown Timer**: A real-time countdown to the specified launch date.
- **Subscription Form**: Captures user names and emails for the waiting list.
- **Form Validation**: Client-side validation to ensure valid email addresses are entered.
- **Responsive Design**: Optimized for viewing on desktops, tablets, and mobile devices.
- **Tilt Effect**: Interactive visual effect on the countdown timer.

## Tech Stack
This project is built using standard web technologies:
- **HTML5**: For page structure.
- **CSS3**: For styling (including animations and responsiveness).
- **JavaScript (ES5)**: For logic and interactivity.
- **jQuery**: Used for DOM manipulation and event handling.
- **Bootstrap 4**: For responsive layout and components.
- **Third-party Libraries**:
  - `Select2`
  - `Tilt.js`
  - `Moment.js` (for time handling)

## Installation and Usage
Since this is a static website, no build process or server-side installation is required.

1.  **Clone the repository**:
    ```bash
    git clone <repository_url>
    ```
2.  **Open the project**:
    Navigate to the project directory.
3.  **Run the site**:
    Simply open the `index.html` file in any modern web browser.

    Alternatively, you can serve it using a simple HTTP server like Python's `http.server` to avoid CORS issues with some local file access:
    ```bash
    python3 -m http.server
    ```
    Then visit `http://localhost:8000`.

## Project Structure
```
.
├── css/                # Stylesheets (main.css, util.css)
├── fonts/              # Font files (FontAwesome, Poppins, etc.)
├── images/             # Images and icons
├── js/                 # JavaScript source files (main.js)
├── vendor/             # Third-party libraries (jQuery, Bootstrap, etc.)
├── index.html          # Main entry point
└── README.md           # Project documentation
```

## Contributing
1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/YourFeature`).
5.  Open a Pull Request.
