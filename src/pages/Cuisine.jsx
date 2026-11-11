import CategoryPage from "../components/CategoryPage";
import { cuisine } from "../data/siteData";

const sections = [
  {
    title: "Where ancient spices drew the world to the Malabar Coast.",
    description:
      "Spices shaped Kerala’s tryst with destiny. It was the fragrance of spice that awakened the curiosity of the explorers. Many braved mighty oceans and seas to seek this land out for its veritable treasure. Kerala’s spice trade with the world dates back to the 3rd millennium BCE. The Malabar Coast of Kerala was witness to the arrival of Arabs, Chinese, and European powers like the Portuguese, the French and the British. The spices of Kerala had become the most treasured and traded commodity.",
    image: cuisine.spices,
  },
  {
    title: "Savor fresh backwater catches on houseboats near local toddy shops",
    description:
      "The catch of the day, fresh from the backwaters, is brought to your plate by the staff of houseboats. On your way, you will certainly get a chance to see huts where toddy – a local brew made from the sap of the coconut tree - is served. These small shops are a ubiquitous part of Kerala’s landscape.",
    image: cuisine.fish,
  },
  {
    title:
      "Experience orthodox tea cultivation, plucking, and processing at historic Pattumalay.",
    description:
      "Visit Pattumalay Heritage Tea factory, gives you first-hand experience of the production of tea. You can watch every part of the process including cultivation, plucking and the processing in factory. Even a casual visitor would not miss the sight of women plucking the tender tea leaves and filling up huge bags tied to their backs.. Pattumalay estate is a major producer of Orthodox tea and the oldest orthodox tea factory. ",
    image: cuisine.tea,
  },
  {
    title: "Explore Cumbum Valley vegetable farms and a bustling local market.",
    description:
      "the day’s culinary exploration begins with a guided visit to vegetable farms in the fertile Cumbum Valley, a region sustained by the waters of Periyar Lake. Guests gain insight into seasonal produce, cultivation methods, and the agricultural practices that support everyday Kerala cooking. Later in the morning, a guided walk through a local vegetable market offers an opportunity to observe how fresh produce is selected, handled, and purchased in daily household life. Guests are encouraged to engage with vendors and experience the market from a local perspective.",
    image: cuisine.market,
  },
  {
    title:
      "Enjoy a scenic houseboat cruise featuring authentic Kerala backwater cuisine",
    description:
      "Guests travel to a backwater jetty to begin a leisurely cruise through Kerala’s scenic inland waterways aboard a traditional houseboat. As the vessel glides through narrow canals and village landscapes, guests gain insight into the backwater lifestyle that has shaped the region’s culinary traditions. A freshly prepared lunch featuring regional specialties is served on board, highlighting ingredients and flavors native to the backwater communities",
    image: cuisine.jetty,
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
