# Livio Acerbo Personal Site

This repository contains the source for a personal landing page styled with a Netflix-inspired theme. The site is built using plain HTML, CSS, and JavaScript and showcases ventures, insights, and social links in a responsive single-page layout.

## Project Structure
- `index.html` – Main webpage defining navigation, hero section, "Featured Ventures", statistics, "Featured Insights", social-media grid, and footer contact details.
- `styles.css` – Central style sheet providing theme variables, layout rules, responsive tweaks, and animation classes.
- `main.js` – Front-end script handling visibility checks, smooth scrolling, intersection-observer animations, RSS feed aggregation with fallbacks, and header behavior on scroll.
- `test-ventures.html` – Standalone page to verify the "Featured Ventures" section’s styling and markup without the main site’s JS dependencies.
- `test.html` – Simple JavaScript sandbox used to confirm DOM manipulation and dynamic insertion into the `latest-content` grid.

## Features
- Responsive single-page layout.
- "Latest Content" section that fetches and sorts articles from multiple RSS feeds.
- Scroll-triggered animations and interactive call-to-action elements.

## Getting Started
1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd livioacerbo
   ```
2. **Serve the site**
   - Open `index.html` directly in your browser, **or**
   - Serve the files with any static file server, for example:
     ```bash
     python -m http.server
     # then visit http://localhost:8000
     ```

## Testing
No automated tests are defined. You can manually verify sections using `test.html` or `test-ventures.html`.

## Contributing
Pull requests are welcome. Please ensure the site loads correctly in modern browsers and keep additions self-documenting and modular.

## License
No license has been specified. Please contact the repository owner for usage terms.

