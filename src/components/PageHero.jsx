export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  position = "center",
}) {
  return (
    <section
      className="page-hero"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(24,37,31,.72), rgba(24,37,31,.12)), url(${image})`,
        backgroundPosition: position,
      }}
    >
      <div className="page-hero-content wrap-wide">
        <span className="eyebrow light-eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}
