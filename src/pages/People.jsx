import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { images } from "../data/siteData";

import Staff1 from "../images/staff/staff1.jpg";
import Staff2 from "../images/staff/staff2.jpg";
import Staff3 from "../images/staff/staff3.jpg";
import Staff4 from "../images/staff/staff4.jpg";
import Staff5 from "../images/staff/staff5.jpg";

export default function People() {
  return (
    <>
      {/* PAGE HERO */}

      {/* INTRODUCTION */}
      <section className="page-intro section-pad">
        <div className="narrow-copy">
          <span className="eyebrow">INTRODUCTION</span>

          <p>
            At LAKŌ, it is the people who bring the spirit of this place to
            life. Through their warmth, dedication and stories, they make every
            stay feel personal and every moment memorable.
          </p>
        </div>
      </section>

      {/* PEOPLE / CONTENT CARDS */}
      <section className="experience-cards-section section-pad">
        <div className="wrap-wide experience-cards">
          {/* STAFF CARD 1 */}
          <article className="experience-card">
            <div className="experience-card-image">
              <img src={Staff1} alt="LAKŌ staff" loading="lazy" />
              <span>01</span>
            </div>

            <div className="experience-card-copy">
              <h2>Priya Nair – Executive Chef</h2>

              <p>
                Priya brings rich regional spices and creative modern twists to
                the estate's main dining menu. She visits the dining room each
                evening to make sure guests enjoy their meals.
              </p>

              <Link to="/booking" className="text-link">
                Discover More <ArrowUpRight size={16} />
              </Link>
            </div>
          </article>

          {/* CONTENT CARD 2 */}
          <article className="experience-card experience-card-reverse">
            <div className="experience-card-image">
              <img src={Staff2} alt="LAKŌ staff" loading="lazy" />
              <span>02</span>
            </div>

            <div className="experience-card-copy">
              <h2>Rohan Sharma – Front Desk Manager</h2>

              <p>
                Rohan welcomes every guest with a warm smile and a fast check-in
                process. He knows the city's hidden gems and helps travelers
                plan their daily sightseeing tours.
              </p>

              <Link to="/booking" className="text-link">
                Discover More <ArrowUpRight size={16} />
              </Link>
            </div>
          </article>

          {/* CONTENT CARD 3 */}
          <article className="experience-card">
            <div className="experience-card-image">
              <img src={Staff3} alt="LAKŌ staff" loading="lazy" />
              <span>03</span>
            </div>

            <div className="experience-card-copy">
              <h2>Vikram Singh – Concierge</h2>

              <p>
                Vikram arranges airport pickups, private cabs, and guided
                heritage walks across the city. His calm and polite manner helps
                first-time visitors feel right at home.
              </p>

              <Link to="/booking" className="text-link">
                Discover More <ArrowUpRight size={16} />
              </Link>
            </div>
          </article>

          {/* CONTENT CARD 4 */}
          <article className="experience-card experience-card-reverse">
            <div className="experience-card-image">
              <img src={Staff4} alt="LAKŌ staff" loading="lazy" />
              <span>02</span>
            </div>

            <div className="experience-card-copy">
              <h2>Amit Patel – Guest Relations Officer</h2>

              <p>
                Amit manages all special requests and ensures anniversary or
                birthday celebrations are perfectly planned. His keen eye for
                detail helps create memorable moments that keep guests coming
                back year after year.
              </p>

              <Link to="/booking" className="text-link">
                Discover More <ArrowUpRight size={16} />
              </Link>
            </div>
          </article>

          {/* CONTENT CARD 5 */}
          <article className="experience-card">
            <div className="experience-card-image">
              <img src={Staff5} alt="LAKŌ staff" loading="lazy" />
              <span>03</span>
            </div>

            <div className="experience-card-copy">
              <h2>Ananya Verma – Head of Housekeeping</h2>

              <p>
                Ananya leads a dedicated team to keep every guest room spotless
                and fresh. She notices the small touches that make a stay
                comfortable and relaxing.
              </p>

              <Link to="/booking" className="text-link">
                Discover More <ArrowUpRight size={16} />
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
