import { LuBoxes, LuBriefcaseBusiness, LuGauge, LuPersonStanding, LuZap } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiAutodeskmaya, SiPatreon, SiUnity, SiUnrealengine, SiX, SiYoutube } from "react-icons/si";
import SectionNavigation from "./section-navigation";
import ScrollToTop from "./scroll-to-top";

const aboutSkills = [
  {
    title: "Maya",
    icon: SiAutodeskmaya,
    copy: "Создание анимации любого стиля, вида, от 3-его и 1-ого лица, риг тела, риг лица, мультяшный риг, скининг любой сложности, написание скриптов на Mel, симуляция физики ragdoll и объектов",
  },
  {
    title: "Скорость",
    icon: LuZap,
    copy: "Высокая скорость работы из-за уникального подхода к работе",
  },
  {
    title: "Unreal Engine",
    icon: SiUnrealengine,
    copy: "Вся техническая настройка анимации, включая геймплейную анимацию, работу с Sequencer, настройку ragdoll-физики и тканей, рендер видео",
  },
  {
    title: "Руководство",
    icon: LuBriefcaseBusiness,
    copy: "Планирование, организация и оптимизация рабочего процесса, руководство",
  },
  {
    title: "Unity",
    icon: SiUnity,
    copy: "Полностью, включая написание кода на C#",
  },
  {
    title: "Оптимизация",
    icon: LuGauge,
    copy: "Огромный опыт и знания по оптимизации анимации на проекте, в том числе об ускорении рабочего процесса с анимацией на проекте",
  },
  {
    title: "Motion Capture",
    icon: LuPersonStanding,
    copy: "Запись, чистка, улучшение. Лицевой захват и захват тела",
  },
  {
    title: "Другие инструменты",
    icon: LuBoxes,
    copy: "Немного знаю: моделинг в Maya, Blender, Substance Painter, Marmoset, iClone",
  },
];

const heroVideos = [
  {
    src: "https://www.youtube-nocookie.com/embed/videoseries?list=PLRBNpfO1m7OMi352VefAqaoPZ74WBEThQ&rel=0",
    title: "Портфолио Aleksei Besedin на YouTube",
  },
  {
    src: "https://www.youtube-nocookie.com/embed/A8YGgcA3BWM?rel=0",
    title: "Анимационная работа Aleksei Besedin на YouTube",
  },
];

const socialLinks = [
  { label: "Patreon", href: "https://www.patreon.com/senioranimator", icon: SiPatreon, color: "#000000" },
  { label: "X.COM", href: "https://twitter.com/AlekseyMove", icon: SiX, color: "#000000" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alekseybesedin/", icon: FaLinkedinIn, color: "#0a66c2" },
  { label: "YouTube", href: "https://www.youtube.com/@alekseybesedin/videos", icon: SiYoutube, color: "#d90000" },
];

const mentoringBenefits = [
  "Живое индивидуальное обучение без заранее записанных видеоуроков",
  "Персональная программа на основе вашего уровня, интересов и целей",
  "Подготовка к занятиям: анализ работ, задачи, референсы, идеи и риги для портфолио",
  "Практика Maya, rigging, Unity, Unreal и оптимизации production-процесса",
  "Доступ к моей таблице ригов и референсов и разбор работы с моими скриптами",
];

const lessonFormats = [
  {
    title: "Я показываю",
    copy: "Объясняю подход, демонстрирую решение, даю задание и затем разбираю результат.",
  },
  {
    title: "Вы повторяете",
    copy: "Вы записываете мой процесс, повторяете его самостоятельно и получаете подробный разбор.",
  },
  {
    title: "Вы работаете",
    copy: "Выполняете задачу в реальном времени, а я наблюдаю за экраном и подсказываю непосредственно в процессе.",
  },
];

const contacts = [
  { label: "Discord", value: "rabotnek" },
  { label: "Email", value: "aleksey.move@gmail.com", href: "mailto:aleksey.move@gmail.com" },
  { label: "Telegram", value: "senioranimator", href: "https://t.me/senioranimator" },
];

export default function Home() {
  return (
    <>
      <SectionNavigation />
      <a className="skip-link" href="#main-content">Перейти к содержанию</a>
      <div className="scrubbar" aria-hidden="true">
        <span />
      </div>

      <header className="site-header">
        <a className="brand" href="#main" aria-label="Aleksei Besedin - к началу страницы">
          <span className="brand-mark">GW</span>
          <span>Aleksei Besedin</span>
        </a>
        <nav className="site-nav" aria-label="Основная навигация">
          <a href="#main">Основное</a>
          <a href="#about">Обо мне</a>
          <a href="#training">Обучение</a>
          <a href="#contact">Контакты</a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="main">
          <div className="hero-copy">
            <p className="eyebrow hero-role"><span className="status-dot" aria-hidden="true" /> Lead/Senior 3D Animator, Rigger, Tech Animator (Unreal, Unity), Mentor, Programmer</p>
            <h1>
              <span className="name-line"><strong>Aleksei</strong> <span>Besedin</span></span>
              <em>Gnome Wizard</em>
            </h1>
            <p className="hero-projects">
              <strong>Projects:</strong> Grand Outlaws, ILL, Regeneration and 3 not announced, Stygian: Outer Gods, Frozen Flame, Airport City, Guns of Boom, Jurassic Survival Island: ARK 2 Evolve and 1 not announced, Devar kids AR
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="https://youtube.com/playlist?list=PLRBNpfO1m7OMi352VefAqaoPZ74WBEThQ&si=28YoRoe8Vd4h3JJk" target="_blank" rel="noreferrer">Портфолио <span aria-hidden="true">↗</span></a>
              <a className="button button-training" href="#training">Консультации / обучение <span aria-hidden="true">↓</span></a>
              <a className="button button-ghost" href="https://alekseymove.gumroad.com/" target="_blank" rel="noreferrer">Скрипты <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <div className="hero-reels">
            <a className="button button-primary video-library-button" href="https://youtube.com/playlist?list=PLRBNpfO1m7OMi352VefAqaoPZ74WBEThQ&si=28YoRoe8Vd4h3JJk" target="_blank" rel="noreferrer">Смотреть все видео <span aria-hidden="true">↗</span></a>
            {heroVideos.map((video, index) => (
              <div className="reel-shell" key={video.src}>
                <div className="video-frame">
                  <iframe
                    src={video.src}
                    title={video.title}
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
            <h2>Обо мне</h2>
            <p className="experience-stamp">
              <span>Опыт работы</span>
              <strong>С 2016 года</strong>
            </p>
          </div>

          <div className="about-skills-heading">
            <span>Навыки</span>
            <p>Animation / Rigging / Technical production</p>
          </div>
          <div className="about-skills">
            {aboutSkills.map((skill) => {
              const Icon = skill.icon;

              return (
                <article className="about-skill" key={skill.title}>
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
            <span>Социальные сети</span>
          </div>
          <div className="about-socials">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a className="about-social" href={social.href} target="_blank" rel="noreferrer" key={social.label}>
                  <span className="about-social-icon" style={{ backgroundColor: social.color }} aria-hidden="true"><Icon /></span>
                  <strong className="about-social-label">{social.label}</strong>
                  <span className="about-social-arrow" aria-hidden="true">↗</span>
                </a>
              );
            })}
          </div>
        </section>

        <section className="section mentoring-section" id="training" aria-labelledby="training-title">
          <div className="mentoring-hero">
            <div>
              <h2 id="training-title">Консультации и индивидуальное обучение <span className="keep-together">3D-анимации</span></h2>
            </div>
            <div className="mentoring-lede">
              <p>Программа строится вокруг вашего уровня, интересов и конкретных задач. Подходит аниматорам разных уровней и особенно полезна Middle-специалистам.</p>
              <p>Моя специализация - игровая анимация и риг. На занятиях можно разбирать Maya, Unity, Unreal, портфолио и способы значительно ускорить рабочий процесс.</p>
              <p className="language-note">For English speakers, consultations and feedback are available in text format only.</p>
            </div>
          </div>

          <div className="mentoring-track">
            <article className="mentoring-chapter">
              <header>
                <span className="chapter-index">01</span>
                <p>Что вы получите</p>
              </header>
              <div className="chapter-content">
                <h3>Практика под вашу реальную работу</h3>
                <ul className="mentoring-list">
                  {mentoringBenefits.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <p>Каждое задание помогает развить навык и одновременно подготовить работу, способную усилить ваше портфолио.</p>
              </div>
            </article>

            <article className="mentoring-chapter">
              <header>
                <span className="chapter-index">02</span>
                <p>Как начинается работа</p>
              </header>
              <div className="chapter-content">
                <h3>Сначала обсуждаем задачу</h3>
                <p>До оплаты созваниваемся, разбираем ваш уровень, текущие работы и цели. После этого я формирую персональную программу и задачи.</p>
                <p>Первое занятие посвящено моему подходу и подробному анализу ваших работ. Второе совмещает продолжение разбора и практику.</p>
              </div>
            </article>

            <article className="mentoring-chapter">
              <header>
                <span className="chapter-index">03</span>
                <p>Форматы занятия</p>
              </header>
              <div className="chapter-content">
                <h3>Три режима живой работы</h3>
                <div className="lesson-format-list">
                  {lessonFormats.map((format) => (
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
                <p>Стоимость и условия</p>
              </header>
              <div className="chapter-content">
                <h3>Понятная цена, гибкий объём</h3>
                <div className="mentoring-prices">
                  <div className="consultation-price">
                    <span>Консультация</span>
                    <strong>$200</strong>
                    <small>за один час</small>
                  </div>
                  <div className="training-prices">
                    <span>Обучение</span>
                    <p><strong>$200</strong><small>первый час</small></p>
                    <p><strong>$150</strong><small>второй час</small></p>
                    <p><strong>$80</strong><small>каждый следующий</small></p>
                  </div>
                </div>
                <p>Оплата через PayPal или Payoneer. Сумма в рублях рассчитывается по актуальному курсу Google.</p>
                <p>При обучении от пяти часов действует скидка 30% на <a className="inline-link" href="https://alekseymove.gumroad.com/" target="_blank" rel="noreferrer">мои скрипты <span aria-hidden="true">↗</span></a>.</p>
                <aside className="refund-note" aria-labelledby="refund-title">
                  <h4 id="refund-title">Условия возврата</h4>
                  <p>Возврат невозможен после начала обучения или консультации, а также если с момента оплаты прошло больше одной недели. Исключение возможно, если задержка произошла с моей стороны.</p>
                </aside>
              </div>
            </article>
          </div>

          <div className="mentoring-cta">
            <p>Опишите задачу - формат и последовательность занятий обсудим заранее.</p>
            <a className="button button-primary" href="#contact">Обсудить <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <h2>Есть задача?<br /><em>Давайте обсудим.</em></h2>
          <p className="contact-intro">Работа, консультация, обучение или вопрос о скриптах - выберите удобный контакт для связи.</p>
          <div className="contact-list">
            {contacts.map((contact) => contact.href ? (
              <a href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noreferrer" : undefined} key={contact.label}>
                <span>{contact.label}</span><strong>{contact.value}</strong><i aria-hidden="true">↗</i>
              </a>
            ) : (
              <div className="contact-static" key={contact.label}>
                <span>{contact.label}</span><strong>{contact.value}</strong><i aria-hidden="true">ID</i>
              </div>
            ))}
          </div>
        </section>
      </main>

      <ScrollToTop />
    </>
  );
}
