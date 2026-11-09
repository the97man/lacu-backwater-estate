import CategoryPage from "../components/CategoryPage";
import { respTour } from "../data/siteData";

const sections = [
  {
    title: "Flavours of Kerala",
    description:
      "Discover the distinctive flavours of Kerala through traditional recipes, regional ingredients and the generous use of aromatic spices. Every dish reflects the culinary identity of the backwater region.",
    image: respTour.cuisine,
  },
  {
    title: "Fresh from the Land and Water",
    description:
      "Our cuisine takes inspiration from the abundance around us. Fresh local produce, seasonal ingredients and the region's remarkable variety of fish and seafood influence our menus.",
    image: respTour.cuisine,
  },
  {
    title: "Traditions on Every Plate",
    description:
      "Kerala's food traditions are rich with stories and generations of culinary knowledge. We celebrate these traditions through familiar flavours, thoughtful preparation and recipes worth sharing.",
    image: respTour.cuisine,
  },
  {
    title: "The Art of Spices",
    description:
      "Cardamom, pepper, cinnamon, cloves and other regional spices bring depth and character to Kerala's cuisine. Discover how these ingredients transform simple dishes into memorable experiences.",
    image: respTour.cuisine,
  },
  {
    title: "Dining at LAKŌ",
    description:
      "Whether enjoying a relaxed meal or a special dining experience, every moment around the table is an opportunity to slow down, savour the flavours and enjoy the hospitality of LAKŌ.",
    image: respTour.cuisine,
  },
];

export default function Cuisine() {
  return (
    <CategoryPage
      introduction="Food is an essential part of Kerala's identity. At LAKŌ, we celebrate the region's culinary heritage through fresh ingredients, traditional flavours and dining experiences inspired by the backwaters."
      sections={sections}
    />
  );
}
