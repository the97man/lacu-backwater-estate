import CategoryPage from "../components/CategoryPage";
import { heritage } from "../data/siteData";

const sections = [
  {
    title: "St. Francis Church, Fort Kochi",
    description:
      "Built in 1503, St. Francis Church is the oldest European-built church in India. Vasco da Gama was buried here before his remains were later moved to Lisbon — a small church that sat at the centre of Europe’s first foothold on the Malabar coast.",
    image: heritage.francis,
  },
  {
    title: "Paradesi Synagogue & Jew Town, Mattancherry",
    description:
      "The oldest active synagogue in the Commonwealth, built in 1568 by Kochi’s Jewish trading community. Jew Town’s narrow lanes around it still carry the spice-trade character that first brought the community here four centuries ago.",
    image: heritage.synagogue,
  },
  {
    title: "Mattancherry Palace (Dutch Palace)",
    description:
      "Built by the Portuguese and later renovated by the Dutch, this palace once housed the Kings of Kochi. Its walls carry some of Kerala’s finest surviving mural paintings, depicting scenes from the Ramayana in the state’s distinct temple-art style.",
    image: heritage.palace,
  },
  {
    title: "Santa Cruz Basilica, Fort Kochi",
    description:
      "Raised to a basilica by Pope John Paul II, Santa Cruz traces its roots to 1505 under Portuguese rule. Its soft pastel interior and painted ceiling are one of Fort Kochi’s quietest, least-crowded heritage stops.",
    image: heritage.basilica,
  },
  {
    title: "Chellanam’s Fishing-Community Churches",
    description:
      "Chellanam’s own churches anchor a fishing community with deep Syrian Christian roots. Feast days bring the whole village to the shore in procession — heritage that belongs to the people who live here, not to a monument.",
    image: heritage.fishing,
  },
  {
    title: "Bolgatty Palace",
    description:
      "Built in 1744, Bolgatty is the oldest Dutch palace outside the Netherlands, later used as the British Residency. Set on its own island in the backwaters, it’s a short boat ride from Fort Kochi and a glimpse of the colonial era that shaped this coast.",
    image: heritage.bolgatty,
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
