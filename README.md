# NOVA — Full-Stack Deployment & Project Architecture (Frontend Capstone)

A responsive e-commerce product catalogue built with HTML, CSS and modular vanilla JavaScript.

## Features
- Modular frontend: product data, cart state, routing and app rendering are separated into JavaScript modules.
- Client-side routing: Shop and Our Story pages use hash-based navigation.
- Product catalogue with category filters.
- Shopping bag with quantity controls and `localStorage` persistence.
- Responsive mobile and desktop layouts.
- Performance basics: small local SVG illustrations, lazy-loaded product images, CSS/JS split into separate files, semantic HTML and metadata.

## Run locally
1. Extract the ZIP.
2. Open the folder in Visual Studio Code.
3. Use the **Live Server** extension, or run `python -m http.server 8000` in the project folder.
4. Open `http://localhost:8000`.

Because JavaScript modules are used, do not open `index.html` directly as a `file://` URL.

## Deploy to Netlify (recommended)
1. Sign in to Netlify and choose **Add new project / Deploy manually**.
2. Drag the extracted project folder (the folder containing `index.html`) into the manual deploy area.
3. Wait for the deploy to finish. Netlify will provide a public URL.
4. Open that URL and test the Shop, Our Story, category filters and shopping bag.
5. Submit that public URL in your Thiranex task.

Alternative: import the folder from a GitHub repository into Vercel or Render as a static site. No build command is required; publish the project root.

## Important project scope
This is a frontend capstone demo. Product information is sample data, and checkout is intentionally a demo message. It does not include a server, database, user accounts or real payment processing. Do not enter real payment or personal details.

## Suggested submission description
NOVA is a responsive e-commerce product catalogue developed using HTML, CSS and modular JavaScript. It includes client-side routing, category filtering, a persistent shopping bag using localStorage, reusable product data and optimized local SVG assets. The project is deployment-ready and can be hosted as a static website on Netlify, Vercel or Render.
