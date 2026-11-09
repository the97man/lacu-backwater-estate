import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import VillaCard from "../components/VillaCard";
import { images, villas } from "../data/siteData";

const inclusions = [
  [
    "Local, honest food",
    "Meals follow what the morning markets, fishmongers and kitchen garden bring in that day.",
  ],
  [
    "A host, not just staff",
    "Each villa is looked after by someone raised nearby, who knows the backwater better than any guidebook.",
  ],
  [
    "One experience, included",
    "Every stay includes one guided experience — a sunrise paddle, village cycle or short fishing trip.",
  ],
];

export default function Villas() {
  return (
    <>
      <PageHero
        eyebrow="A PRIVATE PLACE TO CALL YOUR OWN"
        title={
          <>
            Three villas,
            <br />
            <em>one beautiful setting.</em>
          </>
        }
        description="Space to settle in, thoughtful details and the backwater just beyond your door."
        image={images.villa}
      />
      <section className="page-intro section-pad">
        <div className="narrow-copy">
          <span className="eyebrow">EXCLUSIVE ON PURPOSE</span>
          <h2>
            Never more than three
            <br />
            houses at a time.
          </h2>
          <p>
            We keep the estate small deliberately. Each villa is let on its own,
            so your stay is shared with the lake and not with other guests. Find
            the space that feels like yours.
          </p>
        </div>
      </section>
      <section className="villa-listing section-pad">
        <div className="wrap-wide">
          <div className="villa-grid villa-grid-page">
            {villas.map((villa, index) => (
              <VillaCard key={villa.name} villa={villa} index={index} />
            ))}
          </div>
        </div>
      </section>
      <section className="included-section section-pad">
        <div className="wrap-wide included-grid">
          <div className="included-photo">
            <img
              src={images.food}
              alt="A fresh meal inspired by local ingredients"
              loading="lazy"
            />
            <span>Thoughtful hospitality, from the first cup of tea</span>
          </div>
          <div>
            <SectionHeading
              eyebrow="WITH EVERY STAY"
              title={
                <>
                  The rate covers
                  <br />
                  <em>more than the room.</em>
                </>
              }
              description="A stay at LAKŌ is about the little things that make a place feel personal."
            />
            <div className="inclusion-list">
              {inclusions.map(([title, text]) => (
                <div className="inclusion-item" key={title}>
                  <span>
                    <Check size={17} />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="season-note">
              Rates flex with the season. Monsoon weeks and the Christmas–New
              Year period have their own offers and activity calendars. Ask us
              when you enquire.
            </p>
            <Link to="/booking" className="text-link">
              Ask about your dates <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section className="simple-cta">
        <div>
          <span className="eyebrow light-eyebrow">YOUR LAKŌ STAY</span>
          <h2>
            Find the one
            <br />
            <em>that feels like you.</em>
          </h2>
          <Link to="/booking" className="button button-light">
            Check availability <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
