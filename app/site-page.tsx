import {
  LuBoxes,
  LuBriefcaseBusiness,
  LuGauge,
  LuPersonStanding,
  LuZap,
} from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import {
  SiAutodeskmaya,
  SiPatreon,
  SiUnity,
  SiUnrealengine,
  SiX,
  SiYoutube,
} from "react-icons/si";
import type { IconType } from "react-icons";
import LanguageSwitcher from "./language-switcher";
import type { LocaleCode } from "./i18n-config";
import SectionNavigation from "./section-navigation";
import ScrollToTop from "./scroll-to-top";
import { siteCopy, type SkillId } from "./site-copy";

const skillIcons: Record<SkillId, IconType> = {
  maya: SiAutodeskmaya,
  speed: LuZap,
  unreal: SiUnrealengine,
  leadership: LuBriefcaseBusiness,
  unity: SiUnity,
  optimization: LuGauge,
  mocap: LuPersonStanding,
  tools: LuBoxes,
};

const heroVideoSources = [
  "https://www.youtube-nocookie.com/embed/videoseries?list=PLRBNpfO1m7OMi352VefAqaoPZ74WBEThQ&rel=0",
  "https://www.youtube-nocookie.com/embed/A8YGgcA3BWM?rel=0",
] as const;

const socialLinks = [
  {
    label: "Patreon",
    href: "https://www.patreon.com/senioranimator",
    icon: SiPatreon,
    color: "#000000",
  },
  {
    label: "X.COM",
    href: "https://twitter.com/AlekseyMove",
    icon: SiX,
    color: "#000000",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alekseybesedin/",
    icon: FaLinkedinIn,
    color: "#0a66c2",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@alekseybesedin/videos",
    icon: SiYoutube,
    color: "#d90000",
  },
];

const contacts = [
  { label: "Discord", value: "rabotnek" },
  {
    label: "Email",
    value: "aleksey.move@gmail.com",
    href: "mailto:aleksey.move@gmail.com",
  },
  {
    label: "Telegram",
    value: "senioranimator",
    href: "https://t.me/senioranimator",
  },
];

type SitePageProps = {
  locale: LocaleCode;
  languageBootstrapScript?: string;
};

export default function SitePage({ locale, languageBootstrapScript }: SitePageProps) {
  const copy = siteCopy[locale];

  return (
    <>
      {languageBootstrapScript ? (
        <script
          id="language-bootstrap"
          dangerouslySetInnerHTML={{ __html: languageBootstrapScript }}
        />
      ) : null}
      <SectionNavigation />
      <a className="skip-link" href="#main-content">{copy.skipLink}</a>
      <div className="scrubbar" aria-hidden="true">
        <span />
      </div>

      <header className="site-header">
        <a className="brand" href="#main" aria-label={copy.brandLabel} translate="no">
          <span className="brand-mark">GW</span>
          <span>Aleksei Besedin</span>
        </a>
        <div className="header-controls">
          <LanguageSwitcher currentLocale={locale} label={copy.languageSelector} />
          <nav className="site-nav" aria-label={copy.navigationLabel}>
            <a href="#main">{copy.nav.main}</a>
            <a href="#about">{copy.nav.about}</a>
            <a href="#training">{copy.nav.training}</a>
            <a href="#contact">{copy.nav.contact}</a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="main">
          <div className="hero-copy">
            <p className="eyebrow hero-role">
              <span className="status-dot" aria-hidden="true" /> {copy.hero.role}
            </p>
            <h1 translate="no">
              <span className="name-line">
                <strong>Aleksei</strong> <span>Besedin</span>
              </span>
              <em>Gnome Wizard</em>
            </h1>
            <p className="hero-projects">
              <strong>{copy.hero.projectsLabel}</strong> {copy.hero.projects}
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href="https://youtube.com/playlist?list=PLRBNpfO1m7OMi352VefAqaoPZ74WBEThQ&si=28YoRoe8Vd4h3JJk"
                target="_blank"
                rel="noreferrer"
              >
                {copy.hero.portfolio} <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-training" href="#training">
                {copy.hero.training} <span aria-hidden="true">↓</span>
              </a>
              <a
                className="button button-ghost"
                href="https://alekseymove.gumroad.com/"
                target="_blank"
                rel="noreferrer"
              >
                {copy.hero.scripts} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="hero-reels">
            <a
              className="button button-primary video-library-button"
              href="https://youtube.com/playlist?list=PLRBNpfO1m7OMi352VefAqaoPZ74WBEThQ&si=28YoRoe8Vd4h3JJk"
              target="_blank"
              rel="noreferrer"
            >
              {copy.hero.allVideos} <span aria-hidden="true">↗</span>
            </a>
            {heroVideoSources.map((src, index) => (
              <div className="reel-shell" key={src}>
                <div className="video-frame">
                  <iframe
                    src={src}
                    title={copy.hero.videoTitles[index]}
                    width="1280"
                    height="720"
                    loading={index === 0 ? "eager" : "lazy"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="frame-corner frame-corner-a" />
                <div className="frame-corner frame-corner-b" />
              </div>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-heading">
            <h2>{copy.about.heading}</h2>
            <p className="experience-stamp">
              <span>{copy.about.experienceLabel}</span>
              <strong>{copy.about.experienceValue}</strong>
            </p>
          </div>

          <div className="about-skills-heading">
            <span>{copy.about.skillsLabel}</span>
            <p>{copy.about.skillsCaption}</p>
          </div>
          <div className="about-skills">
            {copy.about.skills.map((skill) => {
              const Icon = skillIcons[skill.id];

              return (
                <article className="about-skill" key={skill.id}>
                  <div className="about-skill-heading">
                    <div className="about-skill-icon" aria-hidden="true"><Icon /></div>
                    <h3>{skill.title}</h3>
                  </div>
                  <p>{skill.copy}</p>
                </article>
              );
            })}
          </div>

          <div className="about-socials-heading">
            <span>{copy.about.socialsLabel}</span>
          </div>
          <div className="about-socials">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  className="about-social"
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  key={social.label}
                >
                  <span
                    className="about-social-icon"
                    style={{ backgroundColor: social.color }}
                    aria-hidden="true"
                  >
                    <Icon />
                  </span>
                  <strong className="about-social-label" translate="no">{social.label}</strong>
                  <span className="about-social-arrow" aria-hidden="true">↗</span>
                </a>
              );
            })}
          </div>
        </section>

        <section
          className="section mentoring-section"
          id="training"
          aria-labelledby="training-title"
        >
          <div className="mentoring-hero">
            <div>
              <h2 id="training-title">
                {copy.training.heading}{" "}
                <span className="keep-together">{copy.training.headingSubject}</span>
              </h2>
            </div>
            <div className="mentoring-lede">
              {copy.training.lede.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <p className="language-note">{copy.training.languageNote}</p>
            </div>
          </div>

          <div className="mentoring-track">
            <article className="mentoring-chapter">
              <header>
                <span className="chapter-index">01</span>
                <p>{copy.training.benefitsLabel}</p>
              </header>
              <div className="chapter-content">
                <h3>{copy.training.benefitsHeading}</h3>
                <ul className="mentoring-list">
                  {copy.training.benefits.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <p>{copy.training.benefitsOutro}</p>
              </div>
            </article>

            <article className="mentoring-chapter">
              <header>
                <span className="chapter-index">02</span>
                <p>{copy.training.startLabel}</p>
              </header>
              <div className="chapter-content">
                <h3>{copy.training.startHeading}</h3>
                {copy.training.startCopy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </article>

            <article className="mentoring-chapter">
              <header>
                <span className="chapter-index">03</span>
                <p>{copy.training.formatsLabel}</p>
              </header>
              <div className="chapter-content">
                <h3>{copy.training.formatsHeading}</h3>
                <div className="lesson-format-list">
                  {copy.training.formats.map((format) => (
                    <div className="lesson-format" key={format.title}>
                      <strong>{format.title}</strong>
                      <p>{format.copy}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article className="mentoring-chapter mentoring-chapter-pricing">
              <header>
                <span className="chapter-index">04</span>
                <p>{copy.training.pricingLabel}</p>
              </header>
              <div className="chapter-content">
                <h3>{copy.training.pricingHeading}</h3>
                <div className="mentoring-prices">
                  <div className="consultation-price">
                    <span>{copy.training.consultation}</span>
                    <strong>$200</strong>
                    <small>{copy.training.oneHour}</small>
                  </div>
                  <div className="training-prices">
                    <span>{copy.training.training}</span>
                    <p><strong>$200</strong><small>{copy.training.firstHour}</small></p>
                    <p><strong>$150</strong><small>{copy.training.secondHour}</small></p>
                    <p><strong>$80</strong><small>{copy.training.nextHour}</small></p>
                  </div>
                </div>
                <p>{copy.training.payment}</p>
                <p>
                  {copy.training.discountPrefix}
                  <a
                    className="inline-link"
                    href="https://alekseymove.gumroad.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {copy.training.scriptsLink} <span aria-hidden="true">↗</span>
                  </a>
                  {copy.training.discountSuffix}
                </p>
                <aside className="refund-note" aria-labelledby={`refund-title-${locale}`}>
                  <h4 id={`refund-title-${locale}`}>{copy.training.refundHeading}</h4>
                  <p>{copy.training.refundCopy}</p>
                </aside>
              </div>
            </article>
          </div>

          <div className="mentoring-cta">
            <p>{copy.training.ctaCopy}</p>
            <a className="button button-primary" href="#contact">
              {copy.training.ctaButton} <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <h2>
            {copy.contact.heading}<br />
            <em>{copy.contact.headingEmphasis}</em>
          </h2>
          <p className="contact-intro">{copy.contact.intro}</p>
          <div className="contact-list">
            {contacts.map((contact) => contact.href ? (
              <a
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                key={contact.label}
              >
                <span>{contact.label}</span>
                <strong translate="no">{contact.value}</strong>
                <i aria-hidden="true">↗</i>
              </a>
            ) : (
              <div className="contact-static" key={contact.label}>
                <span>{contact.label}</span>
                <strong translate="no">{contact.value}</strong>
                <i aria-hidden="true">ID</i>
              </div>
            ))}
          </div>
        </section>
      </main>

      <ScrollToTop label={copy.scrollToTop} />
    </>
  );
}

