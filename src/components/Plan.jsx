import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Plan({ t }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;
    const id = setInterval(() => {
      setIndex((value) => (value + 1) % t.phases.length);
    }, 4200);
    return () => clearInterval(id);
  }, [t.phases.length]);

  const phase = t.phases[index];

  return (
    <section className="section plan" id="plan">
      <div className="section-head">
        <p className="kicker">{t.planKicker}</p>
        <h2>{t.planTitle}</h2>
        <p className="sub">{t.planLead}</p>
      </div>

      <div className="segments">
        <p className="mini-label">{t.segmentsLabel}</p>
        <div className="segment-grid">
          {t.segments.map((item) => (
            <article key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="phase-board">
        <div className="phase-tabs">
          {t.phases.map((item, itemIndex) => (
            <button
              key={item.name}
              type="button"
              className={itemIndex === index ? "on" : ""}
              onClick={() => setIndex(itemIndex)}
            >
              <span>{item.when}</span>
              <strong>{item.name}</strong>
              {itemIndex === index && <i className="phase-bar" />}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={phase.name}
            className="phase-copy"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            <p>{phase.text}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="auto-row">
        <p className="mini-label">{t.autoLabel}</p>
        <ul>
          {t.autos.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <p className="mini-label">{t.targetsLabel}</p>
      <div className="targets">
        {t.targets.map((item) => (
          <article key={item.l}>
            <strong>{item.v}</strong>
            <span>{item.l}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
