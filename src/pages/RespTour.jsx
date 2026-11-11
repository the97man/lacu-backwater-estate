import { Link } from "react-router-dom";
import { respTour } from "../data/siteData";

const galleryImages = [
  {
    id: 1,
    label: "People",
    description: "Meet the people whose warmth and stories bring LAKŌ to life.",
    image: respTour.people,
    path: "/people",
  },
  {
    id: 2,
    label: "Local Ethos",
    description:
      "Discover our connection to nature and a more thoughtful way of living.",
    image: respTour.ethos,
    path: "/local-ethos",
  },
  {
    id: 3,
    label: "Cuisine",
    description:
      "Savour the flavours of Kerala, inspired by local ingredients and traditions.",
    image: respTour.kerelacuisine,
    path: "/cuisine",
  },
  {
    id: 4,
    label: "Heritage",
    description:
      "Explore the history, traditions and stories that shape Kerala.",
    image: respTour.keralaheritage,
    path: "/heritage",
  },
  {
    id: 5,
    label: "Community",
    description:
      "Celebrate the local people, shared experiences and bonds that make us belong.",
    image: respTour.community,
    path: "/community",
  },
  {
    id: 6,
    label: "Art & Culture",
    description:
      "Experience the vibrant art, crafts and cultural traditions of Kerala.",
    image: respTour.artculture,
    path: "/art-culture",
  },
];

export default function RespTour() {
  return (
    <section className="bg-[#f7f4ec] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1280px] sm:w-[calc(100%-64px)]">
        {/* GALLERY HEADING */}
        <div className="mb-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a96545]">
            Discover LAKŌ
          </span>

          <h2 className="mt-3 font-serif text-3xl font-normal text-[#283b32] sm:text-4xl">
            Tourism at a glance
          </h2>
        </div>

        {/* 3 x 2 IMAGE GRID */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              aria-label={`Explore ${item.label}`}
              className="group relative block aspect-[4/3] overflow-hidden bg-[#eee9dd]"
            >
              <img
                src={item.image}
                alt={item.label}
                title={item.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-black/20 transition-opacity duration-500 group-hover:from-black/70" />

              {/* IMAGE NUMBER */}
              <span className="absolute right-5 top-5 text-xs font-semibold tracking-widest text-white">
                {String(item.id).padStart(2, "0")}
              </span>

              {/* IMAGE NAME */}
              <div className="absolute bottom-0 left-0 p-6 sm:p-7">
                <h3 className="font-serif text-2xl font-normal text-white sm:text-3xl">
                  {item.label}
                </h3>

                <h3 className="font-serif text-lg font-normal text-white sm:text-lg">
                  {item.description}
                </h3>

                <span className="mt-2 block h-px w-0 bg-white transition-all duration-500 group-hover:w-full" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
