import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Leaf,
  HeartHandshake,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";
import { respTour, images, villas } from "../data/siteData";
import SectionHeading from "../components/SectionHeading";
import { useLocation } from "react-router-dom";
import EstateBackdrop from "../images/extras/estate.jpg";

import Villa1Full1 from "../images/room1/full1.jpg";
import Villa1Full2 from "../images/room1/full2.jpg";
import Villa1Full3 from "../images/room1/full3.jpg";
import Villa1Full4 from "../images/room1/full4.jpg";
import Villa1Bath1 from "../images/room1/bath1.jpg";
import Villa1Bath2 from "../images/room1/bath2.jpg";
import Villa1Bath3 from "../images/room1/bath3.jpg";
import Villa1View1 from "../images/room1/view1.jpg";

import Villa2Full1 from "../images/room2/full1.jpg";
import Villa2Full2 from "../images/room2/full2.jpg";
import Villa2Full3 from "../images/room2/full3.jpg";
import Villa2Closet1 from "../images/room2/closet1.jpg";
import Villa2Bath1 from "../images/room2/bath1.jpg";
import Villa2Bath2 from "../images/room2/bath2.jpg";
import Villa2Bath3 from "../images/room2/bath3.jpg";
import Villa2View1 from "../images/room2/view1.jpg";

import Villa3Full1 from "../images/room3/full1.jpg";
import Villa3Full2 from "../images/room3/full2.jpg";
import Villa3Full3 from "../images/room3/full3.jpg";
import Villa3Closet1 from "../images/room3/closet1.jpg";
import Villa3Bath1 from "../images/room3/bath1.jpg";
import Villa3Bath2 from "../images/room3/bath2.jpg";
import Villa3Bath3 from "../images/room3/bath3.jpg";
import Villa3View1 from "../images/room3/view1.jpg";

const villaGallery1 = [
  { image: Villa1Full1 },
  { image: Villa1Full2 },
  { image: Villa1Full3 },
  { image: Villa1Full4 },
  { image: Villa1Bath1 },
  { image: Villa1Bath2 },
  { image: Villa1Bath3 },
  { image: Villa1View1 },
];

const villaGallery2 = [
  { image: Villa2Full1 },
  { image: Villa2Full2 },
  { image: Villa2Full3 },
  { image: Villa2Closet1 },
  { image: Villa2Bath1 },
  { image: Villa2Bath2 },
  { image: Villa2Bath3 },
  { image: Villa2View1 },
];

const villaGallery3 = [
  { image: Villa3Full1 },
  { image: Villa3Full2 },
  { image: Villa3Full3 },
  { image: Villa3Closet1 },
  { image: Villa3Bath1 },
  { image: Villa3Bath2 },
  { image: Villa3Bath3 },
  { image: Villa3View1 },
];

const villaGalleries = [villaGallery1, villaGallery2, villaGallery3];

export default function Home() {
  const [activeVillaIndex, setActiveVillaIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const activeVilla = villas[activeVillaIndex];
  const activeGallery = villaGalleries[activeVillaIndex];
  const activeGalleryImage = activeGallery[activeImageIndex];

  const showPreviousImage = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? activeGallery.length - 1 : prev - 1,
    );
  };

  const showNextImage = () => {
    setActiveImageIndex((prev) =>
      prev === activeGallery.length - 1 ? 0 : prev + 1,
    );
  };

  const selectVilla = (index) => {
    setActiveVillaIndex(index);
    setActiveImageIndex(0);
  };

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      if (location.hash) {
        const sectionId = location.hash.substring(1);

        const targetSection = document.getElementById(sectionId);

        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <section
        className="home-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(24,35,29,.62), rgba(24,35,29,.12) 72%), linear-gradient(0deg, rgba(24,35,29,.35), transparent 45%), url(${images.hero})`,
        }}
      >
        <div className="hero-content wrap-wide">
          <span className="eyebrow light-eyebrow">
            VEMBANAD BACKWATERS · KERALA, INDIA
          </span>

          <h1>
            A premium lakeside estate
            <br />
            where time <em>stays still.</em>
          </h1>
        </div>

        <a href="#story" className="hero-scroll">
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown size={16} />
        </a>

        <div className="hero-caption">A slower rhythm on the water</div>
      </section>

      <section className="story-section section-pad scroll-mt-24" id="story">
        <div className="story-grid wrap-wide" id="our-story">
          <div className="story-image-wrap">
            <img src={EstateBackdrop} alt="Quiet water and a green shoreline" />
          </div>

          <div className="story-copy">
            <span className="eyebrow">Our Story</span>

            <h2>
              <em>Healing Waters. Mystical Traditions.</em>
            </h2>

            <p className="lead-copy">
              LAKŌ is a small backwater estate made for people who want to feel
              a place, not simply pass through it.
            </p>

            <Link to="/our-story" className="text-link">
              The thinking behind LAKŌ <ArrowUpRight size={16} />
            </Link>

            <div className="stat-row text-xl">
              <div>
                <strong>03</strong>
                <span>Premium Villas</span>
              </div>

              <div>
                <strong>01</strong>
                <span>Beautiful Backwater</span>
              </div>

              <div>
                <strong>∞</strong>
                <span>Peace of Mind</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VILLAS - CHOOSE YOUR SANCTUARY */}
      <section
        id="villas"
        className="scroll-mt-20 bg-[#f7f4ec] py-12 lg:py-14 xl:py-16"
      >
        <div className="mx-auto w-[calc(100%-40px)] max-w-[1280px] sm:w-[calc(100%-64px)]">
          {/* Section Heading */}
          <div className="mb-7 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="The Villas"
              title={
                <>
                  <em>Choose Your Sanctuary</em>
                </>
              }
            />

            <span className="pb-2 text-xs uppercase tracking-[0.18em] text-[#77766a]">
              Three Premium Sanctuaries
            </span>
          </div>

          {/* Villa Navigation */}
          <div className="mb-6 flex gap-8 overflow-x-auto border-b border-[#283b32]/15 sm:gap-12">
            {villas.map((villa, index) => (
              <button
                key={villa.name}
                type="button"
                onClick={() => selectVilla(index)}
                aria-pressed={activeVillaIndex === index}
                className={`relative shrink-0 pb-4 text-left text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-300 ${
                  activeVillaIndex === index
                    ? "text-[#a96545]"
                    : "text-[#77766a] hover:text-[#283b32]"
                }`}
              >
                <span className="mr-2 text-[10px]">0{index + 1}</span>

                {villa.name}

                {activeVillaIndex === index && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#a96545]" />
                )}
              </button>
            ))}
          </div>

          {/* Selected Villa */}
          {activeVilla && (
            <div
              key={activeVilla.name}
              className="grid grid-cols-1 overflow-hidden bg-[#eee9dd] md:grid-cols-[1fr_1fr] lg:grid-cols-[1.15fr_0.85fr]"
            >
              {/* Villa Image Gallery */}
              <div className="group relative h-[380px] overflow-hidden sm:h-[420px] md:h-[480px] lg:h-[500px] xl:h-[520px]">
                {" "}
                <img
                  key={`${activeVilla.name}-${activeImageIndex}`}
                  src={activeGalleryImage.image}
                  alt={`${activeVilla.name} - ${activeGalleryImage.label}`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                {/* Villa Number */}
                <span className="absolute bottom-7 left-7 font-serif text-6xl text-white/90 sm:bottom-8 sm:left-8">
                  0{activeVillaIndex + 1}
                </span>
                {/* Previous Image */}
                <button
                  type="button"
                  onClick={showPreviousImage}
                  aria-label="Previous villa photograph"
                  className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/20 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#283b32] sm:left-6 sm:h-12 sm:w-12"
                >
                  <ChevronLeft size={22} />
                </button>
                {/* Next Image */}
                <button
                  type="button"
                  onClick={showNextImage}
                  aria-label="Next villa photograph"
                  className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/20 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#283b32] sm:right-6 sm:h-12 sm:w-12"
                >
                  <ChevronRight size={22} />
                </button>
                {/* Image Label */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white sm:text-xs">
                  {activeGalleryImage.label}
                </div>
                {/* Image Page Indicator */}
                <div className="absolute bottom-8 right-6 text-xs font-semibold tracking-[0.15em] text-white sm:right-8">
                  {String(activeImageIndex + 1).padStart(2, "0")} /{" "}
                  {String(activeGallery.length).padStart(2, "0")}
                </div>
              </div>

              {/* Villa Information */}
              <div className="flex min-h-[480px] flex-col px-6 py-7 sm:px-8 sm:py-8 lg:min-h-0 lg:px-8 lg:py-8 xl:px-10 xl:py-9">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a96545]">
                  PREMIUM BACKWATER RETREAT
                </span>

                <h3 className="mt-3 font-serif text-3xl font-normal leading-tight text-[#283b32] sm:text-4xl xl:text-[42px]">
                  {activeVilla.name}
                </h3>

                <div className="my-5 h-px w-14 shrink-0 bg-[#a96545]/60" />

                <p className="max-w-xl text-sm leading-6 text-[#6c6b60] xl:text-base xl:leading-7">
                  {activeVilla.description}
                </p>

                {/* Villa Details */}
                <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4 border-y border-[#283b32]/15 py-5">
                  {activeVilla.beds && (
                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-[0.15em] text-[#999080]">
                        Accommodation
                      </span>

                      <span className="mt-1.5 block text-sm leading-6 text-[#283b32]">
                        {activeVilla.beds}
                      </span>
                    </div>
                  )}

                  {activeVilla.feature && (
                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-[0.15em] text-[#999080]">
                        Experience
                      </span>

                      <span className="mt-1.5 block text-sm leading-6 text-[#283b32]">
                        {activeVilla.feature}
                      </span>
                    </div>
                  )}

                  {activeVilla.price && (
                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-[0.15em] text-[#999080]">
                        Starting from
                      </span>

                      <span className="mt-1.5 block text-sm leading-6 text-[#283b32]">
                        {activeVilla.price}
                      </span>
                    </div>
                  )}

                  <div>
                    <span className="block text-[9px] font-bold uppercase tracking-[0.15em] text-[#999080]">
                      Collection
                    </span>

                    <span className="mt-1.5 block text-sm leading-6 text-[#283b32]">
                      LAKŌ Premium Villas
                    </span>
                  </div>
                </div>

                {/* Booking */}
                <div className="mt-auto pt-6">
                  <Link
                    to="/booking"
                    className="inline-flex items-center gap-3 bg-[#283b32] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#a96545]"
                  >
                    Book This Villa
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
