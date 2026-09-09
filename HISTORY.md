# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added
- Created responsive CSUN Physics Tutoring landing page (`index.html`) with student intake form, instructor suggestions, focus radio toggles, and direct call/text fallbacks.
- Added printable 8.5" x 11" flyer template (`flyer.html`) with tear-off tabs and dynamic QR code linking to GitHub Pages.
- Added compiled 8.5" x 11" print-ready PDF flyer (`CSUN_PHYS_100_Tutoring_Flyer_Keith-v3.pdf`).
- Added Google Apps Script webhook integration (`google-apps-script.js` and `SETUP_LEADS_WEBHOOK.md`) for direct Google Sheets logging and instant email alerts.
- Added custom domain configuration (`CNAME` and `DNS_SETUP.md`) for `www.jarheadtutor.com`.
- Added client-side phone number formatting, form validation, anti-spam honeypot, and local storage submission backup.

### Changed
- Restored original clean white-card landing page design with high contrast, legible typography, and streamlined layout.
- Migrated student intake channel from printed personal email to web form.
- Updated flyer collateral (`flyer.html` and `CSUN_PHYS_100_Tutoring_Flyer_Keith-v3.pdf`) to feature `JarHeadTutor.com` in contact banner, QR code, and tear-off tabs.

### Fixed
- Fixed missing vertical dashed cut-line between the last two tear-off tabs on flyer collateral (`flyer.html` and compiled PDFs).

### Removed
- Removed public exposure of personal email address (`keithowen@protonmail.com`) from landing page and flyer collateral.
