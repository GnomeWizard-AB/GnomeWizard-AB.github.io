import type { Metadata } from "next";
import {
  alternateLanguageUrls,
  localePaths,
  type LocaleCode,
} from "./i18n-config";

export type SkillId =
  | "maya"
  | "speed"
  | "unreal"
  | "leadership"
  | "unity"
  | "optimization"
  | "mocap"
  | "tools";

type SiteCopy = {
  metadata: {
    title: string;
    description: string;
    openGraphLocale: string;
  };
  languageSelector: string;
  scrollToTop: string;
  skipLink: string;
  brandLabel: string;
  navigationLabel: string;
  nav: {
    main: string;
    about: string;
    training: string;
    contact: string;
  };
  hero: {
    role: string;
    projectsLabel: string;
    projects: string;
    portfolio: string;
    training: string;
    scripts: string;
    allVideos: string;
    videoTitles: [string, string];
  };
  about: {
    heading: string;
    experienceLabel: string;
    experienceValue: string;
    skillsLabel: string;
    skillsCaption: string;
    skills: Array<{ id: SkillId; title: string; copy: string }>;
    socialsLabel: string;
  };
  training: {
    heading: string;
    headingSubject: string;
    lede: [string, string];
    languageNote: string;
    benefitsLabel: string;
    benefitsHeading: string;
    benefits: string[];
    benefitsOutro: string;
    startLabel: string;
    startHeading: string;
    startCopy: [string, string];
    formatsLabel: string;
    formatsHeading: string;
    formats: Array<{ title: string; copy: string }>;
    pricingLabel: string;
    pricingHeading: string;
    consultation: string;
    training: string;
    oneHour: string;
    firstHour: string;
    secondHour: string;
    nextHour: string;
    payment: string;
    discountPrefix: string;
    scriptsLink: string;
    discountSuffix: string;
    refundHeading: string;
    refundCopy: string;
    ctaCopy: string;
    ctaButton: string;
  };
  contact: {
    heading: string;
    headingEmphasis: string;
    intro: string;
  };
};

export const siteCopy: Record<LocaleCode, SiteCopy> = {
  ru: {
    metadata: {
      title: "Aleksei Besedin - 3D-аниматор, риггер и технический аниматор",
      description:
        "Портфолио Aleksei Besedin: игровая 3D-анимация, rigging, technical animation, обучение и инструменты для Maya.",
      openGraphLocale: "ru_RU",
    },
    languageSelector: "Выбрать язык",
    scrollToTop: "Наверх",
    skipLink: "Перейти к содержанию",
    brandLabel: "Aleksei Besedin - к началу страницы",
    navigationLabel: "Основная навигация",
    nav: {
      main: "Основное",
      about: "Обо мне",
      training: "Обучение",
      contact: "Контакты",
    },
    hero: {
      role: "Lead/Senior 3D Animator, Rigger, Tech Animator (Unreal, Unity), Mentor, Programmer",
      projectsLabel: "Projects:",
      projects:
        "Grand Outlaws, ILL, Regeneration and 3 not announced, Stygian: Outer Gods, Frozen Flame, Airport City, Guns of Boom, Jurassic Survival Island: ARK 2 Evolve and 1 not announced, Devar kids AR",
      portfolio: "Портфолио",
      training: "Консультации / обучение",
      scripts: "Скрипты",
      allVideos: "Смотреть все видео",
      videoTitles: [
        "Портфолио Aleksei Besedin на YouTube",
        "Анимационная работа Aleksei Besedin на YouTube",
      ],
    },
    about: {
      heading: "Обо мне",
      experienceLabel: "Опыт работы",
      experienceValue: "С 2016 года",
      skillsLabel: "Навыки",
      skillsCaption: "Animation / Rigging / Technical production",
      skills: [
        {
          id: "maya",
          title: "Maya",
          copy: "Создание анимации любого стиля, вида, от 3-его и 1-ого лица, риг тела, риг лица, мультяшный риг, скининг любой сложности, написание скриптов на Mel, симуляция физики ragdoll и объектов",
        },
        {
          id: "speed",
          title: "Скорость",
          copy: "Высокая скорость работы из-за уникального подхода к работе",
        },
        {
          id: "unreal",
          title: "Unreal Engine",
          copy: "Вся техническая настройка анимации, включая геймплейную анимацию, работу с Sequencer, настройку ragdoll-физики и тканей, рендер видео",
        },
        {
          id: "leadership",
          title: "Руководство",
          copy: "Планирование, организация и оптимизация рабочего процесса, руководство",
        },
        {
          id: "unity",
          title: "Unity",
          copy: "Полностью, включая написание кода на C#",
        },
        {
          id: "optimization",
          title: "Оптимизация",
          copy: "Огромный опыт и знания по оптимизации анимации на проекте, в том числе об ускорении рабочего процесса с анимацией на проекте",
        },
        {
          id: "mocap",
          title: "Motion Capture",
          copy: "Запись, чистка, улучшение. Лицевой захват и захват тела",
        },
        {
          id: "tools",
          title: "Другие инструменты",
          copy: "Немного знаю: моделинг в Maya, Blender, Substance Painter, Marmoset, iClone",
        },
      ],
      socialsLabel: "Социальные сети",
    },
    training: {
      heading: "Консультации и индивидуальное обучение",
      headingSubject: "3D-анимации",
      lede: [
        "Программа строится вокруг вашего уровня, интересов и конкретных задач. Подходит аниматорам разных уровней и особенно полезна Middle-специалистам.",
        "Моя специализация - игровая анимация и риг. На занятиях можно разбирать Maya, Unity, Unreal, портфолио и способы значительно ускорить рабочий процесс.",
      ],
      languageNote:
        "Устное обучение и консультации доступны на русском языке. Консультации и обратная связь на английском доступны только в текстовом формате. Остальные языки относятся к интерфейсу сайта.",
      benefitsLabel: "Что вы получите",
      benefitsHeading: "Практика под вашу реальную работу",
      benefits: [
        "Живое индивидуальное обучение без заранее записанных видеоуроков",
        "Персональная программа на основе вашего уровня, интересов и целей",
        "Подготовка к занятиям: анализ работ, задачи, референсы, идеи и риги для портфолио",
        "Практика Maya, rigging, Unity, Unreal и оптимизации production-процесса",
        "Доступ к моей таблице ригов и референсов и разбор работы с моими скриптами",
      ],
      benefitsOutro:
        "Каждое задание помогает развить навык и одновременно подготовить работу, способную усилить ваше портфолио.",
      startLabel: "Как начинается работа",
      startHeading: "Сначала обсуждаем задачу",
      startCopy: [
        "До оплаты созваниваемся, разбираем ваш уровень, текущие работы и цели. После этого я формирую персональную программу и задачи.",
        "Первое занятие посвящено моему подходу и подробному анализу ваших работ. Второе совмещает продолжение разбора и практику.",
      ],
      formatsLabel: "Форматы занятия",
      formatsHeading: "Три режима живой работы",
      formats: [
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
      ],
      pricingLabel: "Стоимость и условия",
      pricingHeading: "Понятная цена, гибкий объём",
      consultation: "Консультация",
      training: "Обучение",
      oneHour: "за один час",
      firstHour: "первый час",
      secondHour: "второй час",
      nextHour: "каждый следующий",
      payment:
        "Оплата через PayPal или Payoneer. Сумма в рублях рассчитывается по актуальному курсу Google.",
      discountPrefix: "При обучении от пяти часов действует скидка 30% на ",
      scriptsLink: "мои скрипты",
      discountSuffix: ".",
      refundHeading: "Условия возврата",
      refundCopy:
        "Возврат невозможен после начала обучения или консультации, а также если с момента оплаты прошло больше одной недели. Исключение возможно, если задержка произошла с моей стороны.",
      ctaCopy: "Опишите задачу - формат и последовательность занятий обсудим заранее.",
      ctaButton: "Обсудить",
    },
    contact: {
      heading: "Есть задача?",
      headingEmphasis: "Давайте обсудим.",
      intro:
        "Работа, консультация, обучение или вопрос о скриптах - выберите удобный контакт для связи.",
    },
  },
  en: {
    metadata: {
      title: "Aleksei Besedin - 3D Animator, Rigger & Technical Animator",
      description:
        "Aleksei Besedin's portfolio: game-focused 3D animation, rigging, technical animation, mentoring and Maya tools.",
      openGraphLocale: "en_US",
    },
    languageSelector: "Choose language",
    scrollToTop: "Back to top",
    skipLink: "Skip to content",
    brandLabel: "Aleksei Besedin - back to the top",
    navigationLabel: "Main navigation",
    nav: {
      main: "Main",
      about: "About",
      training: "Training",
      contact: "Contacts",
    },
    hero: {
      role: "Lead/Senior 3D Animator, Rigger, Technical Animator (Unreal, Unity), Mentor, Programmer",
      projectsLabel: "Projects:",
      projects:
        "Grand Outlaws, ILL, Regeneration and 3 unannounced projects, Stygian: Outer Gods, Frozen Flame, Airport City, Guns of Boom, Jurassic Survival Island: ARK 2 Evolve and 1 unannounced project, Devar kids AR",
      portfolio: "Portfolio",
      training: "Consultations / training",
      scripts: "Scripts",
      allVideos: "Watch all videos",
      videoTitles: [
        "Aleksei Besedin portfolio on YouTube",
        "Aleksei Besedin animation work on YouTube",
      ],
    },
    about: {
      heading: "About",
      experienceLabel: "Work experience",
      experienceValue: "Since 2016",
      skillsLabel: "Skills",
      skillsCaption: "Animation / Rigging / Technical production",
      skills: [
        {
          id: "maya",
          title: "Maya",
          copy: "Animation in any style or format, including third- and first-person work; body, facial and cartoon rigging; skinning of any complexity; MEL scripting; ragdoll and object physics simulation",
        },
        {
          id: "speed",
          title: "Production speed",
          copy: "High production speed enabled by a distinctive and highly optimized workflow",
        },
        {
          id: "unreal",
          title: "Unreal Engine",
          copy: "Complete technical animation setup, including gameplay animation, Sequencer workflows, ragdoll physics and cloth setup, and video rendering",
        },
        {
          id: "leadership",
          title: "Leadership",
          copy: "Planning, organizing and optimizing production workflows, as well as team leadership",
        },
        {
          id: "unity",
          title: "Unity",
          copy: "Full production workflow, including C# programming",
        },
        {
          id: "optimization",
          title: "Optimization",
          copy: "Extensive experience in animation optimization, including methods that significantly accelerate animation workflows across a project",
        },
        {
          id: "mocap",
          title: "Motion Capture",
          copy: "Recording, cleanup and enhancement for both facial and full-body capture",
        },
        {
          id: "tools",
          title: "Other tools",
          copy: "Working knowledge of Maya and Blender modeling, Substance Painter, Marmoset and iClone",
        },
      ],
      socialsLabel: "Social media",
    },
    training: {
      heading: "Consultations and individual",
      headingSubject: "3D animation training",
      lede: [
        "The program is built around your current level, interests and specific goals. It is suitable for animators at different stages and especially useful for mid-level specialists.",
        "I specialize in game animation and rigging. Sessions can cover Maya, Unity, Unreal, portfolio development and ways to make your production workflow significantly faster.",
      ],
      languageNote:
        "Spoken training and consultations are available in Russian. English-language consultations and feedback are provided in writing only. Other site languages are interface translations.",
      benefitsLabel: "What you receive",
      benefitsHeading: "Practice focused on your real work",
      benefits: [
        "Live one-to-one training with no prerecorded video lessons",
        "A personal program built around your level, interests and goals",
        "Session preparation including work reviews, tasks, references, ideas and portfolio rigs",
        "Hands-on work in Maya, rigging, Unity, Unreal and production workflow optimization",
        "Access to my rig and reference library, plus guidance on working with my scripts",
      ],
      benefitsOutro:
        "Every assignment develops a practical skill while helping you create a piece that can strengthen your portfolio.",
      startLabel: "How we begin",
      startHeading: "We start by discussing your goal",
      startCopy: [
        "Before payment, we review your current level, work and goals. I then prepare a personal program and a set of tasks.",
        "The first session covers my approach and an in-depth review of your work. The second combines further feedback with practical work.",
      ],
      formatsLabel: "Session formats",
      formatsHeading: "Three ways to work live",
      formats: [
        {
          title: "I demonstrate",
          copy: "I explain the approach, demonstrate the solution, set an assignment and then review the result.",
        },
        {
          title: "You repeat",
          copy: "You record my process, reproduce it independently and receive a detailed review.",
        },
        {
          title: "You work",
          copy: "You complete a task in real time while I watch your screen and guide you throughout the process.",
        },
      ],
      pricingLabel: "Pricing and terms",
      pricingHeading: "Clear pricing, flexible scope",
      consultation: "Consultation",
      training: "Training",
      oneHour: "for one hour",
      firstHour: "first hour",
      secondHour: "second hour",
      nextHour: "each additional hour",
      payment:
        "Payment is available through PayPal or Payoneer. Ruble prices are calculated using the current Google exchange rate.",
      discountPrefix: "Training packages of five hours or more include a 30% discount on ",
      scriptsLink: "my scripts",
      discountSuffix: ".",
      refundHeading: "Refund policy",
      refundCopy:
        "Refunds are not available after training or consultation has begun, or when more than one week has passed since payment. An exception may be made if the delay was caused on my side.",
      ctaCopy: "Describe your goal - we will agree on the format and sequence of sessions in advance.",
      ctaButton: "Discuss",
    },
    contact: {
      heading: "Have a project?",
      headingEmphasis: "Let's discuss it.",
      intro:
        "For work, consultation, training or questions about scripts - choose the contact method that suits you.",
    },
  },
  de: {
    metadata: {
      title: "Aleksei Besedin - 3D-Animator, Rigger & Technical Animator",
      description:
        "Portfolio von Aleksei Besedin: 3D-Spielanimation, Rigging, Technical Animation, individuelles Training und Maya-Tools.",
      openGraphLocale: "de_DE",
    },
    languageSelector: "Sprache wählen",
    scrollToTop: "Nach oben",
    skipLink: "Zum Inhalt springen",
    brandLabel: "Aleksei Besedin - zum Seitenanfang",
    navigationLabel: "Hauptnavigation",
    nav: {
      main: "Start",
      about: "Über mich",
      training: "Training",
      contact: "Kontakt",
    },
    hero: {
      role: "Lead/Senior 3D-Animator, Rigger, Technical Animator (Unreal, Unity), Mentor, Programmierer",
      projectsLabel: "Projekte:",
      projects:
        "Grand Outlaws, ILL, Regeneration und 3 unangekündigte Projekte, Stygian: Outer Gods, Frozen Flame, Airport City, Guns of Boom, Jurassic Survival Island: ARK 2 Evolve und 1 unangekündigtes Projekt, Devar kids AR",
      portfolio: "Portfolio",
      training: "Beratung / Training",
      scripts: "Skripte",
      allVideos: "Alle Videos ansehen",
      videoTitles: [
        "Portfolio von Aleksei Besedin auf YouTube",
        "Animationsarbeit von Aleksei Besedin auf YouTube",
      ],
    },
    about: {
      heading: "Über mich",
      experienceLabel: "Berufserfahrung",
      experienceValue: "Seit 2016",
      skillsLabel: "Fachkenntnisse",
      skillsCaption: "Animation / Rigging / Technical Production",
      skills: [
        {
          id: "maya",
          title: "Maya",
          copy: "Animationen in jedem Stil und Format, einschließlich Third- und First-Person; Körper-, Gesichts- und Cartoon-Rigs; Skinning jeder Komplexität; MEL-Skripting; Simulation von Ragdoll- und Objektphysik",
        },
        {
          id: "speed",
          title: "Produktionsgeschwindigkeit",
          copy: "Hohe Produktionsgeschwindigkeit durch einen eigenständigen und konsequent optimierten Workflow",
        },
        {
          id: "unreal",
          title: "Unreal Engine",
          copy: "Vollständiges technisches Animations-Setup einschließlich Gameplay-Animation, Sequencer-Workflows, Ragdoll-Physik, Stoffsimulation und Video-Rendering",
        },
        {
          id: "leadership",
          title: "Leitung",
          copy: "Planung, Organisation und Optimierung von Produktionsabläufen sowie Teamleitung",
        },
        {
          id: "unity",
          title: "Unity",
          copy: "Vollständiger Produktions-Workflow einschließlich Programmierung in C#",
        },
        {
          id: "optimization",
          title: "Optimierung",
          copy: "Umfangreiche Erfahrung in der Animationsoptimierung, einschließlich Methoden zur deutlichen Beschleunigung der Animationsabläufe eines Projekts",
        },
        {
          id: "mocap",
          title: "Motion Capture",
          copy: "Aufnahme, Bereinigung und Verbesserung von Gesichts- und Ganzkörperaufnahmen",
        },
        {
          id: "tools",
          title: "Weitere Tools",
          copy: "Grundkenntnisse in der Modellierung mit Maya und Blender sowie in Substance Painter, Marmoset und iClone",
        },
      ],
      socialsLabel: "Soziale Medien",
    },
    training: {
      heading: "Beratung und individuelles",
      headingSubject: "3D-Animationstraining",
      lede: [
        "Das Programm richtet sich nach Ihrem aktuellen Niveau, Ihren Interessen und konkreten Zielen. Es eignet sich für Animatorinnen und Animatoren auf verschiedenen Stufen und ist besonders hilfreich für Mid-Level-Fachkräfte.",
        "Meine Spezialisierung liegt in Spielanimation und Rigging. Die Einheiten können Maya, Unity, Unreal, Portfolioentwicklung und Methoden zur deutlichen Beschleunigung des Produktionsablaufs abdecken.",
      ],
      languageNote:
        "Mündliches Training und Beratungen sind auf Russisch verfügbar. Beratungen und Feedback auf Englisch erfolgen ausschließlich schriftlich. Die weiteren Sprachen betreffen nur die Benutzeroberfläche der Website.",
      benefitsLabel: "Was Sie erhalten",
      benefitsHeading: "Praxis für Ihre tatsächliche Arbeit",
      benefits: [
        "Individuelles Live-Training ohne vorab aufgezeichnete Videolektionen",
        "Ein persönliches Programm auf Grundlage Ihres Niveaus, Ihrer Interessen und Ziele",
        "Vorbereitung jeder Einheit mit Arbeitsanalyse, Aufgaben, Referenzen, Ideen und Rigs für Ihr Portfolio",
        "Praxis in Maya, Rigging, Unity, Unreal und der Optimierung von Produktionsabläufen",
        "Zugang zu meiner Rig- und Referenzsammlung sowie Unterstützung beim Einsatz meiner Skripte",
      ],
      benefitsOutro:
        "Jede Aufgabe entwickelt eine praktische Fähigkeit und hilft zugleich, eine Arbeit zu erstellen, die Ihr Portfolio stärkt.",
      startLabel: "So beginnen wir",
      startHeading: "Zuerst besprechen wir Ihr Ziel",
      startCopy: [
        "Vor der Zahlung besprechen wir Ihr aktuelles Niveau, Ihre Arbeiten und Ziele. Anschließend erstelle ich ein persönliches Programm und passende Aufgaben.",
        "Die erste Einheit behandelt meinen Ansatz und eine ausführliche Analyse Ihrer Arbeiten. Die zweite verbindet weiteres Feedback mit praktischer Arbeit.",
      ],
      formatsLabel: "Formate der Einheiten",
      formatsHeading: "Drei Formen der Live-Arbeit",
      formats: [
        {
          title: "Ich demonstriere",
          copy: "Ich erkläre den Ansatz, zeige die Lösung, gebe eine Aufgabe und bespreche anschließend das Ergebnis.",
        },
        {
          title: "Sie wiederholen",
          copy: "Sie zeichnen meinen Ablauf auf, wiederholen ihn selbstständig und erhalten eine ausführliche Besprechung.",
        },
        {
          title: "Sie arbeiten",
          copy: "Sie bearbeiten eine Aufgabe in Echtzeit, während ich Ihren Bildschirm beobachte und Sie direkt im Prozess unterstütze.",
        },
      ],
      pricingLabel: "Preise und Bedingungen",
      pricingHeading: "Klare Preise, flexibler Umfang",
      consultation: "Beratung",
      training: "Training",
      oneHour: "für eine Stunde",
      firstHour: "erste Stunde",
      secondHour: "zweite Stunde",
      nextHour: "jede weitere Stunde",
      payment:
        "Die Zahlung erfolgt über PayPal oder Payoneer. Preise in Rubel werden anhand des aktuellen Google-Wechselkurses berechnet.",
      discountPrefix: "Bei Trainingspaketen ab fünf Stunden erhalten Sie 30% Rabatt auf ",
      scriptsLink: "meine Skripte",
      discountSuffix: ".",
      refundHeading: "Rückerstattungsbedingungen",
      refundCopy:
        "Eine Rückerstattung ist nach Beginn des Trainings oder der Beratung sowie mehr als eine Woche nach der Zahlung nicht möglich. Eine Ausnahme kann gelten, wenn die Verzögerung auf meiner Seite entstanden ist.",
      ctaCopy: "Beschreiben Sie Ihr Ziel - Format und Reihenfolge der Einheiten stimmen wir im Voraus ab.",
      ctaButton: "Besprechen",
    },
    contact: {
      heading: "Haben Sie ein Projekt?",
      headingEmphasis: "Lassen Sie uns darüber sprechen.",
      intro:
        "Für Projekte, Beratung, Training oder Fragen zu Skripten - wählen Sie den passenden Kontaktweg.",
    },
  },
  ua: {
    metadata: {
      title: "Aleksei Besedin - 3D-аніматор, ригер і технічний аніматор",
      description:
        "Портфоліо Aleksei Besedin: ігрова 3D-анімація, ригінг, технічна анімація, індивідуальне навчання та інструменти для Maya.",
      openGraphLocale: "uk_UA",
    },
    languageSelector: "Вибрати мову",
    scrollToTop: "Нагору",
    skipLink: "Перейти до вмісту",
    brandLabel: "Aleksei Besedin - до початку сторінки",
    navigationLabel: "Головна навігація",
    nav: {
      main: "Головне",
      about: "Про мене",
      training: "Навчання",
      contact: "Контакти",
    },
    hero: {
      role: "Провідний/старший 3D-аніматор, ригер, технічний аніматор (Unreal, Unity), ментор, програміст",
      projectsLabel: "Проєкти:",
      projects:
        "Grand Outlaws, ILL, Regeneration і 3 неанонсовані проєкти, Stygian: Outer Gods, Frozen Flame, Airport City, Guns of Boom, Jurassic Survival Island: ARK 2 Evolve і 1 неанонсований проєкт, Devar kids AR",
      portfolio: "Портфоліо",
      training: "Консультації / навчання",
      scripts: "Скрипти",
      allVideos: "Дивитися всі відео",
      videoTitles: [
        "Портфоліо Aleksei Besedin на YouTube",
        "Анімаційна робота Aleksei Besedin на YouTube",
      ],
    },
    about: {
      heading: "Про мене",
      experienceLabel: "Досвід роботи",
      experienceValue: "З 2016 року",
      skillsLabel: "Навички",
      skillsCaption: "Animation / Rigging / Technical production",
      skills: [
        {
          id: "maya",
          title: "Maya",
          copy: "Створення анімації будь-якого стилю та виду, від третьої й першої особи; риг тіла, обличчя та мультяшний риг; скінінг будь-якої складності; написання скриптів на MEL; симуляція ragdoll-фізики та об’єктів",
        },
        {
          id: "speed",
          title: "Швидкість",
          copy: "Висока швидкість роботи завдяки унікальному та оптимізованому підходу",
        },
        {
          id: "unreal",
          title: "Unreal Engine",
          copy: "Повне технічне налаштування анімації, включно з геймплейною анімацією, роботою в Sequencer, ragdoll-фізикою, тканинами та рендером відео",
        },
        {
          id: "leadership",
          title: "Керівництво",
          copy: "Планування, організація й оптимізація робочого процесу та керівництво командою",
        },
        {
          id: "unity",
          title: "Unity",
          copy: "Повний виробничий процес, включно з написанням коду на C#",
        },
        {
          id: "optimization",
          title: "Оптимізація",
          copy: "Великий досвід і знання з оптимізації анімації на проєкті, зокрема зі значного прискорення анімаційного процесу",
        },
        {
          id: "mocap",
          title: "Motion Capture",
          copy: "Запис, очищення та покращення захоплення обличчя й усього тіла",
        },
        {
          id: "tools",
          title: "Інші інструменти",
          copy: "Базові знання моделювання в Maya та Blender, а також Substance Painter, Marmoset і iClone",
        },
      ],
      socialsLabel: "Соціальні мережі",
    },
    training: {
      heading: "Консультації та індивідуальне навчання",
      headingSubject: "3D-анімації",
      lede: [
        "Програма будується навколо вашого рівня, інтересів і конкретних завдань. Вона підходить аніматорам різного рівня та особливо корисна фахівцям рівня Middle.",
        "Моя спеціалізація - ігрова анімація та ригінг. На заняттях можна розбирати Maya, Unity, Unreal, портфоліо та способи значно прискорити робочий процес.",
      ],
      languageNote:
        "Усне навчання та консультації доступні російською мовою. Консультації й зворотний зв’язок англійською надаються лише в текстовому форматі. Інші мови стосуються тільки інтерфейсу сайту.",
      benefitsLabel: "Що ви отримаєте",
      benefitsHeading: "Практика для вашої реальної роботи",
      benefits: [
        "Живе індивідуальне навчання без заздалегідь записаних відеоуроків",
        "Персональна програма на основі вашого рівня, інтересів і цілей",
        "Підготовка до занять: аналіз робіт, завдання, референси, ідеї та риги для портфоліо",
        "Практика Maya, ригінгу, Unity, Unreal та оптимізації виробничого процесу",
        "Доступ до моєї таблиці ригів і референсів та розбір роботи з моїми скриптами",
      ],
      benefitsOutro:
        "Кожне завдання допомагає розвинути практичну навичку й одночасно підготувати роботу, здатну посилити ваше портфоліо.",
      startLabel: "Як починається робота",
      startHeading: "Спочатку обговорюємо завдання",
      startCopy: [
        "До оплати обговорюємо ваш рівень, поточні роботи та цілі. Після цього я формую персональну програму й завдання.",
        "Перше заняття присвячене моєму підходу та детальному аналізу ваших робіт. Друге поєднує продовження розбору з практикою.",
      ],
      formatsLabel: "Формати заняття",
      formatsHeading: "Три режими живої роботи",
      formats: [
        {
          title: "Я показую",
          copy: "Пояснюю підхід, демонструю рішення, даю завдання, а потім розбираю результат.",
        },
        {
          title: "Ви повторюєте",
          copy: "Ви записуєте мій процес, самостійно повторюєте його й отримуєте детальний розбір.",
        },
        {
          title: "Ви працюєте",
          copy: "Виконуєте завдання в реальному часі, а я спостерігаю за екраном і підказую безпосередньо в процесі.",
        },
      ],
      pricingLabel: "Вартість та умови",
      pricingHeading: "Зрозуміла ціна, гнучкий обсяг",
      consultation: "Консультація",
      training: "Навчання",
      oneHour: "за одну годину",
      firstHour: "перша година",
      secondHour: "друга година",
      nextHour: "кожна наступна",
      payment:
        "Оплата через PayPal або Payoneer. Сума в рублях розраховується за актуальним курсом Google.",
      discountPrefix: "Для навчання від п’яти годин діє знижка 30% на ",
      scriptsLink: "мої скрипти",
      discountSuffix: ".",
      refundHeading: "Умови повернення",
      refundCopy:
        "Повернення коштів неможливе після початку навчання чи консультації, а також якщо з моменту оплати минуло більше одного тижня. Виняток можливий, якщо затримка сталася з мого боку.",
      ctaCopy: "Опишіть завдання - формат і послідовність занять узгодимо заздалегідь.",
      ctaButton: "Обговорити",
    },
    contact: {
      heading: "Є завдання?",
      headingEmphasis: "Давайте обговоримо.",
      intro:
        "Робота, консультація, навчання або запитання про скрипти - виберіть зручний контакт для зв’язку.",
    },
  },
  es: {
    metadata: {
      title: "Aleksei Besedin - Animador 3D, Rigger y Animador Técnico",
      description:
        "Portfolio de Aleksei Besedin: animación 3D para videojuegos, rigging, animación técnica, formación individual y herramientas para Maya.",
      openGraphLocale: "es_ES",
    },
    languageSelector: "Elegir idioma",
    scrollToTop: "Volver arriba",
    skipLink: "Ir al contenido",
    brandLabel: "Aleksei Besedin - volver al inicio",
    navigationLabel: "Navegación principal",
    nav: {
      main: "Inicio",
      about: "Sobre mí",
      training: "Formación",
      contact: "Contacto",
    },
    hero: {
      role: "Animador 3D Lead/Senior, Rigger, Animador Técnico (Unreal, Unity), Mentor, Programador",
      projectsLabel: "Proyectos:",
      projects:
        "Grand Outlaws, ILL, Regeneration y 3 proyectos sin anunciar, Stygian: Outer Gods, Frozen Flame, Airport City, Guns of Boom, Jurassic Survival Island: ARK 2 Evolve y 1 proyecto sin anunciar, Devar kids AR",
      portfolio: "Portfolio",
      training: "Consultoría / formación",
      scripts: "Scripts",
      allVideos: "Ver todos los vídeos",
      videoTitles: [
        "Portfolio de Aleksei Besedin en YouTube",
        "Trabajo de animación de Aleksei Besedin en YouTube",
      ],
    },
    about: {
      heading: "Sobre mí",
      experienceLabel: "Experiencia profesional",
      experienceValue: "Desde 2016",
      skillsLabel: "Habilidades",
      skillsCaption: "Animación / Rigging / Producción técnica",
      skills: [
        {
          id: "maya",
          title: "Maya",
          copy: "Animación de cualquier estilo y formato, incluida animación en tercera y primera persona; rigs corporales, faciales y de estilo cartoon; skinning de cualquier complejidad; scripting en MEL; simulación de físicas ragdoll y de objetos",
        },
        {
          id: "speed",
          title: "Velocidad de producción",
          copy: "Alta velocidad de producción gracias a un flujo de trabajo propio y muy optimizado",
        },
        {
          id: "unreal",
          title: "Unreal Engine",
          copy: "Configuración técnica completa de animación, incluida animación de gameplay, trabajo con Sequencer, físicas ragdoll, telas y renderizado de vídeo",
        },
        {
          id: "leadership",
          title: "Liderazgo",
          copy: "Planificación, organización y optimización de flujos de producción, además de dirección de equipos",
        },
        {
          id: "unity",
          title: "Unity",
          copy: "Flujo de producción completo, incluida programación en C#",
        },
        {
          id: "optimization",
          title: "Optimización",
          copy: "Amplia experiencia en optimización de animación, incluidos métodos para acelerar considerablemente el flujo de animación de un proyecto",
        },
        {
          id: "mocap",
          title: "Motion Capture",
          copy: "Grabación, limpieza y mejora de captura facial y corporal",
        },
        {
          id: "tools",
          title: "Otras herramientas",
          copy: "Conocimientos básicos de modelado en Maya y Blender, además de Substance Painter, Marmoset e iClone",
        },
      ],
      socialsLabel: "Redes sociales",
    },
    training: {
      heading: "Consultoría y formación individual en",
      headingSubject: "animación 3D",
      lede: [
        "El programa se adapta a su nivel, sus intereses y sus objetivos concretos. Es adecuado para animadores de distintos niveles y resulta especialmente útil para profesionales de nivel intermedio.",
        "Mi especialidad es la animación para videojuegos y el rigging. Las sesiones pueden cubrir Maya, Unity, Unreal, desarrollo de portfolio y métodos para acelerar considerablemente el flujo de producción.",
      ],
      languageNote:
        "La formación y las consultas orales están disponibles en ruso. Las consultas y el feedback en inglés se ofrecen únicamente por escrito. Los demás idiomas corresponden solo a la interfaz del sitio.",
      benefitsLabel: "Qué recibirá",
      benefitsHeading: "Práctica aplicada a su trabajo real",
      benefits: [
        "Formación individual en directo, sin lecciones de vídeo pregrabadas",
        "Un programa personal basado en su nivel, sus intereses y sus objetivos",
        "Preparación de cada sesión con análisis de trabajos, tareas, referencias, ideas y rigs para el portfolio",
        "Práctica con Maya, rigging, Unity, Unreal y optimización del flujo de producción",
        "Acceso a mi biblioteca de rigs y referencias, además de orientación para trabajar con mis scripts",
      ],
      benefitsOutro:
        "Cada tarea desarrolla una habilidad práctica y, al mismo tiempo, ayuda a crear una pieza capaz de reforzar su portfolio.",
      startLabel: "Cómo empezamos",
      startHeading: "Primero hablamos de su objetivo",
      startCopy: [
        "Antes del pago revisamos su nivel actual, sus trabajos y sus objetivos. Después preparo un programa personal y las tareas correspondientes.",
        "La primera sesión se centra en mi enfoque y en un análisis detallado de sus trabajos. La segunda combina feedback adicional con trabajo práctico.",
      ],
      formatsLabel: "Formatos de sesión",
      formatsHeading: "Tres formas de trabajar en directo",
      formats: [
        {
          title: "Yo demuestro",
          copy: "Explico el enfoque, demuestro la solución, propongo una tarea y después reviso el resultado.",
        },
        {
          title: "Usted repite",
          copy: "Graba mi proceso, lo reproduce de forma independiente y recibe una revisión detallada.",
        },
        {
          title: "Usted trabaja",
          copy: "Realiza una tarea en tiempo real mientras observo su pantalla y le guío durante el proceso.",
        },
      ],
      pricingLabel: "Precios y condiciones",
      pricingHeading: "Precios claros, alcance flexible",
      consultation: "Consultoría",
      training: "Formación",
      oneHour: "por una hora",
      firstHour: "primera hora",
      secondHour: "segunda hora",
      nextHour: "cada hora adicional",
      payment:
        "El pago se realiza mediante PayPal o Payoneer. Los importes en rublos se calculan con el tipo de cambio actual de Google.",
      discountPrefix: "Los paquetes de formación de cinco horas o más incluyen un 30% de descuento en ",
      scriptsLink: "mis scripts",
      discountSuffix: ".",
      refundHeading: "Política de reembolso",
      refundCopy:
        "No se ofrecen reembolsos después de que haya comenzado la formación o la consultoría, ni cuando haya pasado más de una semana desde el pago. Puede hacerse una excepción si el retraso se produjo por mi parte.",
      ctaCopy: "Describa su objetivo - acordaremos previamente el formato y la secuencia de las sesiones.",
      ctaButton: "Hablar",
    },
    contact: {
      heading: "¿Tiene un proyecto?",
      headingEmphasis: "Hablemos.",
      intro:
        "Para trabajo, consultoría, formación o preguntas sobre scripts - elija el medio de contacto que le resulte más cómodo.",
    },
  },
};

export function createLocalizedMetadata(locale: LocaleCode): Metadata {
  const copy = siteCopy[locale].metadata;
  const path = localePaths[locale];

  return {
    metadataBase: new URL("https://gnomewizard.top"),
    title: "Gnome Wizard",
    description: copy.description,
    icons: {
      icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
      shortcut: ["/favicon.svg"],
    },
    alternates: {
      canonical: path,
      languages: alternateLanguageUrls,
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      type: "website",
      url: path,
      locale: copy.openGraphLocale,
      alternateLocale: Object.values(siteCopy)
        .map((translation) => translation.metadata.openGraphLocale)
        .filter((openGraphLocale) => openGraphLocale !== copy.openGraphLocale),
      images: ["/og.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: ["/og.png"],
    },
  };
}
