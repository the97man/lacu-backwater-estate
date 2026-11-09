import { ArrowUpRight, Leaf, MapPin, Users, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { images } from "../data/siteData";

export default function Story() {
  return (
    <>
      <PageHero
        eyebrow="A PLACE WITH A POINT OF VIEW"
        title={
          <>
            A quieter kind
            <br />
            of <em>hospitality.</em>
          </>
        }
        description="Small by intention. Rooted in the neighbourhood. Guided by the simple pleasure of being by the water."
        image={images.village}
      />
      <section className="story-opening section-pad">
        <div className="story-opening-grid wrap-wide">
          <div>
            <span className="eyebrow">OUR STORY</span>
            <h2>
              The first of its kind
              <br />
              on this stretch of lake.
            </h2>
          </div>
          <div>
            <p className="lead-copy">
              There was no property here before LAKŌ, and no one to copy. What
              guided us instead was a simple idea: build small, hire local, and
              let the backwater do most of the talking.
            </p>
            <p>
              LAKŌ began as a lakeside plot and a conviction: that travellers
              deserved something quieter than a resort and more considered than
              a homestay. We built three villas, not thirty — and put our energy
              into a local team, thoughtful hosting and sourcing meals close to
              the kitchen door.
            </p>
          </div>
        </div>
      </section>
      <section className="founder-section">
        <div className="founder-image">
          <img
            src={images.lake}
            alt="The calm water that inspired LAKŌ"
            loading="lazy"
          />
        </div>
        <div className="founder-copy">
          <span className="eyebrow light-eyebrow">A NOTE FROM OUR FOUNDER</span>
          <blockquote>
            “Serenity and calmness — a place where time stays still.”
          </blockquote>
          <p>— Michael D’Souza, Founder, LAKŌ</p>
        </div>
      </section>
      <section className="responsibility-story section-pad">
        <div className="wrap-wide">
          <SectionHeading
            eyebrow="RESPONSIBLE TOURISM"
            title={
              <>
                We moved in beside the village.
                <br />
                <em>Not into it.</em>
              </>
            }
            description="The estate should make the neighbourhood's week better, not just the guests'. That principle shapes the way we work, welcome and source."
            centered
          />
          <div className="principles-grid">
            <article>
              <Users />
              <span>01 / LOCAL HIRING</span>
              <h3>Local people, first.</h3>
              <p>
                Our team is recruited from the immediate neighbourhood and
                trained on the property, creating opportunities close to home.
              </p>
            </article>
            <article>
              <Utensils />
              <span>02 / LOCAL SOURCING</span>
              <h3>A kitchen fed by the village.</h3>
              <p>
                Fish from the lake, produce from the village market and
                ingredients that follow what is fresh and available nearby.
              </p>
            </article>
            <article>
              <Leaf />
              <span>03 / A LIGHTER FOOTPRINT</span>
              <h3>Small, by design.</h3>
              <p>
                Three villas keep the experience intimate and help the everyday
                life along this stretch of backwater carry on around us.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="story-image-band">
        <img
          src={images.food}
          alt="A meal prepared with fresh local ingredients"
          loading="lazy"
        />
        <div>
          <span className="eyebrow light-eyebrow">THE PEOPLE & THE PLACE</span>
          <h2>
            Good stays begin
            <br />
            with <em>good neighbours.</em>
          </h2>
          <p>
            We want guests to meet the people and rhythms that make this place
            what it is — not just look at it from a distance.
          </p>
          <Link to="/RespTour" className="text-link light-link">
            Meet the neighbourhood <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <section className="guest-fit section-pad">
        <div className="wrap-wide">
          <SectionHeading
            eyebrow="A PLACE FOR"
            title={
              <>
                People who want
                <br />
                <em>a slower kind of luxury.</em>
              </>
            }
          />
          <div className="guest-fit-grid">
            <div>
              <MapPin />
              <h3>Couples & honeymooners</h3>
              <p>A quiet, considered stay with the lake as the main event.</p>
            </div>
            <div>
              <Users />
              <h3>Families & small groups</h3>
              <p>Room to gather, reconnect and settle into a gentler pace.</p>
            </div>
            <div>
              <Leaf />
              <h3>Curious travellers</h3>
              <p>
                For those who value a sense of place as much as a beautiful
                room.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="simple-cta">
        <div>
          <span className="eyebrow light-eyebrow">
            COME AND SEE FOR YOURSELF
          </span>
          <h2>
            We'd love to welcome
            <br />
            <em>you to the water.</em>
          </h2>
          <Link to="/booking" className="button button-light">
            Enquire about a stay <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
