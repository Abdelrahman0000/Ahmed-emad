import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Hero({ t }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((value) => (value + 1) % t.roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, [t.roles]);

  return (
    <section className="hero" id="top">
      <p className="ghost" aria-hidden="true">
        {t.ghost}
      </p>
      <div className="hero-copy">
        <p className="live">
          <i />
          {t.live}
        </p>
        <p className="kicker">{t.kicker}</p>
        <h1 className="display-name">{t.name}</h1>
        <div className="role-slot">
          <AnimatePresence mode="wait">
            <motion.p
              key={t.roles[index]}
              className="role"
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -18, opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              {t.roles[index]}
            </motion.p>
          </AnimatePresence>
        </div>
        <p className="lead">{t.lead}</p>
        <div className="hero-actions">
          <a className="btn solid" href="#work">
            {t.ctaWork}
          </a>
          <a className="btn ghost-btn" href="#contact">
            {t.ctaTalk}
          </a>
        </div>
      </div>
      <div className="radar" aria-hidden="true">
        <span className="ring r1" />
        <span className="ring r2" />
        <span className="ring r3" />
        <span className="sweep" />
        <span className="orb-spin s1"><i className="orb o1" /></span>
        <span className="orb-spin s2"><i className="orb o2" /></span>
        <span className="orb-spin s3"><i className="orb o3" /></span>
        <img src="/media/portrait.jpg" alt="" />
      </div>
    </section>
  );
}
