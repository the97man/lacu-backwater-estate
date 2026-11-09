import people from "../images/resptour/people.webp";
import ethos from "../images/resptour/ethos.webp";
import cuisine from "../images/resptour/cuisine.avif";
import heritage from "../images/resptour/heritage.avif";
import community from "../images/resptour/community.avif";
import artculture from "../images/resptour/artculture.avif";

export const images = {
  hero: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2200&q=88",
  lake: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=85",
  villa:
    "https://images.unsplash.com/photo-1688653802629-5360086bf632?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  room: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85",
  pool: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1400&q=85",
  canoe:
    "https://plus.unsplash.com/premium_photo-1661952057994-22fb8dd3a590?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  fishing:
    "https://static2.tripoto.com/media/filter/nl/img/461838/TripDocument/1513691086_angler_1585035_1280.jpg.webp",
  cycling:
    "https://images.unsplash.com/photo-1675254582903-47ae31537986?q=80&w=1261&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  hills:
    "https://images.unsplash.com/photo-1627894485200-b92fb4353967?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  food: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
  village:
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1400&q=85",
};

export const villas = [
  {
    name: "Aravalli Villa",
    label: "Villa One",
    price: "₹25,000",
    beds: "2 bedrooms · sleeps 4",
    feature: "Private jetty",
    image: images.villa,
    description:
      "The largest of the three in lake frontage. Two bedrooms, a living pavilion open on three sides, and a private jetty for your own canoe. Breakfast is served at the water’s edge, weather allowing.",
  },
  {
    name: "Himalaya Villa",
    label: "Villa Two",
    price: "₹20,000",
    beds: "1 bedroom · sleeps 2",
    feature: "Plunge pool",
    image: images.pool,
    description:
      "Built for two. A single bedroom opens directly onto a shaded sit-out and a small plunge pool, screened from the other villas by a stand of coconut palms.",
  },
  {
    name: "Girivan Villa",
    label: "Villa Three",
    price: "₹22,000",
    beds: "2–3 bedrooms · sleeps up to 6",
    feature: "Garden pavilion",
    image: images.room,
    description:
      "Two to three bedrooms gathered around a garden pavilion, made for families or small groups travelling together. Still private, still exclusive — with room to settle in.",
  },
];

export const respTour = {
  people,
  ethos,
  cuisine,
  heritage,
  community,
  artculture,
};
