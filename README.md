# OH1 Membership Navigator PWA

This package contains a standalone troubleshooting PWA. It does not save club names, user names, answers, assessments, or progress.

## Features

1. One question at a time
2. Automatic branching
3. Membership finding
4. Recommended actions
5. Discussion questions
6. Back and restart controls
7. Printable result
8. Installable PWA support
9. Offline support after the first successful visit

## Test it on a computer

Run the folder through a local web server:

    python -m http.server 8000

Then open:

    http://localhost:8000

Installation and offline support require a web server or hosted HTTPS site.

## Free hosting

The files can be uploaded to GitHub Pages, Cloudflare Pages, or Netlify. No database is required.

## Editing the content

Open app.js. The questions section controls the wording and routing. The results section controls findings, recommended actions, and discussion questions.

## Privacy

Answers remain only in the page while the assessment is open. Restarting or closing the page clears the assessment.
