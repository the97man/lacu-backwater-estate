import CategoryPage from "../components/CategoryPage";
import { respTour } from "../data/siteData";

const sections = [
  {
    title: "An Expression of Kerala",
    description:
      "Kerala's artistic identity is expressed through its colours, performances, craftsmanship and traditions. Discover the creative spirit that makes the region culturally distinctive.",
    image: respTour.artculture,
  },
  {
    title: "The Rhythm of Tradition",
    description:
      "Traditional music and dance are an important part of Kerala's cultural identity. Their expressive movements, distinctive rhythms and elaborate performances tell stories that have endured for generations.",
    image: respTour.artculture,
  },
  {
    title: "Crafted by Hand",
    description:
      "Local artisans preserve remarkable skills through textiles, woodwork, traditional objects and decorative crafts. Their work reflects patience, creativity and a deep connection to cultural heritage.",
    image: respTour.artculture,
  },
  {
    title: "Festivals and Celebrations",
    description:
      "Kerala's festivals bring communities together through music, colour, rituals and shared celebrations. They offer a glimpse into the traditions and beliefs that continue to shape local life.",
    image: respTour.artculture,
  },
  {
    title: "Keeping Culture Alive",
    description:
      "Culture remains meaningful when it is experienced, celebrated and passed on. We value the artists, performers and craftspeople who continue to preserve Kerala's creative traditions.",
    image: respTour.artculture,
  },
];

export default function ArtCulture() {
  return (
    <CategoryPage
      introduction="Art and culture are woven into everyday life in Kerala. From traditional performances and handmade crafts to vibrant festivals, discover the creative traditions and cultural expressions that make this region unique."
      sections={sections}
    />
  );
}
