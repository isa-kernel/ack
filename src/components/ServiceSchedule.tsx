
import { CalendarDays, Clock3, Users, BookOpen } from "lucide-react";
import { church } from "@/lib/church";

export default function ServiceSchedule() {
  return (
    <section className="service-experience" id="service-times">
      <div className="service-intro">
        <span className="eyebrow">COME WORSHIP WITH US</span>
        <h2>
          There is a place
          <br />
          <em>for you here.</em>
        </h2>
        <p>
          Join us throughout the week as we gather for worship,
          prayer, learning and fellowship.
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
                0{index + 1}
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
  );
}
