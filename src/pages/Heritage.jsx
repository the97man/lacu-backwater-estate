import CategoryPage from "../components/CategoryPage";
import { respTour } from "../data/siteData";

const sections = [
  {
    title: "Stories of the Past",
    description:
      "Kerala's history is woven into its landscapes, architecture and everyday traditions. Discover the stories that have shaped this remarkable region and continue to influence its identity.",
    image: respTour.heritage,
  },
  {
    title: "A Land of Many Influences",
    description:
      "For centuries, Kerala has welcomed traders, travellers and cultures from across the world. These encounters have contributed to its distinctive architecture, traditions and way of life.",
    image: respTour.heritage,
  },
  {
    title: "Architecture with a Story",
    description:
      "Traditional Kerala architecture reflects a close relationship with climate, materials and the natural environment. Its distinctive forms and craftsmanship remain an important part of the region's heritage.",
    image: respTour.heritage,
  },
  {
    title: "Traditions Passed Through Generations",
    description:
      "From everyday customs to celebrated festivals, Kerala's traditions carry the knowledge and memories of generations. They remain an important connection between the past and present.",
    image: respTour.heritage,
  },
  {
    title: "Discover the Heritage of Kerala",
    description:
      "Explore the places, stories and cultural landmarks that make this region unique. Every journey offers another perspective on Kerala's fascinating history and enduring character.",
    image: respTour.heritage,
  },
];

export default function Heritage() {
  return (
    <CategoryPage
      introduction="Kerala is a land shaped by centuries of history, cultural exchange and enduring traditions. At LAKŌ, we invite you to discover the stories, architecture and heritage that give this region its distinctive character."
      sections={sections}
    />
  );
}
