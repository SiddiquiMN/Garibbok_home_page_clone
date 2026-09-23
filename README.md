<!-- Done by M N Alam Siddiqui -->
# Garibook Homepage Clone

A responsive frontend clone of the Garibook homepage, built using React and Vite. The project includes an animated Hero section, interactive service tabs, a booking form interface, and smooth scrolling features.

## Features

- Responsive layout for desktop and mobile devices
- Animated Hero heading with a typewriter effect
- Interactive Our Services tabs
- Booking form user interface
- Smooth animations using GSAP
- Back-to-top button
- Custom favicon and consistent typography

## Technologies Used

- React
- Vite
- JavaScript
- HTML5
- CSS3
- GSAP

## Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (a version compatible with the project's Vite version)
- npm (included with Node.js)
- Git (optional, if cloning the repository)

To check your installed versions, run:

```bash
node --version
npm --version
```

## How to Run the Project Locally

### 1. Download the project

Clone the GitHub repository:

```bash
git clone https://github.com/YOUR_USERNAME/garibook-clone.git
```

Replace `YOUR_USERNAME` with the actual GitHub username.

Alternatively, download the repository as a ZIP file from GitHub and extract it.

### 2. Open the project folder

```bash
cd garibook-clone
```

### 3. Install dependencies

```bash
npm install
```

This installs the packages required to run the application.

### 4. Start the development server

```bash
npm run dev
```

Vite will display a local URL in the terminal, usually:

```text
http://localhost:5173/
```

Open the URL shown in your terminal using a web browser.

To stop the development server, press `Ctrl + C` in the terminal.

## Build for Production

To generate an optimized production build, run:

```bash
npm run build
```

The production-ready files will be generated in the `dist` folder.

To preview the production build locally, run:

```bash
npm run preview
```

Open the URL displayed in the terminal.

## Project Structure

```text
garibook-clone/
├── public/              # Public assets
├── src/
│   ├── components/      # React components
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   └── main.jsx         # Application entry point
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## Important Notes

- This project is a frontend homepage clone created for learning and demonstration purposes.
- The booking form is a user interface; it is not connected to a live booking backend.
- An internet connection may be required to load externally hosted images, icons, or fonts.

## Disclaimer

This is an independently developed frontend clone for educational purposes and is not affiliated with or endorsed by Garibook.