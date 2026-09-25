import { useEffect, useMemo, useState } from "react";
import { works } from "../content";

export default function WorkGallery({ t, lang }) {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(null);

  const visible = useMemo(
    () => (filter === "all" ? works : works.filter((item) => item.brand === filter)),
    [filter],
  );

  useEffect(() => {
    if (!active) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section className="section" id="work">
      <div className="section-head">
        <p className="kicker">{t.workKicker}</p>
        <h2>{t.workTitle}</h2>
        <p className="sub">{t.workLead}</p>
      </div>
      <div className="filters" role="tablist">
        {t.filters.map((item) => (
          <button
            key={item.id}
            type="button"
            className={filter === item.id ? "on" : ""}
            onClick={() => setFilter(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="work-grid">
        {visible.map((item) => (
          <button
            type="button"
            className="shot"
            key={item.id}
            onClick={() => setActive(item)}
          >
            <img src={item.src} alt={item.title[lang]} loading="lazy" decoding="async" />
            <span className="shot-meta">
              <strong>{item.title[lang]}</strong>
              <em>{item.year}</em>
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.title[lang]}
          onClick={() => setActive(null)}
        >
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={active.src} alt={active.title[lang]} />
            <figcaption>
              <strong>{active.title[lang]}</strong>
              <span>{active.note[lang]}</span>
            </figcaption>
            <button type="button" onClick={() => setActive(null)}>
              {t.close}
            </button>
          </figure>
        </div>
      )}
    </section>
  );
}
