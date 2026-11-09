import CategoryPage from "../components/CategoryPage";
import { respTour } from "../data/siteData";

const sections = [
  {
    title: "Connected by Community",
    description:
      "The spirit of LAKŌ is closely connected to the people who call this region home. Their stories, knowledge and hospitality are an essential part of what makes the backwaters special.",
    image: respTour.community,
  },
  {
    title: "Local People, Local Opportunities",
    description:
      "We believe tourism should create meaningful opportunities for the surrounding community. Working with local people allows us to support livelihoods while sharing the region's authentic character with our guests.",
    image: respTour.community,
  },
  {
    title: "Celebrating Local Skills",
    description:
      "From traditional craftsmanship to regional knowledge, the community holds skills that deserve recognition. We value the people who keep these practices alive and pass them on to future generations.",
    image: respTour.community,
  },
  {
    title: "Sharing Everyday Life",
    description:
      "Some of the most memorable experiences come from simple everyday moments. We encourage meaningful interactions that allow guests to understand the local way of life beyond the usual tourist experience.",
    image: respTour.community,
  },
  {
    title: "Growing Together",
    description:
      "Our relationship with the community is an ongoing commitment. Through collaboration, respect and shared opportunities, we hope to contribute positively to the place we are fortunate to call home.",
    image: respTour.community,
  },
];

export default function Community() {
  return (
    <CategoryPage
      introduction="A place is defined by its people. At LAKŌ, our connection with the surrounding community is at the heart of our identity. We believe in creating opportunities, celebrating local knowledge and growing together."
      sections={sections}
    />
  );
}
