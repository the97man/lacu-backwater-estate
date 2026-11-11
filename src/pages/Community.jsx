import CategoryPage from "../components/CategoryPage";
import { community } from "../data/siteData";

const sections = [
  {
    title:
      "Walk through tea plantations, exploring local cultivation and worker life.",
    description:
      "Guests walk through the tea plantations, offering insight into local cultivation practices and the daily lives of plantation workers.",
    image: community.plantation,
  },
  {
    title:
      "Cruise Kerala’s backwaters to experience unique, vibrant daily water-based life.",
    description:
      "Cruise through an enchanting network of canals, lakes, and lagoons, offering an intimate glimpse into Kerala’s unique water-based lifestyle. Observe how daily life unfolds along the backwaters, where residents travel, fish, bathe, and carry out household activities by the water’s edge. Witness locals engaging in conversations while standing waist-deep in the water, reflecting their deep connection to this environment. Local vendors navigate the waterways to supply daily essentials, and even public transport operates on water. summarize in 10 words",
    image: community.backwater,
  },
  {
    title:
      "Visit Srishti Welfare Centre to explore handcrafts supporting differently-abled artisans.",
    description:
      "Stop at the Srishti Welfare Centre, an initiative by Tata Global Beverages dedicated to the rehabilitation and empowerment of differently abled individuals. Engage with the local community, observe their artisanal practices, and enjoy some time exploring and purchasing handicrafts that support this social initiative",
    image: community.handcraft,
  },
  {
    title: "Observe local farmers working in the fields during harvest season.",
    description:
      "During the harvest season, one finds farmers working in the fields most of the day. The early hours of the day brings to us the sight of women carrying sickles to the fields while men are busy sowing seeds and getting rid of weeds.",
    image: community.communityfarmer,
  },
  {
    title:
      "Experience Kerala’s oldest snake boat regatta during the Onam festival.",
    description:
      "The Aranmula Uthrattathi Vallamkali is the oldest river carnival in Kerala. It is held during the festival of Onam (August-September). It takes place at Aranmula, near a Hindu temple dedicated to Lord Krishna and Arjuna. The traditional 'Palliyodams' or snake boats move in groups up and down the river to the rhythm of full-throated singing of traditional songs known as 'Vallappattu'. The regatta is performed as an offering to Sri Parthasarathy and thousands of people gather on the banks of the river Pampa to watch it.",
    image: community.boat,
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
