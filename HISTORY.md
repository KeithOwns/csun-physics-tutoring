# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added
- Added mobile browser theme-color and status bar meta styling to `index.html` seamlessly matching the dark slate theme.
- Added inline SVG atom favicon (`⚛️`) to `index.html`, eliminating 404 favicon requests and establishing visual tab/bookmark branding.
- Added OpenGraph and Twitter Card social sharing meta tags to `index.html` for rich visual preview cards when sharing links via SMS, iMessage, WhatsApp, and social platforms.
- Added dynamic multi-campus targeting to `index.html` supporting CSUN, Pierce College, LA Valley College, LA Mission College, College of the Canyons, UCLA, and Moorpark College.
- Added URL query parameter detection (`?school=pierce`, `?school=ucla`, `?school=lavc`, etc.) to automatically customize page header, courses, and instructor options.
- Added sticky mobile quick-action bar with one-tap SMS text and smooth-scroll session booking.
- Added session format selection (Flexible, Online Zoom Whiteboard, In-Person).
- Created responsive CSUN Physics Tutoring landing page (`index.html`) with student intake form, instructor suggestions, focus radio toggles, and direct call/text fallbacks.
- Added printable 8.5" x 11" flyer template (`flyer.html`) with tear-off tabs and dynamic QR code linking to GitHub Pages.
- Added compiled 8.5" x 11" print-ready PDF flyer (`CSUN_PHYS_100_Tutoring_Flyer_Keith-v3.pdf`).
- Added Google Apps Script webhook integration (`google-apps-script.js` and `SETUP_LEADS_WEBHOOK.md`) for direct Google Sheets logging and instant email alerts.
- Added custom domain configuration (`CNAME` and `DNS_SETUP.md`) for `www.jarheadtutor.com`.
- Added client-side phone number formatting, form validation, anti-spam honeypot, and local storage submission backup.

### Changed
- Expanded Google Apps Script webhook logging and instant email alerts (`google-apps-script.js` and `SETUP_LEADS_WEBHOOK.md`) to capture Campus and Session Format across 10 spreadsheet columns.
- Broadened website title and meta descriptions for multi-campus and online physics coaching reach across the San Fernando Valley and Los Angeles.
- Updated intake form contact section on `index.html` to allow prospective students to enter cell, email, or both, with helper text and validation requiring at least one contact method.
- Tailored submission confirmation messaging to reflect whether the student provided a phone number, email address, or both.
- Updated Google Apps Script webhook notification (`google-apps-script.js` and `SETUP_LEADS_WEBHOOK.md`) to dynamically render quick actions for call, text, or email based on student input.
- Realigned flyer contact banner into a balanced 3-column layout (Phone, Website, QR code) with vertical dividers, eliminating dead space and typography inconsistencies.
- Restored original clean white-card landing page design with high contrast, legible typography, and streamlined layout.
- Migrated student intake channel from printed personal email to web form.
- Updated flyer collateral (`flyer.html` and `CSUN_PHYS_100_Tutoring_Flyer_Keith-v3.pdf`) to feature `JarHeadTutor.com` in contact banner, QR code, and tear-off tabs.

### Fixed
- Converted Google Fonts stylesheet in `index.html` to asynchronous preloaded loading with immediate system font fallback, eliminating render-blocking blank white screen hangs on congested or restricted mobile/Wi-Fi networks.
- Expanded `DNS_SETUP.md` with complete GitHub Pages dual-stack DNS configuration, adding four IPv6 `AAAA` records and verifying all four IPv4 `A` records for apex domain resilience.
- Fixed SMS text functionality across `index.html` by replacing erroneous `tel:` URL in direct contact footer with `sms:2135328781`.
- Removed `?body=` URL parameter from `sms:` links that broke native Messages app launch on iOS devices.
- Added desktop clipboard fallback toast copying `(213) 532-8781` whenever SMS links are clicked on non-mobile devices.
- Provisioned SSL certificate and enabled HTTPS enforcement for custom domains `jarheadtutor.com` and `www.jarheadtutor.com`.
- Fixed missing vertical dashed cut-line between the last two tear-off tabs on flyer collateral (`flyer.html` and compiled PDFs).

### Removed
- Removed public exposure of personal email address (`keithowen@protonmail.com`) from landing page and flyer collateral.
