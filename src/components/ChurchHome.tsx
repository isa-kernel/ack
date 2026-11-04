"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  MapPin,
  Clock3,
  CalendarDays,
  Users,
  BookOpen,
  Play,
  // Heart,
  Cross,
} from "lucide-react";
import { church } from "@/lib/church";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const galleryImages = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
  "/images/img7.jpg",
  "/images/img8.jpg",
  "/images/img9.jpg",
  "/images/img10.jpg",
  "/images/img11.jpg",
  "/images/img12.jpg",
];

const ministries = [
  {
    number: "01",
    title: "Worship & Praise",
    description:
      "A place to come together in worship, prayer and thanksgiving.",
    image: "/images/img3.jpg",
  },
  {
    number: "02",
    title: "Fellowship",
    description:
      "Building meaningful relationships and growing together in faith.",
    image: "/images/img5.jpg",
  },
  {
    number: "03",
    title: "Community",
    description:
      "Living out our faith through care, compassion and service.",
    image: "/images/img8.jpg",
  },
];

const wheelWords = [
  "FAITH",
  "WORSHIP",
  "FELLOWSHIP",
  "HOPE",
  "SERVICE",
  "COMMUNITY",
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Church", href: "/about" },
  { label: "Ministries", href: "/ministries" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Visit Us", href: "/contact" },
];

export default function ChurchHome() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) return;

      // HERO: gentle cinematic reveal and image movement
      const heroTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "+=100%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      heroTimeline
        .to(".hero-image", {
          scale: 1.22,
          opacity: 0.45,
          ease: "none",
        })
        .to(
          ".hero-content",
          {
            y: -120,
            opacity: 0,
            scale: 0.92,
            ease: "none",
          },
          0
        )
        .to(
          ".hero-bottom",
          {
            y: 50,
            opacity: 0,
          },
          0
        );

      // RADIAL WHEEL: rotate as the user scrolls
      gsap.to(".wheel-rotating", {
        rotation: 360,
        ease: "none",
        scrollTrigger: {
          trigger: ".wheel-section",
          start: "top top",
          end: "+=1500",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      gsap.from(".wheel-center", {
        scale: 0.65,
        opacity: 0,
        scrollTrigger: {
          trigger: ".wheel-section",
          start: "top 75%",
          end: "top 25%",
          scrub: 1,
        },
      });

      // GALLERY: scatter -> circle -> winding path -> straight line
      const gallerySection = document.querySelector(
        ".gallery-section"
      ) as HTMLElement | null;

      const galleryCards = gsap.utils.toArray<HTMLElement>(
        ".gallery-card"
      );

      if (gallerySection && galleryCards.length) {
        const getPositions = () => {
          const width = gallerySection.clientWidth;
          const height = gallerySection.clientHeight;
          const mobile = width < 700;

          const scatter = [
            [-width * 0.35, -height * 0.22],
            [width * 0.29, -height * 0.25],
            [-width * 0.38, height * 0.14],
            [width * 0.35, height * 0.12],
            [-width * 0.16, -height * 0.35],
            [width * 0.12, height * 0.33],
            [-width * 0.36, height * 0.34],
            [width * 0.38, -height * 0.02],
            [-width * 0.08, height * 0.04],
            [width * 0.08, -height * 0.34],
            [width * 0.23, height * 0.25],
            [-width * 0.25, -height * 0.04],
          ];

          const circle = galleryCards.map((_, index) => {
            const angle =
              (index / galleryCards.length) * Math.PI * 2 -
              Math.PI / 2;
            const radiusX = mobile ? width * 0.29 : width * 0.31;
            const radiusY = mobile ? height * 0.29 : height * 0.32;

            return [
              Math.cos(angle) * radiusX,
              Math.sin(angle) * radiusY,
            ];
          });

          const snake = galleryCards.map((_, index) => {
            const x = (index - 5.5) * (mobile ? 25 : 75);
            const y = Math.sin(index * 0.9) * (mobile ? 75 : 115);
            return [x, y];
          });

          const line = galleryCards.map((_, index) => [
            (index - 5.5) * (mobile ? 29 : 95),
            0,
          ]);

          return { scatter, circle, snake, line };
        };

        const positions = getPositions();

        galleryCards.forEach((card, index) => {
          const [x, y] = positions.scatter[index];
          gsap.set(card, {
            x,
            y,
            xPercent: -50,
            yPercent: -50,
            rotation: index % 2 === 0 ? -9 : 9,
            scale: 0.9,
          });
        });

        const galleryTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: gallerySection,
            start: "top top",
            end: "+=3000",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        galleryCards.forEach((card, index) => {
          const [cx, cy] = positions.circle[index];
          const [sx, sy] = positions.snake[index];
          const [lx, ly] = positions.line[index];

          galleryTimeline.to(
            card,
            {
              x: cx,
              y: cy,
              rotation: index % 2 === 0 ? 5 : -5,
              scale: 1,
              duration: 1,
              ease: "power2.inOut",
            },
            0
          );

          galleryTimeline.to(
            card,
            {
              x: sx,
              y: sy,
              rotation: index % 2 === 0 ? -7 : 7,
              scale: 0.88,
              duration: 1,
              ease: "power2.inOut",
            },
            1.25
          );

          galleryTimeline.to(
            card,
            {
              x: lx,
              y: ly,
              rotation: 0,
              scale: 0.72,
              duration: 1,
              ease: "power2.inOut",
            },
            2.5
          );
        });

        galleryTimeline
          .to(
            ".gallery-heading",
            { opacity: 0, y: -35, duration: 0.35 },
            1.05
          )
          .to(
            ".gallery-heading",
            { opacity: 1, y: 0, duration: 0.35 },
            2.45
          );

        ScrollTrigger.addEventListener("refreshInit", () => {
          const next = getPositions();
          galleryCards.forEach((card, index) => {
            const [x, y] = next.scatter[index];
            gsap.set(card, { x, y });
          });
        });
      }

      // Reveal elements as they enter the viewport
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 55,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".ministry-card").forEach((card, i) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 0.9,
          delay: i * 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ministries-grid",
            start: "top 80%",
            once: true,
          },
        });
      });
    }, rootRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main ref={rootRef}>
      {/* NAVIGATION */}
      <header className="site-header">
        <Link href="#home" className="brand">
          <span className="brand-mark">
            <Image
              src="/images/logo.jpeg"
              alt="ACK St. Stephen Karunga logo"
              width={58}
              height={58}
              priority
            />
          </span>
          <span className="brand-name">
            <strong>ACK ST. STEPHEN</strong>
            <small>KARUNGA · NDUMBERI</small>
          </span>
        </Link>

        <nav className={`desktop-nav ${menuOpen ? "nav-open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="nav-visit"
            onClick={() => setMenuOpen(false)}
          >
            Plan a visit <ArrowUpRight size={15} />
          </Link>
        </nav>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-image" />
        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="eyebrow hero-eyebrow">
            ANGLICAN CHURCH OF KENYA · NDUMBERI
          </span>

          <h1>
            A place to
            <br />
            <em>worship.</em>
            <br />
            A community
            <br />
            to belong.
          </h1>

          <p>
            Growing together in faith, serving our community
            and sharing the love of Christ.
          </p>

          <div className="hero-actions">
            <a href="/contact" className="button button-gold">
              Plan your visit <ArrowUpRight size={17} />
            </a>
            <a href="#about" className="button button-outline">
              Discover our church
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <span>01 — A COMMUNITY OF FAITH</span>
          <span className="scroll-cue">
            SCROLL TO EXPLORE <ArrowDown size={15} />
          </span>
          <span>NDUMBERI · KIAMBU</span>
        </div>

        <div className="hero-side-label">WORSHIP · GROW · SERVE</div>
      </section>

      {/* RADIAL WHEEL */}
      <section className="wheel-section">
        <div className="wheel-background-text">FAITH</div>

        <div className="wheel-stage">
          <div className="wheel-rotating">
            <div className="wheel-ring wheel-ring-one" />
            <div className="wheel-ring wheel-ring-two" />
            <div className="wheel-ring wheel-ring-three" />

            {wheelWords.map((word, index) => (
              <span
                className={`wheel-word wheel-word-${index + 1}`}
                key={word}
              >
                {word}
              </span>
            ))}

            {Array.from({ length: 24 }).map((_, index) => (
              <span
                key={index}
                className="wheel-ray"
                style={{ transform: `rotate(${index * 15}deg)` }}
              />
            ))}
          </div>

          <div className="wheel-center">
            <span className="eyebrow">OUR FOUNDATION</span>
            <h2>
              Worship.
              <br />
              <em>Grow.</em>
              <br />
              Serve.
            </h2>
            <Cross size={27} strokeWidth={1.3} />
          </div>
        </div>

        <div className="wheel-caption">
          <span>FAITH THAT MOVES US</span>
          <span>02 / 08</span>
        </div>
      </section>

      {/* PHOTOGRAPHIC GALLERY */}
      <section className="gallery-section">
        <div className="gallery-topline">
          <span>03 — LIFE TOGETHER</span>
          <span>PEOPLE · FAITH · COMMUNITY</span>
        </div>

        <div className="gallery-heading">
          <span className="eyebrow">MORE THAN A BUILDING</span>
          <h2>
            We are a
            <br />
            <em>community.</em>
          </h2>
          <p>
            A family brought together by faith, strengthened
            through fellowship and called to serve.
          </p>
        </div>

        <div className="gallery-canvas">
          {galleryImages.map((image, index) => (
            <div className={`gallery-card gallery-card-${index + 1}`} key={image}>
              <Image
                src={image}
                alt={`Church life photograph ${index + 1}`}
                fill
                sizes="(max-width: 700px) 110px, 220px"
                priority={index < 4}
              />
              <span>0{index + 1}</span>
            </div>
          ))}
        </div>

        <div className="gallery-bottomline">
          <span>OUR STORY IS MADE OF PEOPLE</span>
          <span>KEEP SCROLLING <ArrowDown size={14} /></span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section section-pad" id="about">
        <div className="about-image-wrap" data-reveal>
          <Image
            src="/images/img1.jpg"
            alt="St. Stephen Karunga church"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
          <div className="image-index">ACK · ST. STEPHEN KARUNGA</div>
        </div>

        <div className="about-copy" data-reveal>
          <span className="eyebrow">WELCOME TO OUR CHURCH</span>
          <h2>
            Rooted in faith.
            <br />
            <em>Growing together.</em>
          </h2>
          <p>
            Welcome to ACK St. Stephen Karunga. We are a church
            community in Ndumberi, brought together by faith
            and a shared desire to worship, grow and serve.
          </p>
          <p>
            Whether you are visiting for the first time or
            looking for a church family, we would be glad to
            welcome you.
          </p>
          <a href="/contact" className="text-link">
            Come and visit us <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* MINISTRIES */}
      <section className="ministries-section section-pad" id="ministries">
        <div className="section-heading" data-reveal>
          <div>
            <span className="eyebrow">GROWING TOGETHER</span>
            <h2>
              Life in our
              <br />
              <em>community.</em>
            </h2>
          </div>
          <p>
            Faith is lived together. Join our worship gatherings, connect with the church family and grow in faith.
          </p>
        </div>

        <div className="ministries-grid">
          {ministries.map((ministry) => (
            <article className="ministry-card" key={ministry.number}>
              <div className="ministry-image">
                <Image
                  src={ministry.image}
                  alt={ministry.title}
                  fill
                  sizes="(max-width: 700px) 100vw, 33vw"
                />
                <span>{ministry.number}</span>
              </div>
              <div className="ministry-info">
                <h3>{ministry.title}</h3>
                <p>{ministry.description}</p>
                <span className="ministry-arrow">
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </article>
          ))}
        </div>
        <p className="content-note">
          Sunday School and teen sessions are part of our Sunday programme. Contact the church for information about other ministry groups.
        </p>
      </section>

      {/* SERVICE SCHEDULE */}
      <section className="service-experience" id="service-times">
        <div className="service-intro">
          <span className="eyebrow">COME WORSHIP WITH US</span>
          <h2>
            There is a place
            <br />
            <em>for you here.</em>
          </h2>
          <p>
            Join us on Sundays and Wednesdays for worship, prayer, learning and fellowship.
          </p>
        </div>

        <div className="service-main">
          <div className="service-main-heading">
            <div>
              <span className="service-kicker">EVERY SUNDAY</span>
              <h3>Sunday Worship</h3>
            </div>
            <CalendarDays />
          </div>

          <div className="service-times">
            {church.services.map((service, index) => (
              <article className="service-time-card" key={service.name}>
                <span className="service-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4>{service.name}</h4>
                  <span>{service.audience}</span>
                </div>
                <strong>{service.time}</strong>
              </article>
            ))}
          </div>

          <div className="service-special">
            <div className="service-special-item">
              <BookOpen />
              <div>
                <span>CHILDREN</span>
                <h4>{church.sundaySchool.name}</h4>
                <p>{church.sundaySchool.time}</p>
              </div>
            </div>

            <div className="service-special-item">
              <Users />
              <div>
                <span>YOUNG PEOPLE</span>
                <h4>{church.teens.name}</h4>
                <p>{church.teens.time}</p>
              </div>
            </div>
          </div>

          <div className="service-weekday">
            <Clock3 />
            <div>
              <span>MIDWEEK FELLOWSHIP</span>
              <h4>{church.weekdayServices[0].name}</h4>
              <p>
                {church.weekdayServices[0].day} ·{" "}
                {church.weekdayServices[0].time}
              </p>
            </div>
          </div>
        </div>

        <div className="service-invitation">
          <p>We look forward to welcoming you.</p>
          <a href={church.whatsappLink} target="_blank" rel="noreferrer">
            Ask us about visiting <span>↗</span>
          </a>
        </div>
      </section>

      {/* VISIT */}
      <section className="visit-section" id="visit">
        <div className="visit-image" />
        <div className="visit-overlay" />
        <div className="visit-content" data-reveal>
          <span className="eyebrow">YOU ARE WELCOME HERE</span>
          <h2>
            There is a place
            <br />
            <em>for you.</em>
          </h2>
          <p>
            Join us for worship and fellowship at ACK St. Stephen
            Karunga, Ndumberi.
          </p>

          <div className="visit-details">
            <div>
              <Clock3 size={20} />
              <span>
                <strong>Service times</strong>
                <small>Sunday worship and Wednesday service</small>
              </span>
            </div>
            <div>
              <MapPin size={20} />
              <span>
                <strong>Find us</strong>
                <small>Ndumberi, Kiambu County, Kenya</small>
              </span>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=ACK+St+Stephen+Karunga+Ndumberi"
            target="_blank"
            rel="noreferrer"
            className="button button-gold"
          >
            Get directions <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      {/* EVENTS / SERMONS PLACEHOLDER */}
      <section className="events-section section-pad" id="events">
        <div className="events-intro" data-reveal>
          <span className="eyebrow">STAY CONNECTED</span>
          <h2>
            Life beyond
            <br />
            <em>Sunday.</em>
          </h2>
          <p>
            Keep up with church gatherings, special services,
            teaching and community activities.
          </p>
        </div>

        <div className="events-feature" data-reveal>
          <div className="events-feature-image">
            <Image
              src="/images/img10.jpg"
              alt="Church gathering"
              fill
              sizes="(max-width: 800px) 100vw, 55vw"
            />
            <span className="play-button"><Play fill="currentColor" /></span>
          </div>
          <div className="events-feature-copy">
            <span className="eyebrow">RECORDED SERMONS</span>
            <h3>Teaching to reflect on</h3>
            <p>
              Stay connected with church announcements and recorded sermons. Contact us to learn more about available recordings.
            </p>
            <Link href="/events" className="text-link">
              Explore church gatherings <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING INVITATION */}
      <section className="closing-section">
        <span className="eyebrow">ACK ST. STEPHEN KARUNGA · NDUMBERI</span>
        <h2>
          Worship.
          <br />
          <em>Grow.</em>
          <br />
          Serve.
        </h2>
        <p>
          We look forward to welcoming you.
        </p>
        <a href="/contact" className="button button-gold">
          Plan your visit <ArrowUpRight size={17} />
        </a>
        <div className="closing-cross"><Cross size={35} /></div>
      </section>

      {/* FOOTER */}

      <footer className="site-footer">
        <div className="footer-main">
          <Link href="#home" className="brand footer-brand">
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

          <p>
            A place to worship, a community to belong.
          </p>

          <div className="footer-links">
            <a href="#about">Our church</a>
            <a href="#ministries">Ministries</a>
            <a href="#events">Events</a>
            <a href="/contact">Visit us</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ACK St. Stephen Karunga</span>
          <span>WORSHIP · GROW · SERVE</span>
          <span>
            POWERED BY{" "}
            <a
              href="https://isakernel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-credit-link"
            >
              ISAKERNEL.COM
            </a>
          </span>
        </div>
      </footer>

    </main>
  );
}