# Project Overview

This is the personal website of Anna Du, a student and environmental advocate. The website showcases her work, research, and news articles related to her projects, primarily focusing on microplastics pollution.

It's a static website built with:
- **Vue.js 3:** For rendering dynamic content like news, videos, and research papers from JavaScript data objects.
- **Bootstrap:** For the responsive layout.
- **jQuery:** For UI interactions.

The website is hosted on AWS S3 and deployed automatically via GitHub Actions.

## Building and Running

No build tools are required for local development. Simply open `docs/index.html` in a web browser.

The deployment process is automated with GitHub Actions:
- Pushing to the `github-pages` branch deploys to a testing site.
- Merging to the `master` branch triggers a sync of the `docs/` directory to the production AWS S3 bucket.

## Development Conventions

- All website files are located in the `docs/` directory.
- Dynamic content (news, videos, publications, etc.) is managed in `docs/js/app.js`. To update the website's content, edit the JavaScript objects in this file.
- The `master` branch is the production branch. All development should be done on other branches (like `github-pages`) and merged into `master` after verification.

## Key Files

- **`docs/index.html`**: The main HTML file and entry point for the website.
- **`docs/js/app.js`**: Contains all the data for the website's content, structured as Vue.js data objects. This is the primary file to edit when updating content.
- **`docs/css/style.css`**: Contains the custom CSS for the website.
- **`.github/workflows/main.yml`**: Defines the GitHub Actions workflow for deploying the website to AWS S3.
- **`scripts/generator.py`**: A Python script to generate sample data. It is not used for the website itself but was likely part of a science project.
