# CSUN Physics Tutoring Campaign & Intake System

Digital landing page and printable campaign collateral for in-person physics tutoring at California State University, Northridge (CSUN), tailored for non-physics STEM majors (`PHYS 100A`, `PHYS 100AL`, `PHYS 100B`, `PHYS 100BL`).

## Architecture & Privacy Model

To insulate personal contact information from public exposure, email addresses (`keithowen@protonmail.com`) are removed from all flyers and web pages. Students reach Keith through:
1. **The Digital Intake Webpage**: Captures student name, phone number, CSUN email, course selection, professor, and target focus areas.
2. **Direct Call / Text**: Urgently connects via `213-532-8781` with pre-filled SMS prompts.

---

## Files

- `index.html`: Production landing page with responsive intake form, dark CSUN theme, micro-animations, phone formatting, anti-spam honeypot, and confirmation modal.
- `flyer.html`: High-contrast, printable 8.5" &times; 11" campus flyer with 8 vertical tear-off tabs and dynamic QR code linking to the intake landing page.
- `HISTORY.md`: Keep-a-Changelog project history.

---

## Deployment (GitHub Pages)

This repository is built for zero-cost, static hosting on GitHub Pages:
1. Push this directory to `KeithOwns/csun-physics-tutoring` on GitHub.
2. In GitHub repository settings: **Settings > Pages > Branch**: select `main` (root) and save.
3. The page will be published at:
   `https://keithowns.github.io/csun-physics-tutoring/`

---

## Formspree Integration (Optional)

By default, the form gracefully saves submissions to `localStorage` and provides an instant confirmation modal so students immediately see that their request was received.

To receive email notifications whenever a student fills out the form:
1. Sign up for free at [Formspree](https://formspree.io) and create a form.
2. Replace `YOUR_FORM_ID` in `index.html` on line 421:
   ```html
   <form id="tutoringIntakeForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
3. Submissions will now be emailed directly to Keith's inbox without ever exposing the email address on the public web.

---

## Printing the Flyer

1. Open `flyer.html` in Chrome, Edge, or Firefox.
2. Press `Ctrl + P` (Print).
3. Set **Destination** to "Save as PDF" or select your printer.
4. Verify:
   - **Paper size**: Letter (8.5" &times; 11")
   - **Margins**: Default or None
   - **Headers and footers**: Unchecked
5. Cut the vertical lines along the bottom tear-off tabs and post across Live Oak Hall, Eucalyptus Hall, and Noski Auditorium bulletin boards.
