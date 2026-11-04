"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  X,
  MapPin,
  Heart,
  Cross,
  CalendarDays,
  Users,
  Phone,
  MessageCircle,
  Navigation,
  Globe,
  BookOpen,
  HandHeart,
} from "lucide-react";

import "./contactpage.css";

import { church } from "@/lib/church";

const images = Array.from(
  { length: 12 },
  (_, index) => `/images/img${index + 1}.jpg`
);

const ministries = [
  {
    title: "Sunday School",
    image: "/images/img6.jpg",
    icon: BookOpen,
    description:
      "A Sunday session for children from 8:30 AM to 9:45 AM, supporting their growth in faith.",
  },
  {
    title: "Teen Sessions",
    image: "/images/img5.jpg",
    icon: Users,
    description:
      "A dedicated Sunday session for teens from 8:00 AM to 10:00 AM.",
  },
  {
    title: "Worship & Fellowship",
    image: "/images/img3.jpg",
    icon: Heart,
    description:
      "The church gathers for worship, prayer, teaching and fellowship during its regular services.",
  },
];

const events = [
  {
    title: "Sunday Worship",
    type: "REGULAR GATHERING",
    image: "/images/img2.jpg",
    description:
      "Join us on Sunday for one of three worship services. Sunday School and teen sessions also take place during the Sunday programme.",
  },
  {
    title: "Church Fellowship",
    type: "COMMUNITY",
    image: "/images/img5.jpg",
    description:
      "A time to connect, encourage one another and strengthen our relationships as a church family.",
  },
  {
    title: "Special Church Events",
    type: "ANNOUNCEMENTS",
    image: "/images/img10.jpg",
    description:
      "For special services, celebrations and current church announcements, contact the church directly or follow its Facebook community.",
  },
];

function PageHeader() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Ministries", "/ministries"],
    ["Events", "/events"],
    ["Gallery", "/gallery"],
    ["Contact", "/contact"],
  ];

  return (
    <header className="inner-header">
      <Link href="/" className="brand inner-brand">
        <span className="brand-mark">
          <Image
            src="/images/logo.jpeg"
            alt="ACK St. Stephen Karunga"
            width={54}
            height={54}
          />
        </span>
        <span className="brand-name">
          <strong>ACK ST. STEPHEN</strong>
          <small>KARUNGA · NDUMBERI</small>
        </span>
      </Link>

      <button
        className="inner-menu-button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
      >
        {open ? <X /> : <span>MENU</span>}
      </button>

      <nav className={`inner-nav ${open ? "inner-nav-open" : ""}`}>
        {links.map(([label, href]) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="inner-nav-visit"
          onClick={() => setOpen(false)}
        >
          Plan a visit <ArrowUpRight size={15} />
        </Link>
      </nav>
    </header>
  );
}

function PageFooter() {
  return (
    <footer className="inner-footer">
      <div className="inner-footer-main">
        <Link href="/" className="brand">
          <span className="brand-mark">
            <Image
              src="/images/logo.jpeg"
              alt="ACK St. Stephen Karunga"
              width={54}
              height={54}
            />
          </span>
          <span className="brand-name">
            <strong>ACK ST. STEPHEN</strong>
            <small>KARUNGA · NDUMBERI</small>
          </span>
        </Link>

        <p>A place to worship. A community to belong.</p>

        <div className="inner-footer-links">
          <Link href="/about">About</Link>
          <Link href="/ministries">Ministries</Link>
          <Link href="/events">Events</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      <div className="inner-footer-bottom">
        <span>© {new Date().getFullYear()} ACK St. Stephen Karunga</span>
        <span>WORSHIP · GROW · SERVE</span>
      </div>
    </footer>
  );
}

function PageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader />
      <main className="inner-page">{children}</main>
      <PageFooter />
    </>
  );
}

function PageHero({
  eyebrow,
  title,
  accent,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  image: string;
}) {
  return (
    <section className="inner-hero">
      <Image src={image} alt="" fill priority sizes="100vw" />
      <div className="inner-hero-overlay" />
      <div className="inner-hero-content">
        <span className="eyebrow">{eyebrow}</span>
        <h1>
          {title}
          <br />
          <em>{accent}</em>
        </h1>
        <p>{description}</p>
        <div className="inner-breadcrumb">
          <Link href="/">HOME</Link>
          <span>/</span>
          <span>{title.toUpperCase()}</span>
        </div>
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="GET TO KNOW US"
        title="Our church."
        accent="Our family."
        description="Discover the community, faith and purpose that bring us together."
        image="/images/img1.jpg"
      />

      <section className="inner-story">
        <div className="inner-story-image">
          <Image
            src="/images/img1.jpg"
            alt="ACK St. Stephen Karunga church building"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </div>

        <div className="inner-story-copy">
          <span className="eyebrow">WELCOME TO ACK ST. STEPHEN KARUNGA</span>
          <h2>
            Faith is a
            <br />
            <em>journey together.</em>
          </h2>
          <p>
            ACK St. Stephen Karunga is a church community in
            Ndumberi, Kiambu County. We come together to worship
            God, grow in faith and serve our community.
          </p>
          <p>
            Whether you have been part of the church for years
            or are thinking of visiting for the first time,
            you are welcome.
          </p>
          <Link href="/contact" className="inner-text-link">
            Get in touch <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="belief-section">
        <div className="belief-heading">
          <span className="eyebrow">WHAT GUIDES US</span>
          <h2>
            Worship. <em>Grow.</em> Serve.
          </h2>
          <p>
            Three simple expressions of the life we seek to
            live together as a church.
          </p>
        </div>

        <div className="belief-grid">
          <article>
            <Cross />
            <span>01</span>
            <h3>Worship</h3>
            <p>
              Coming together to honour God through worship,
              prayer and thanksgiving.
            </p>
          </article>
          <article>
            <BookOpen />
            <span>02</span>
            <h3>Grow</h3>
            <p>
              Learning from Scripture and encouraging one
              another in our journey of faith.
            </p>
          </article>
          <article>
            <HandHeart />
            <span>03</span>
            <h3>Serve</h3>
            <p>
              Sharing Christ's love through kindness, care
              and service to others.
            </p>
          </article>
        </div>
      </section>

      <section className="inner-quote">
        <span className="eyebrow">A CHURCH FAMILY</span>
        <h2>
          Growing in faith.
          <br />
          <em>Serving with love.</em>
        </h2>
        <Link href="/contact" className="inner-text-link">
          Plan a visit <ArrowRight size={17} />
        </Link>
      </section>

      <div className="content-disclaimer">
        The church history, leadership, mission statement and
        official beliefs can be added here once confirmed by
        the church leadership.
      </div>
    </PageShell>
  );
}

export function MinistriesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="LIFE TOGETHER"
        title="Find your"
        accent="place."
        description="Discover opportunities to worship, connect, learn and serve."
        image="/images/img3.jpg"
      />

      <section className="inner-list-section">
        <div className="inner-section-heading">
          <span className="eyebrow">OUR CHURCH COMMUNITY</span>
          <h2>
            Growing <em>together.</em>
          </h2>
          <p>
            Find the regular Sunday sessions for children and teens, and join the wider church family for worship and fellowship.
          </p>
        </div>

        <div className="ministry-list">
          {ministries.map((item, index) => {
            const Icon = item.icon;

            return (
              <article className="ministry-list-card" key={item.title}>
                <div className="ministry-list-image">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 700px) 100vw, 40vw"
                  />
                </div>
                <div className="ministry-list-copy">
                  <span className="eyebrow">
                    MINISTRY AREA · 0{index + 1}
                  </span>
                  <Icon size={25} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <p className="content-disclaimer">
          Sunday School and teen session times are confirmed. Other ministry groups, leaders and meeting schedules can be added when the church provides their details.
        </p>
      </section>
    </PageShell>
  );
}

export function EventsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="WHAT'S HAPPENING"
        title="Gather."
        accent="Connect."
        description="Stay connected with worship gatherings, church activities and community life."
        image="/images/img10.jpg"
      />

      <section className="inner-list-section">
        <div className="inner-section-heading">
          <span className="eyebrow">CHURCH LIFE</span>
          <h2>
            Moments that <em>bring us together.</em>
          </h2>
          <p>
            Join us for the regular Sunday and Wednesday services, and stay in touch for special church announcements.
          </p>
        </div>

        <div className="events-grid">
          {events.map((event) => (
            <article className="event-card" key={event.title}>
              <div className="event-card-image">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 700px) 100vw, 33vw"
                />
                <span><CalendarDays size={15} /> {event.type}</span>
              </div>
              <div className="event-card-copy">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <Link href="/contact" className="inner-text-link">
                  Ask for details <ArrowRight size={17} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <section className="confirmed-schedule" aria-labelledby="confirmed-schedule-title">
          <div className="confirmed-schedule-heading">
            <span className="eyebrow">REGULAR SERVICES</span>
            <h2 id="confirmed-schedule-title">Make time for <em>worship.</em></h2>
            <p>These are the current regular service times shared by the church.</p>
          </div>
          <div className="confirmed-schedule-grid">
            <article className="confirmed-schedule-day">
              <span>SUNDAY</span>
              <h3>Sunday worship</h3>
              <ul>
                <li><strong>First service</strong><time>7:00 AM – 9:00 AM</time></li>
                <li><strong>Second service</strong><time>9:00 AM – 11:00 AM</time></li>
                <li><strong>Third service</strong><time>11:30 AM – 2:00 PM</time></li>
              </ul>
            </article>
            <article className="confirmed-schedule-day">
              <span>CHILDREN & TEENS</span>
              <h3>Growing in faith</h3>
              <ul>
                <li><strong>Sunday School</strong><time>8:30 AM – 9:45 AM</time></li>
                <li><strong>Teens</strong><time>8:00 AM – 10:00 AM</time></li>
              </ul>
              <p className="confirmed-schedule-note">These sessions run alongside the Sunday service programme.</p>
            </article>
            <article className="confirmed-schedule-day">
              <span>WEDNESDAY</span>
              <h3>Midweek service</h3>
              <ul>
                <li><strong>Wednesday service</strong><time>12:00 PM – 2:00 PM</time></li>
              </ul>
            </article>
          </div>
        </section>

        <section className="sermons-note">
          <div>
            <span className="eyebrow">LISTEN & REFLECT</span>
            <h3>Recorded sermons</h3>
            <p>Recorded sermons are available as part of our church’s teaching and spiritual growth. Get in touch with the church to learn more.</p>
          </div>
          <BookOpen size={30} aria-hidden="true" />
        </section>

        <div className="announcement-panel">
          <CalendarDays size={27} />
          <div>
            <h3>Church announcements</h3>
            <p>
              Special dates and event details are shared by the church as they are confirmed. Contact us or visit our Facebook community for updates.
            </p>
          </div>
          <Link href="/contact" className="button button-gold">
            Contact the church <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

export function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);

  function previous() {
    setSelected((current) =>
      current === null ? null : (current + images.length - 1) % images.length
    );
  }

  function next() {
    setSelected((current) =>
      current === null ? null : (current + 1) % images.length
    );
  }

  return (
    <PageShell>
      <PageHero
        eyebrow="LIFE IN PICTURES"
        title="Our church."
        accent="Our moments."
        description="A glimpse of worship, fellowship and community."
        image="/images/img4.jpg"
      />

      <section className="inner-list-section">
        <div className="inner-section-heading">
          <span className="eyebrow">THE PHOTO COLLECTION</span>
          <h2>
            Stories told <em>in pictures.</em>
          </h2>
          <p>
            Select any photograph to view it in a larger format.
          </p>
        </div>

        <div className="photo-gallery">
          {images.map((src, index) => (
            <button
              className={`photo-gallery-item photo-gallery-item-${(index % 4) + 1}`}
              key={src}
              onClick={() => setSelected(index)}
              aria-label={`View church photograph ${index + 1}`}
            >
              <Image
                src={src}
                alt={`ACK St. Stephen Karunga gallery ${index + 1}`}
                fill
                sizes="(max-width: 700px) 50vw, 33vw"
              />
              <span>0{index + 1} <ArrowUpRight size={16} /></span>
            </button>
          ))}
        </div>
      </section>

      {selected !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={() => setSelected(null)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setSelected(null);
            if (event.key === "ArrowLeft") previous();
            if (event.key === "ArrowRight") next();
          }}
          tabIndex={0}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelected(null)}
            aria-label="Close photo viewer"
          >
            <X />
          </button>
          <button
            className="lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              previous();
            }}
            aria-label="Previous photo"
          >
            <ArrowLeft />
          </button>
          <div className="lightbox-image" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[selected]}
              alt={`Church photograph ${selected + 1}`}
              fill
              sizes="90vw"
              priority
            />
          </div>
          <button
            className="lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
            aria-label="Next photo"
          >
            <ArrowRight />
          </button>
          <span className="lightbox-count">
            {String(selected + 1).padStart(2, "0")} / {images.length}
          </span>
        </div>
      )}
    </PageShell>
  );
}

export function ContactPage() {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    church.address
  )}`;

  return (
    <PageShell>
      <PageHero
        eyebrow="WE WOULD LOVE TO WELCOME YOU"
        title="Let's"
        accent="connect."
        description="Whether you are planning your first visit, looking for a church home, or simply want to reach out, our doors and hearts are open."
        image="/images/img1.jpg"
      />

      <section className="contact-section">
        <div className="contact-intro">
          <div className="contact-intro-copy">
            <span className="eyebrow">A PLACE TO BELONG</span>

            <h2>
              Faith grows
              <br />
              <em>together.</em>
            </h2>

            <p>
              At ACK St. Stephen Karunga, we believe that
              church is more than a building. It is a family
              where people find faith, fellowship, encouragement
              and a place to belong.
            </p>

            <p>
              We would be delighted to hear from you, welcome
              you to a service, or help you find your way to us.
            </p>

            <a
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
              className="contact-directions-link"
            >
              Find your way to us
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="contact-location-card">
            <div className="location-card-image">
              <img
                src="/images/img1.jpg"
                alt="Welcome to ACK St. Stephen Karunga"
              />

              <div className="location-image-overlay">
                <span>YOU ARE WELCOME HERE</span>
                <h3>A community of faith.</h3>
              </div>
            </div>

            <div className="location-card-footer">
              <MapPin size={21} />
              <div>
                <strong>Visit our church</strong>
                <span>{church.address}</span>
              </div>
              <ArrowUpRight size={19} />
            </div>
          </div>
        </div>

        <div className="contact-divider">
          <span />
          <p>LET'S STAY CONNECTED</p>
          <span />
        </div>

        <div className="contact-heading">
          <span className="eyebrow">REACH OUT TO US</span>
          <h2>
            We'd love to
            <br />
            <em>hear from you.</em>
          </h2>
          <p>
            Choose the easiest way to connect with our church.
            We look forward to hearing from you.
          </p>
        </div>

        <div className="contact-methods">

          {church.phone && (
            <a
              href={`tel:${church.phone}`}
              className="contact-method-card"
            >
              <div className="contact-method-icon">
                <Phone size={25} />
              </div>

              <span className="contact-method-label">
                GIVE US A CALL
              </span>

              <h3>Call the church</h3>

              <p>{church.phone}</p>

              <div className="contact-method-action">
                Call us now
                <ArrowUpRight size={17} />
              </div>
            </a>
          )}

          {church.whatsappLink && (
            <a
              href={church.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="contact-method-card contact-whatsapp"
            >
              <div className="contact-method-icon">
                <MessageCircle size={25} />
              </div>

              <span className="contact-method-label">
                LET'S CHAT
              </span>

              <h3>WhatsApp</h3>

              <p>
                Have a question? Send us a message
                and connect with our church.
              </p>

              <div className="contact-method-action">
                Chat on WhatsApp
                <ArrowUpRight size={17} />
              </div>
            </a>
          )}

          {church.facebook && (
            <a
              href={church.facebook}
              target="_blank"
              rel="noreferrer"
              className="contact-method-card"
            >
              <div className="contact-method-icon">
                <Globe size={25} />
              </div>

              <span className="contact-method-label">
                JOIN OUR COMMUNITY
              </span>

              <h3>Facebook</h3>

              <p>
                Follow our community and stay connected
                with church activities and updates.
              </p>

              <div className="contact-method-action">
                Visit our Facebook community
                <ArrowUpRight size={17} />
              </div>
            </a>
          )}

        </div>

        <div className="contact-visit">
          <div className="contact-visit-icon">
            <Heart size={30} />
          </div>

          <div className="contact-visit-content">
            <span className="eyebrow">YOUR PLACE IS HERE</span>

            <h2>
              Come as you are.
              <br />
              <em>Leave encouraged.</em>
            </h2>

            <p>
              Whether you are new to the area, exploring
              your faith, or searching for a church family,
              we would be honoured to welcome you.
            </p>

            <a
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
              className="button button-gold"
            >
              <Navigation size={17} />
              Get directions
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="contact-visit-decoration">
            <span>FAITH</span>
            <span>FELLOWSHIP</span>
            <span>COMMUNITY</span>
          </div>
        </div>

      </section>
    </PageShell>
  );
}