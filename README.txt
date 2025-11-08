Triple Bean Cafe — Static Site
==============================

Files
-----
- index.html — main page
- styles.css — site styling
- images/ — inline SVG artwork (logo, icons, hero, favicon)

How to run
----------
Just open index.html in a browser. For local network hosting, any static server will do, e.g.:

Python (built-in):
    cd triple-bean-cafe
    python -m http.server 8000

Then visit http://<your-lan-ip>:8000

Notes
-----
- All graphics are vector SVGs for crisp display.
- The theme adapts to light/dark based on system preference.
- Edit colors in :root within styles.css if you want a different palette.
