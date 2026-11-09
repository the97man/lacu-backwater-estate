import CategoryPage from "../components/CategoryPage";
import { respTour } from "../data/siteData";

const sections = [
  {
    title: "Living in Harmony with Nature",
    description:
      "At LAKŌ, our philosophy begins with respect for the natural world. The backwaters, surrounding greenery and local landscape shape the way we live, welcome guests and care for our surroundings.",
    image: respTour.ethos,
  },
  {
    title: "A Lighter Way to Stay",
    description:
      "We believe meaningful hospitality should leave a gentle footprint. From thoughtful resource use to responsible everyday practices, we work to make every stay more considerate of the environment.",
    image: respTour.ethos,
  },
  {
    title: "Inspired by the Backwaters",
    description:
      "The rhythms of the Vembanad backwaters influence life at LAKŌ. We embrace the changing seasons, the movement of the water and the quiet beauty of the landscape around us.",
    image: respTour.ethos,
  },
  {
    title: "Rooted in Local Traditions",
    description:
      "Our approach draws inspiration from Kerala's traditional way of life. We celebrate local knowledge, craftsmanship and customs that have been shaped by generations living close to nature.",
    image: respTour.ethos,
  },
  {
    title: "Preserving What Matters",
    description:
      "We see ourselves as caretakers of this special place. Protecting its natural character and supporting a more sustainable future are responsibilities that guide our decisions every day.",
    image: respTour.ethos,
  },
];

export default function LocalEthos() {
  return (
    <CategoryPage
      introduction="Our ethos is shaped by the land, water and people around us. At LAKŌ, we believe in thoughtful hospitality, meaningful connections and living in harmony with the natural beauty of Kerala."
      sections={sections}
    />
  );
}
