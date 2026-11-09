import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CategoryPage({ introduction, sections = [] }) {
  return (
    <>
      {/* INTRODUCTION */}
      <section className="page-intro section-pad">
        <div className="narrow-copy">
          <span className="eyebrow">INTRODUCTION</span>
          <p>{introduction}</p>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="experience-cards-section section-pad">
        <div className="wrap-wide experience-cards">
          {sections.map((section, index) => (
            <article
              key={section.title}
              className={`experience-card ${
                index % 2 !== 0 ? "experience-card-reverse" : ""
              }`}
            >
              <div className="experience-card-image">
                <img
                  src={section.image}
                  alt={section.imageAlt || section.title}
                  loading="lazy"
                />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="experience-card-copy">
                <h2>{section.title}</h2>
                <p>{section.description}</p>

                <Link to="/booking" className="text-link">
                  Discover More <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
