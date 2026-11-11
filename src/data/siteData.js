import people from "../images/resptour/people.webp";
import ethos from "../images/resptour/ethos.webp";
import kerelacuisine from "../images/resptour/abhik-paul-Lsiv0oAIfFk-unsplash.jpg";
import heritage from "../images/resptour/heritage.avif";
import community from "../images/resptour/community.avif";
import artculture from "../images/resptour/artculture.avif";

import fort from "../images/resptour/ethos/fort.jpg";
import folly from "../images/resptour/ethos/folly.webp";
import church from "../images/resptour/ethos/church.jpg";
import mosque from "../images/resptour/ethos/mosque.jpg";
import temple from "../images/resptour/ethos/temple.jpg";

import spices from "../images/resptour/cuisine/spices.jpg";
import fish from "../images/resptour/cuisine/fish.jpg";
import tea from "../images/resptour/cuisine/tea.jpg";
import market from "../images/resptour/cuisine/market.jpg";
import jetty from "../images/resptour/cuisine/jetty.jpg";

export const images = {
  hero: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2200&q=88",
};
export const experiences = [
  {
    name: "Canoe Through the Backwaters",
    description:
      "Drift through quiet canals, shaded waterways and the peaceful landscapes of Vembanad Lake in a traditional canoe.",
    image: images.canoe,
    duration: "2–3 hours",
    tag: "On the water",
  },
  {
    name: "A Morning of Fishing",
    description:
      "Experience traditional fishing practices alongside local fishermen who know these waters best.",
    image: images.fishing,
    duration: "1–2 hours",
    tag: "Local tradition",
  },
  {
    name: "Explore by Bicycle",
    description:
      "Follow quiet village roads, pass coconut groves and discover the slower rhythms of everyday life around the estate.",
    image: images.cycling,
    duration: "2 hours",
    tag: "On land",
  },
  {
    name: "Discover the Hills",
    description:
      "Explore the beautiful landscapes, greenery and natural surroundings of Kerala.",
    image: images.hills,
    duration: "Half day",
    tag: "Nature",
  },
];

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
  kerelacuisine,
  heritage,
  community,
  artculture,
};

export const localethos = {
  fort,
  folly,
  church,
  mosque,
  temple,
};

export const cuisine = {
  spices,
  fish,
  tea,
  market,
  jetty,
};
