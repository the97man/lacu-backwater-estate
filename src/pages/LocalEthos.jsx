import CategoryPage from "../components/CategoryPage";
import { localethos } from "../data/siteData";

const sections = [
  {
    title: "Thalassery Fort",
    description:
      "Constructed in 1708 by the British East India Company, Thalassery Fort stands as one of the finest surviving examples of colonial military architecture on the Malabar Coast. Built to protect the Company's trading interests, the square-shaped fort features massive laterite walls, intricately carved wooden doors, and secret tunnels leading to the sea. Once the administrative and commercial centre of British Thalassery, the fort now serves as an important historical monument. From its ramparts, visitors can enjoy views of the reconstructed Holy Rosary Church and the picturesque ruins of the old Anglican Church, nestled amidst lush greenery.",
    image: localethos.fort,
  },
  {
    title: "Overbury's Folly",
    description:
      "Perched atop a rocky promontory overlooking the Arabian Sea, Overbury's Folly is a charming colonial-era picnic spot built by E. M. Overbury, a British judge who served in Thalassery during the 1870s. The site offers spectacular sea views and is home to a distinctive circular colonial bungalow, which has since been converted into a restaurant, making it an ideal place to relax and enjoy the coastal scenery.",
    image: localethos.folly,
  },
  {
    title: "CSI Christ Church",
    description:
      "Located in the heart of Thalassery, CSI Christ Church is an architectural landmark that reflects the town's religious and educational heritage. Established in 1864 by the Basel Mission evangelist Dr. Hermann Gundert's contemporary Dr. Reinhardt, the church showcases classic Basel Mission architecture. Its elegant bell tower, Gothic arches, stained-glass windows, hanging lamps, and beautifully crafted interiors make it one of the most impressive churches in North Kerala. Constructed using laterite blocks, Surkhi mortar, locally sourced timber, and traditional roof tiles, the church remains a remarkable testament to the craftsmanship of the nineteenth century.",
    image: localethos.church,
  },
  {
    title: "Odathil Mosque",
    description:
      "The centuries-old Odathil Mosque (Odathil Palli) is one of Thalassery's most distinctive religious monuments. Originally built on what was once a Dutch-owned sugarcane plantation that later came under the British East India Company, the mosque is unique for its traditional Kerala architectural style. Unlike most mosques, it features neither domes nor minarets. Instead, it is distinguished by its copper-plated roof, exquisitely carved wooden interiors, and temple-inspired design. The mosque has been carefully restored with the support of the Fundação Oriente, Portugal. As it remains an active place of worship, entry is generally restricted to Muslims.",
    image: localethos.mosque,
  },
  {
    title: "Suryanarayana Temple",
    description:
      "Situated in Kadirur, the Suryanarayana Temple is believed to date back to the 13th century. According to local legend, the idol of Lord Surya was consecrated by Lord Rama during his journey to Lanka in search of Sita. The name Kadirur is derived from Kadiravanur, meaning the land of the Sun God The temple also has historical significance dating to the British era, when prayers were offered here for the success of the British forces during the Coorg campaign. Following their victory, British official T. H. Baber supported the restoration of the temple, which had suffered damage during earlier conflicts involving Tipu Sultan",
    image: localethos.temple,
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
