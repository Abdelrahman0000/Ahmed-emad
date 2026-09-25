import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { copy } from "./content";
import SignalField from "./components/SignalField";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import WorkGallery from "./components/WorkGallery";
import Plan from "./components/Plan";

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function App() {
  const [lang, setLang] = useState("ar");
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
    document.documentElement.dir = t.dir;
    document.title = t.title;
  }, [t]);

  return (
    <>
      <SignalField />
      <Nav t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} />
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...t.marquee, ...t.marquee].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>

        <motion.section
          className="section about"
          id="about"
          variants={rise}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="kicker">{t.aboutKicker}</p>
          <div className="about-grid">
            <h2>{t.aboutTitle}</h2>
            <div>
              <p className="body">{t.aboutBody}</p>
              <dl className="facts">
                {t.facts.map((fact) => (
                  <div key={fact.k}>
                    <dt>{fact.k}</dt>
                    <dd>{fact.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <blockquote>
            <p>{t.quote}</p>
            <cite>{t.quoteBy}</cite>
          </blockquote>
        </motion.section>

        <section className="section" id="experience">
          <div className="section-head">
            <p className="kicker">{t.expKicker}</p>
            <h2>{t.expTitle}</h2>
          </div>
          <div className="jobs">
            {t.jobs.map((job) => (
              <article key={job.org} className="job">
                <p className="years">{job.years}</p>
                <h3>{job.role}</h3>
                <p className="org">{job.org}</p>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <aside className="edu">
            <div>
              <p className="kicker">{t.edu}</p>
              <p>{t.eduNote}</p>
            </div>
            <div>
              <p className="mini-label">{t.skillKicker}</p>
              <ul className="chips">
                {t.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        <section className="section story">
          <div className="section-head">
            <p className="kicker">{t.storyKicker}</p>
            <h2>{t.storyTitle}</h2>
            <p className="sub">{t.storyLead}</p>
          </div>
          <div className="strategy-grid">
            {t.strategies.map((item) => (
              <article key={item.n} className="float-card">
                <span>{item.n}</span>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <h3 className="steps-title">{t.stepsTitle}</h3>
          <ol className="steps">
            {t.steps.map((step) => (
              <li key={step.t}>
                <span>{step.n}</span>
                <strong>{step.t}</strong>
                <p>{step.d}</p>
              </li>
            ))}
          </ol>
        </section>

        <WorkGallery t={t} lang={lang} />
        <Plan t={t} />

        <section className="section proof">
          <div className="section-head">
            <p className="kicker">{t.proofKicker}</p>
            <h2>{t.proofTitle}</h2>
            <p className="sub">{t.proofLead}</p>
          </div>
          <div className="metrics">
            {t.metrics.map((metric) => (
              <article key={metric.l}>
                <strong>{metric.v}</strong>
                <span>{metric.l}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <p className="kicker">{t.contactKicker}</p>
          <h2>{t.contactTitle}</h2>
          <p className="sub">{t.contactLead}</p>
          <a className="mail-link" href={t.mailHref}>
            {t.email}
          </a>
          <div className="contact-actions">
            <a className="btn solid" href={t.waHref} target="_blank" rel="noreferrer">
              {t.wa}
            </a>
            <a className="btn ghost-btn" href={t.phoneHref}>
              {t.call} · {t.phone}
            </a>
            <a className="btn ghost-btn" href={t.mailHref}>
              {t.mail}
            </a>
          </div>
        </section>
      </main>
      <footer className="foot">
        <strong>{t.foot}</strong>
        <span>{t.footNote}</span>
      </footer>
    </>
  );
}
