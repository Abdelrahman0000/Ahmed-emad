import { useState } from "react";

export default function Nav({ t, lang, setLang }) {
  const [open, setOpen] = useState(false);

  const jump = () => setOpen(false);

  return (
    <header className="nav">
      <a className="brand" href="#top">
        <span className="brand-mark" aria-hidden="true" />
        AM
      </a>
      <nav className={open ? "links open" : "links"}>
        {t.nav.map((item) => (
          <a key={item.href} href={item.href} onClick={jump}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="nav-tools">
        <div className="lang" role="group" aria-label="Language">
          <button
            type="button"
            className={lang === "ar" ? "on" : ""}
            onClick={() => setLang("ar")}
          >
            عربي
          </button>
          <button
            type="button"
            className={lang === "en" ? "on" : ""}
            onClick={() => setLang("en")}
          >
            EN
          </button>
        </div>
        <button
          type="button"
          className="menu-btn"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          {open ? t.close : t.menu}
        </button>
      </div>
    </header>
  );
}
