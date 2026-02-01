# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal website for Anna Du (annadu.org), showcasing environmental science work and microplastics research. No build tools or backend - pure HTML/CSS/JavaScript served directly.

## Development & Deployment

**Local Development:**
- Open `docs/index.html` directly in a browser
- No build step, npm, or package.json

**Deployment Workflow:**
1. Make changes on `github-pages` branch
2. Push to `github-pages` → GitHub Action deploys to https://annadu5.github.io/annadu.org/ (testing)
3. After verification, merge to `master` → GitHub Action syncs to AWS S3 bucket `annadu.org`
4. Production site: annadu.org (points to annadu.org.s3-website-us-east-1.amazonaws.com)

## Architecture

**Content is data-driven via Vue.js:**
- `docs/js/app.js` - Contains all dynamic content (news items, videos, competitions, research) as JavaScript objects rendered by Vue.js 3.4.5
- `docs/index.html` - HTML structure with Vue.js template bindings (v-for, v-bind)
- `docs/js/main.js` - jQuery-based UI interactions (smooth scrolling, mobile menu, carousels)
- `docs/css/style.css` - Custom theme styling

**To update content:** Edit the data objects in `docs/js/app.js` (news, videos, competitions, research sections).

## Tech Stack

- Vue.js 3.4.5 (CDN) for reactive content rendering
- Bootstrap for responsive layout
- jQuery for DOM interactions
- Owl Carousel, Magnific Popup for UI components
- Formspree for contact form backend

## Infrastructure

- **Domain & DNS**: Cloudflare
- **Website Hosting**: AWS S3 static website (annadu.org.s3-website-us-east-1.amazonaws.com)
- **Email**: Google Workspace
