import CategoryPage from "../components/CategoryPage";
import { artculture } from "../data/siteData";

const sections = [
  {
    title:
      "Enjoy summer temple festivals, scenic village walks, and artisan crafts.",
    description:
      "Come summer around March April the village comes to life for the annual temple festival. Village walks by the river, across the fields and along the small meandering bylanes are unforgettable joys. You can also indulge in fishing, pottery making or interaction with artisans as part of your village experience.",
    image: artculture.festival,
  },
  {
    title:
      "Explore Guruvayur’s historic Sree Krishna Temple, a popular pilgrimage site.",
    description:
      "Guruvayur is home to the historic Sree Krishna Temple, called the Dwaraka of the South. It is among the most revered and popular pilgrimage destinations in Kerala and the entire country. The central shrine is believed to have been rebuilt in 1638 C.E. Only Hindus are allowed inside the Temple with proper dress code, one can experience the Temple harmony along with the occasional cultural performances near at the open Theatre.",
    image: artculture.temple,
  },
  {
    title:
      "Experience traditional Kathakali dance drama at Greenix Village Cultural Center.",
    description:
      "Enjoy a cultural evening at Greenix Village Cultural Center and discover the famous dance drama of Kerala, the “Kathakali” show. This dance can be characterized by grotesque gesticulations, amazing costumes and very extensive make-up. The stories are mostly taken from the epics Mahabharatha and Ramayana",
    image: artculture.dance,
  },
  {
    title:
      "Explore Trivandrum’s vibrant, 18th-century Chalai market, named after Chaliya traders.",
    description:
      "This evening, explore the Chalai market. The Diwan of Travancore “Raja” Kesava Das established this ever-vibrant market during the closing years of the 18th century. The name ‘Chalai’ originated from the community of traders, the chaliyas as they started to influence the cultural and linguistic tradition of the city",
    image: artculture.trader,
  },
  {
    title:
      "Experience Ottappalam’s cultural festivals and Kannur’s pristine beaches and rituals.",
    description:
      "Experience the rural traditions in Ottappalam, a cultural hub known for its festivals and heritage homes. Head to Kannur, where long, pristine beaches and centuries-old rituals offer a unique insight into the region's traditions",
    image: artculture.beach,
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
