import { ArrowUpRight, Clock3, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { images, experiences } from "../data/siteData";

export default function Experiences() {
  return (
    <>
      <PageHero
        eyebrow="FOLLOW THE WATER"
        title={
          <>
            The backwater is
            <br />
            <em>the experience.</em>
          </>
        }
        description="Every day offers a different way to meet this place — from the quiet channels to the village lanes and hills beyond."
        image={images.canoe}
      />

      <section className="page-intro section-pad">
        <div className="narrow-copy">
          <span className="eyebrow">SPORT & SLOW LIVING</span>
          <h2>
            Days built around
            <br />
            the water, not a schedule.
          </h2>
          <p>
            Every experience can be arranged with your villa stay. Add something
            to your plans before you arrive, or decide once you've seen the
            water. There is no need to fill every hour.
          </p>
        </div>
      </section>

      <section className="experience-cards-section section-pad">
        <div className="wrap-wide experience-cards">
          {experiences.map((item, index) => (
            <article
              className={`experience-card ${
                index % 2 ? "experience-card-reverse" : ""
              }`}
              key={item.name}
            >
              <div className="experience-card-image">
                <img src={item.image} alt={item.name} loading="lazy" />
                <span>0{index + 1}</span>
              </div>

              <div className="experience-card-copy">
                <span className="eyebrow">EXPERIENCE 0{index + 1}</span>

                <h2>{item.name}</h2>
                <p>{item.description}</p>

                <div className="experience-tags">
                  <span>
                    <Clock3 size={15} /> {item.duration}
                  </span>
                  <span>
                    <Compass size={15} /> {item.tag}
                  </span>
                </div>

                <Link to="/booking" className="text-link">
                  Add to your stay <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="beyond-section section-pad">
        <div className="wrap-wide beyond-grid">
          <div>
            <SectionHeading
              eyebrow="ALSO AVAILABLE"
              title={
                <>
                  Beyond the
                  <br />
                  <em>headline four.</em>
                </>
              }
              description="A few more ways to spend a day here, arranged with the same local hosts and guides."
            />
          </div>

          <div className="beyond-list">
            <div>
              <span>05</span>
              <h3>Guided backwater cruise</h3>
              <p>
                A day on a traditional houseboat through the wider Vembanad lake
                system.
              </p>
            </div>

            <div>
              <span>06</span>
              <h3>Village cooking session</h3>
              <p>
                Learn the dishes on your dinner table from the women who cook
                them.
              </p>
            </div>

            <div>
              <span>07</span>
              <h3>Seasonal days</h3>
              <p>
                Monsoon moments and festive-season experiences, shaped as the
                calendar unfolds.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="experience-cta"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(30,43,35,.82), rgba(30,43,35,.25)), url(${images.lake})`,
        }}
      >
        <div className="wrap-wide">
          <span className="eyebrow light-eyebrow">MAKE A DAY OF IT</span>
          <h2>
            Build your own day
            <br />
            on the <em>water.</em>
          </h2>
          <p>Every activity can be added when you enquire about your stay.</p>
          <Link to="/booking" className="button button-light">
            Start planning <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
