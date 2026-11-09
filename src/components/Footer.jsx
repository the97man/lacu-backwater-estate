import { Link } from "react-router-dom";
import { ArrowUpRight, Instagram, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer [background:#242f29] [color:#e9e0d0] [padding:75px_max(44px,calc((100vw_-_1240px)/2))_25px] max-[700px]:[padding:60px_20px_22px]">
      <div className="footer-top [display:grid] [grid-template-columns:1.3fr_.65fr_1fr_.9fr] [gap:55px] [padding-bottom:60px] max-[1000px]:[grid-template-columns:1.2fr_.7fr_1fr] max-[1000px]:[gap:35px] max-[700px]:[grid-template-columns:1fr_1fr] max-[700px]:[gap:35px_25px] max-[700px]:[padding-bottom:40px]">
        <div className="footer-intro [&>p]:[font-size:11px] [&>p]:[line-height:1.9] [&>p]:[color:#bfc3b8] [&>p]:[max-width:290px] [&>p]:[margin:20px_0] max-[700px]:[grid-column:1/-1]">
          <Link
            to="/"
            className="footer-brand [display:flex] [flex-direction:column] [font-family:'Playfair_Display',serif] [font-size:31px] [letter-spacing:.1em] [color:white] [&_span]:[font-family:'DM_Sans',sans-serif] [&_span]:[font-size:8px] [&_span]:[letter-spacing:.22em] [&_span]:[font-weight:700]"
          >
            LAKŌ<span>BACKWATER ESTATE</span>
          </Link>
          <p>
            Three private villas on the Vembanad backwaters. A quieter kind of
            escape, shaped by the water and the people who call it home.
          </p>
          <a
            className="footer-social [display:inline-flex] [align-items:center] [gap:10px] [font-size:10px] [color:#e9e0d0]"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            Keep in touch! <Instagram size={16} />
          </a>
        </div>
        <div className="footer-column [display:flex] [flex-direction:column] [gap:14px] [&>a]:[font-size:10px] [&>a]:[color:#c5c9bf] [&>a]:[line-height:1.8] [&>a]:[margin:0]">
          <span className="footer-label [font-size:8px] [letter-spacing:.18em] [color:#c3a98a] [margin-bottom:8px]">
            Explore
          </span>
          <Link to="/villas">The Villas</Link>
          <Link to="/resptour">RespTour</Link>
          <Link to="/our-story">Our Story</Link>
          <Link to="/booking">Enquire</Link>
        </div>
        <div className="footer-column [display:flex] [flex-direction:column] [gap:14px] [&>a]:[font-size:10px] [&>a]:[color:#c5c9bf] [&>a]:[line-height:1.8] footer-contact [&>a]:[margin:0] [&_p]:[font-size:10px] [&_p]:[color:#c5c9bf] [&_p]:[line-height:1.8] [&_p]:[margin:0] [&>a]:[display:flex] [&>a]:[align-items:flex-start] [&>a]:[gap:10px] [&_p]:[display:flex] [&_p]:[align-items:flex-start] [&_p]:[gap:10px] [&_svg]:[color:#c3a98a] [&_svg]:[flex:0_0_auto] [&_svg]:[margin-top:2px]">
          <span className="footer-label [font-size:8px] [letter-spacing:.18em] [color:#c3a98a] [margin-bottom:8px]">
            Find your way here
          </span>
          <p>
            <MapPin size={16} /> Vembanad Backwaters,
            <br /> near Kochi, Kerala, India
          </p>
          <a href="mailto:reservations@lako-estate.example">
            <Mail size={16} /> reservations@lako-estate.example
          </a>
          <a href="tel:+910000000000">
            <Phone size={16} /> +91 00000 00000
          </a>
        </div>
        <div className="footer-note [&>p]:[font-size:11px] [&>p]:[line-height:1.9] [&>p]:[color:#bfc3b8] [&>p]:[max-width:290px] [&>p]:[margin:20px_0] [&_.text-link]:[margin-top:5px] max-[1000px]:[grid-column:1/-1] max-[1000px]:[&>p]:[max-width:500px] max-[700px]:[grid-column:1/-1]">
          <span className="footer-label [font-size:8px] [letter-spacing:.18em] [color:#c3a98a] [margin-bottom:8px]">
            A little more time by the water
          </span>
          <p>Some places ask you to do more. LAKŌ invites you to do less.</p>
          <Link
            to="/booking"
            className="text-link [display:inline-flex] [align-items:center] [gap:12px] [padding-bottom:7px] [border-bottom:1px_solid_rgba(169,101,69,.5)] [font-size:12px] [font-weight:700] [letter-spacing:.015em] [color:#283b32] [transition:gap_.2s,border-color_.2s] [&:hover]:[gap:18px] [&:hover]:[border-color:#a96545] light-link [color:#f7f4ec] [border-color:rgba(247,244,236,.55)]"
          >
            Plan your stay <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
      <div className="footer-bottom [display:flex] [justify-content:space-between] [gap:20px] [border-top:1px_solid_rgba(255,255,255,.14)] [padding-top:20px] [font-size:9px] [color:#9fa89e] [&_a]:[color:#e9e0d0] max-[700px]:[flex-wrap:wrap] max-[700px]:[gap:12px] max-[700px]:[&_span:nth-child(2)]:[display:none]">
        <span>© {new Date().getFullYear()} LAKŌ Backwater Estate</span>
        <Link to="/booking">Contact & reservations</Link>
      </div>
    </footer>
  );
}
