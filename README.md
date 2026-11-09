# LAKŌ Backwater Estate — React + Vite + Tailwind CSS

A responsive multi-page frontend concept for LAKŌ, inspired by the editorial storytelling, destination-led presentation and clear guest journeys of Swinton Estate. The original LAKŌ copy and property structure have been carried forward and reorganised into a more immersive experience.

## Run locally

Requirements: Node.js 18 or newer.

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
  components/
    Footer.jsx
    Header.jsx
    PageHero.jsx
    SectionHeading.jsx
    VillaCard.jsx
  data/
    siteData.js
  pages/
    Booking.jsx
    RespTour.jsx
    Home.jsx
    Story.jsx
    Villas.jsx
  App.jsx
  index.css
  main.jsx
index.html
```

## Before publishing

1. Replace the demo Unsplash image URLs in `src/data/siteData.js` with approved LAKŌ photography. The current images are visual placeholders and should not be represented as photographs of the actual estate.
2. In `src/pages/Booking.jsx`, replace `CONTACT_EMAIL` and the displayed contact details with confirmed LAKŌ contact information.
3. Add the live channel-manager / Smart Hands reservation URL to `BOOKING_URL` in `src/pages/Booking.jsx`. Until then, the page deliberately shows a clear setup note rather than a fake booking action.
4. Confirm villa rates, capacities, inclusions, team details and responsible-tourism statements with the estate before launch. The supplied HTML labels some information as a design preview or pending confirmation.
5. Connect the enquiry form to a real form service or backend if you want enquiries collected without relying on the visitor's email application. The current form prepares an email using `mailto:`.

## Notes

- Tailwind CSS 3 is configured through `tailwind.config.js` and `postcss.config.js`.
- React Router provides separate pages for Home, The Villas, Experiences, Our Story and Booking.
- Mobile navigation, route scroll reset and the enquiry form are implemented.
- No booking, payment, inventory or channel-manager integration is claimed to be active.
