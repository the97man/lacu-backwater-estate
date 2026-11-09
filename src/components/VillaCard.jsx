import { ArrowUpRight, BedDouble } from "lucide-react";
import { Link } from "react-router-dom";

export default function VillaCard({ villa, index }) {
  return (
    <article className="villa-card">
      <Link to="/booking" className="villa-image image-link">
        <img
          src={villa.image}
          alt={`${villa.name} accommodation at LAKŌ`}
          loading="lazy"
        />
        <span className="image-number">0{index + 1}</span>
      </Link>
      <div className="villa-card-body">
        <span className="card-kicker">{villa.label}</span>
        <div className="villa-title-row">
          <h3>{villa.name}</h3>
          <span className="villa-price">
            From {villa.price}
            <small> / night</small>
          </span>
        </div>
        <p>{villa.description}</p>
        <div className="villa-meta">
          <span>
            <BedDouble size={15} /> {villa.beds}
          </span>
          <span>{villa.feature}</span>
        </div>
        <Link to="/booking" className="text-link">
          Discover this villa <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
