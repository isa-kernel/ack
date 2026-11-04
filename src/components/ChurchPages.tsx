
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
  // Images,
  Users,
  BookOpen,
  HandHeart,
} from "lucide-react";

const images = Array.from(
  { length: 12 },
  (_, index) => `/images/img${index + 1}.jpg`
);

const ministries = [
  {
    title: "Worship & Praise",
    image: "/images/img3.jpg",
    icon: Heart,
    description:
      "Worship is at the heart of our life together. We gather to praise God, pray and give thanks.",
  },
  {
    title: "Fellowship",
    image: "/images/img5.jpg",
    icon: Users,
    description:
      "Growing relationships, encouraging one another and building a welcoming church family.",
  },
  {
    title: "Christian Teaching",
    image: "/images/img6.jpg",
    icon: BookOpen,
    description:
      "Growing in our understanding of Scripture and applying Christian teaching in everyday life.",
  },
  {
    title: "Community Service",
    image: "/images/img8.jpg",
    icon: HandHeart,
    description:
      "Putting faith into action by caring for our neighbours and serving the wider community.",
  },
];

const events = [
  {
    title: "Sunday Worship",
    type: "REGULAR GATHERING",
    image: "/images/img2.jpg",
    description:
      "Join the church family for worship, prayer, teaching and fellowship. Contact the church to confirm the current service schedule.",
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
      "Information about special services, celebrations and other church activities will be published here.",
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
        <Link href="/visit" className="inner-text-link">
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
            Explore some of the ways a church community can
            worship, learn and serve together.
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
          These are suggested ministry areas for the website.
          The actual ministries, groups, leaders and meeting
          schedules must be confirmed by the church.
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
            Check here for gatherings, announcements and
            special occasions.
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

        <div className="announcement-panel">
          <CalendarDays size={27} />
          <div>
            <h3>Church announcements</h3>
            <p>
              Upcoming dates and event announcements will be
              published here once the church calendar is confirmed.
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
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General enquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function update(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [event.target.name]: event.target.value });
    setSubmitted(false);
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Church website enquiry: ${form.subject}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\n\n${form.message}`
    );

    // Replace this with the church's verified email address.
    const churchEmail = "REPLACE_WITH_CHURCH_EMAIL";

    if (!churchEmail.includes("@")) {
      setSubmitted(true);
      return;
    }

    window.location.href = `mailto:${churchEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <PageShell>
      <PageHero
        eyebrow="WE WOULD LOVE TO HEAR FROM YOU"
        title="Let's"
        accent="connect."
        description="Have a question, need directions or want to know more about our church? Get in touch."
        image="/images/img1.jpg"
      />

      <section className="contact-layout">
        <div className="contact-information">
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>
            You're always
            <br />
            <em>welcome.</em>
          </h2>
          <p>
            We would be glad to hear from you. Reach out with
            an enquiry or find your way to ACK St. Stephen Karunga.
          </p>

          <div className="contact-detail">
            <MapPin />
            <div>
              <strong>Our location</strong>
              <span>Ndumberi, Kiambu County, Kenya</span>
            </div>
          </div>

          <div className="contact-detail">
            <Heart />
            <div>
              <strong>Join our community</strong>
              <span>We welcome visitors and new members.</span>
            </div>
          </div>

          <a
            className="button button-gold"
            href="https://www.google.com/maps/search/?api=1&query=ACK+St+Stephen+Karunga+Ndumberi"
            target="_blank"
            rel="noreferrer"
          >
            Get directions <ArrowUpRight size={16} />
          </a>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <span className="eyebrow">SEND AN ENQUIRY</span>
          <h3>How can we help?</h3>

          <label>
            Your name
            <input
              name="name"
              value={form.name}
              onChange={update}
              placeholder="Enter your name"
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
            What is this about?
            <select
              name="subject"
              value={form.subject}
              onChange={update}
            >
              <option>General enquiry</option>
              <option>Planning a visit</option>
              <option>Church activities</option>
              <option>Prayer request</option>
              <option>Other</option>
            </select>
          </label>

          <label>
            Your message
            <textarea
              name="message"
              value={form.message}
              onChange={update}
              placeholder="Write your message..."
              rows={5}
              required
            />
          </label>

          <button type="submit" className="button button-gold">
            Prepare enquiry <ArrowUpRight size={16} />
          </button>

          {submitted && (
            <p className="form-notice">
              The church email address has not yet been configured.
              Please contact the church directly for now.
            </p>
          )}
        </form>
      </section>
    </PageShell>
  );
}
