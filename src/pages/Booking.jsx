import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { images } from "../data/siteData";

const BOOKING_URL = ""; // Add the estate's live channel-manager / Smart Hands booking URL before launch.
const CONTACT_EMAIL = "reservations@lako-estate.example"; // Replace with the confirmed reservations email.

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    dates: "",
    villa: "No preference",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const update = (event) =>
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  const submit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`LAKŌ stay enquiry — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPreferred dates: ${form.dates || "Not specified"}\nVilla: ${form.villa}\n\nMessage:\n${form.message}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };
  return (
    <>
      <PageHero
        eyebrow="YOUR TIME BY THE WATER STARTS HERE"
        title={
          <>
            Let's make room
            <br />
            for <em>your escape.</em>
          </>
        }
        description="Tell us a little about the stay you have in mind. We’ll help you find the right villa and the right time to visit."
        image={images.pool}
      />
      <section className="booking-intro section-pad">
        <div className="wrap-wide booking-intro-grid">
          <div>
            <span className="eyebrow">BOOK & CONTACT</span>
            <h2>
              One simple step
              <br />
              towards <em>slower days.</em>
            </h2>
          </div>
          <div>
            <p className="lead-copy">
              Whether you know your dates or are still dreaming about them, we’d
              be happy to help you plan a stay at LAKŌ.
            </p>
            <p>
              For live availability, rates and secure payment, use our booking
              partner once the estate’s live booking link has been added. For
              custom itineraries, longer stays or a question before you book,
              send us a note directly.
            </p>
          </div>
        </div>
      </section>
      <section className="booking-content section-pad">
        <div className="wrap-wide booking-grid">
          <div className="booking-steps">
            <SectionHeading
              eyebrow="HOW BOOKING WORKS"
              title="A few easy steps."
              description="Your reservation stays simple, clear and secure."
            />
            <div className="booking-step">
              <span>01</span>
              <div>
                <h3>Check availability</h3>
                <p>
                  Choose your dates and see live rates through our booking
                  partner.
                </p>
              </div>
            </div>
            <div className="booking-step">
              <span>02</span>
              <div>
                <h3>Choose your villa</h3>
                <p>
                  Pick Vembanad, Munroe or Thekkady Villa, then add experiences
                  if you wish.
                </p>
              </div>
            </div>
            <div className="booking-step">
              <span>03</span>
              <div>
                <h3>Confirm securely</h3>
                <p>
                  Payment is handled by the booking platform. We never collect
                  card details directly on this website.
                </p>
              </div>
            </div>
            {BOOKING_URL ? (
              <a
                className="button button-dark booking-button"
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
              >
                Check availability & book <ArrowUpRight size={16} />
              </a>
            ) : (
              <div className="booking-placeholder">
                <ShieldCheck size={19} />
                <span>
                  <strong>Live booking link to be connected</strong>
                  <small>
                    The estate's channel-manager URL will appear here before
                    launch.
                  </small>
                </span>
              </div>
            )}
            <div className="booking-platforms">
              <span>ALSO AVAILABLE THROUGH</span>
              <div>
                <b>airbnb</b>
                <b>Booking.com</b>
                <b>agoda</b>
              </div>
            </div>
          </div>
          <div className="enquiry-card">
            <span className="eyebrow">PREFER TO ASK FIRST?</span>
            <h2>
              We'd love to
              <br />
              <em>hear from you.</em>
            </h2>
            <p>
              For a longer stay, a special occasion or simply a little more
              information, write to us and the team will reply personally.
            </p>
            <div className="contact-details">
              <a href={`mailto:${CONTACT_EMAIL}`}>
                <Mail size={17} />
                <span>{CONTACT_EMAIL}</span>
                <ArrowUpRight size={15} />
              </a>
              <a href="tel:+910000000000">
                <Phone size={17} />
                <span>+91 00000 00000</span>
                <ArrowUpRight size={15} />
              </a>
              <div>
                <MapPin size={17} />
                <span>Vembanad Backwaters, near Kochi, Kerala, India</span>
              </div>
            </div>
            <form className="enquiry-form" onSubmit={submit}>
              <label>
                Your name
                <input
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="How should we address you?"
                  required
                />
              </label>
              <label>
                Email address
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={update}
                  placeholder="you@example.com"
                  required
                />
              </label>
              <label>
                Preferred dates
                <input
                  type="text"
                  name="dates"
                  value={form.dates}
                  onChange={update}
                  placeholder="e.g. 12–15 February"
                />
              </label>
              <label>
                Villa of interest
                <select name="villa" value={form.villa} onChange={update}>
                  <option>No preference</option>
                  <option>Vembanad Villa</option>
                  <option>Munroe Villa</option>
                  <option>Thekkady Villa</option>
                </select>
              </label>
              <label className="form-full">
                A note for our team
                <textarea
                  name="message"
                  value={form.message}
                  onChange={update}
                  rows="4"
                  placeholder="Tell us a little about the stay you're imagining..."
                />
              </label>
              <button type="submit" className="button button-dark form-full">
                Send an enquiry <ArrowUpRight size={16} />
              </button>
              {submitted && (
                <p className="form-hint form-full">
                  <CheckCircle2 size={16} /> Your email app should open with the
                  enquiry prepared. Please send it to complete your request.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
