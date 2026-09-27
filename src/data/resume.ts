import type { Resume } from './types'

// This file is the single source of content for the whole site. Almost every
// text field comes in a { fr: '...', en: '...' } pair — just edit both
// languages for that field, nothing else needs to change.
//
// Sections below, in the order they render on the page:
//   name / title / intro / contact / portrait / cv     -> Hero
//   projects                                           -> Projects
//   techSkills                                         -> TechSkills
//   about / place                                      -> About
//   education                                          -> Education
//   experiences                                        -> Experience
//   traits                                             -> SoftSkills
//   skills / languages                                 -> not shown on page, used for SEO (Person JSON-LD)

export const resume: Resume = {
  name: 'Ryan Chikhi',
  location: 'Paris, France',
  title: {
    fr: 'Développeur web full stack',
    en: 'Full stack web developer',
  },

  intro: {
    fr: "Bientôt 2 ans d'expérience à construire des applications web de bout en bout, de la base de données jusqu'à l'interface. JavaScript et TypeScript, avec React côté client, Node.js et NestJS côté serveur.",
    en: 'Almost 2 years of building web applications end to end, from the database to the interface. JavaScript and TypeScript, with React on the client and Node.js and NestJS on the server.',
  },

  contact: [
    { type: 'email', label: 'ryanechikhi2004@gmail.com', href: 'mailto:ryanechikhi2004@gmail.com' },
    { type: 'github', label: 'Zeikrom251', href: 'https://github.com/Zeikrom251' },
    { type: 'location', label: 'Paris, France' },
  ],

  portrait: {
    src: '/me.png',
    cutout: true,
  },

  cv: {
    fr: '/cv/fr/resume_CHIKHI.pdf',
    en: '/cv/en/resume_CHIKHI.pdf',
  },

  // ---- PROJECTS -----------------------------------------------------------
  // One entry per project card. Add a new object to this array for a new
  // project; each one becomes its own page at /projects/<slug>.
  projects: [
    {
      slug: 'undercut',
      name: 'Undercut',
      logo: '/logos/undercut.svg',
      cover: '/undercut_twittercard_normal.webp',
      kind: { fr: 'Projet personnel', en: 'Side project' },
      accent: 'linear-gradient(140deg, #0f5c36 0%, #1e8a52 55%, #4dc98a 100%)',
      year: '2026',
      role: { fr: 'Conception et développement', en: 'Design and development' },
      tagline: {
        fr: 'Pronostics de sport automobile entre amis, sur une saison complète.',
        en: 'Motorsport predictions between friends, across a full season.',
      },
      summary: {
        fr: 'Application web full stack où les fans de sport automobile déposent leurs pronostics avant chaque course, marquent des points automatiquement et se mesurent à leurs amis sur un classement saisonnier. Construite from scratch en monorepo Turborepo, avec une API REST NestJS, Prisma, MySQL et un frontend React.',
        en: 'Full stack web application where motorsport fans submit predictions before every race, score points automatically and compete against friends on a seasonal leaderboard. Built from scratch as a Turborepo monorepo, with a NestJS REST API, Prisma, MySQL and a React frontend.',
      },
      body: {
        fr: [
          "Undercut est né d'un bot Discord que j'avais écrit pour une communauté de plus de 30 000 personnes. Le bot marchait, mais il était limité par Discord : pas de vraie page de classement, pas d'historique lisible, et chaque nouvelle règle de scoring devenait une commande de plus. Passer au web était la seule façon de faire grandir le produit.",
          "J'ai structuré le projet en monorepo Turborepo pour partager les types entre le client, l'API et le bot. C'est le choix qui m'a fait gagner le plus de temps : quand le schéma d'un pronostic change, le typage casse aux trois endroits concernés au lieu de casser en production.",
          "Le scoring est la partie qui demande le plus de soin. Les résultats de course arrivent depuis l'API du calendrier F1, puis un job calcule les points de chaque pronostic selon des règles pondérées : podium exact, vainqueur, meilleur tour. Le calcul est idempotent : rejouer une course ne double jamais les points.",
          "Côté produit, il y a l'authentification, un système d'amis, des classements saisonniers et un back-office d'administration pour corriger un résultat quand la FIA modifie un classement après coup, ce qui arrive plus souvent qu'on ne le croit.",
        ],
        en: [
          'Undercut grew out of a Discord bot I wrote for a community of 30,000+ people. The bot worked, but Discord was the ceiling: no real leaderboard page, no readable history, and every new scoring rule became yet another command. Moving to the web was the only way to grow the product.',
          'I structured it as a Turborepo monorepo so types are shared between the client, the API and the bot. That is the decision that saved me the most time: when the shape of a prediction changes, typing breaks in all three places instead of breaking in production.',
          "Scoring is the part that needs the most care. Race results arrive from the F1 calendar API, then a job scores each prediction against weighted rules: exact podium, race winner, fastest lap. The calculation is idempotent, so replaying a race never doubles anyone's points.",
          'On the product side there is authentication, a friends system, seasonal leaderboards, and an admin back office to correct a result when the FIA revises a classification after the fact, which happens more often than you would think.',
        ],
      },
      highlights: {
        fr: [
          "Monorepo Turborepo : types partagés entre le client, l'API et le bot Discord",
          'API REST NestJS avec Prisma comme ORM, sur une base MySQL',
          "Authentification BetterAuth, système d'amis et classements saisonniers",
          "Intégration de l'API du calendrier officiel de Formule 1",
          'Déploiement continu via GitHub Actions, sur Vercel (frontend) et Render (backend)',
        ],
        en: [
          'Turborepo monorepo: types shared across the client, the API and the Discord bot',
          'NestJS REST API with Prisma as the ORM, on a MySQL database',
          'BetterAuth authentication, friends system and seasonal leaderboards',
          'Integration of the official Formula 1 calendar API',
          'Continuous deployment through GitHub Actions, to Vercel (frontend) and Render (backend)',
        ],
      },
      techs: [
        'TypeScript',
        'React',
        'SCSS',
        'Tailwind CSS',
        'NestJS',
        'Prisma',
        'MySQL',
        'BetterAuth',
        'Turborepo',
        'GitHub Actions',
        'Vercel',
        'Render',
      ],
      repo: 'https://github.com/Zeikrom251/undercut.click',
      url: 'https://www.undercut.click',
    },
    {
      slug: 'emeraldcast',
      name: 'EmeraldCast',
      logo: '/logos/emeraldcast.svg',
      cover: '/projects/emeraldcast.webp',
      kind: { fr: 'Projet personnel', en: 'Side project' },
      accent: 'linear-gradient(140deg, #03140d 0%, #0b5c3d 55%, #2ee59d 100%)',
      year: '2026',
      role: { fr: 'Conception et développement', en: 'Design and development' },
      tagline: {
        fr: 'Plusieurs streams Twitch sur un seul écran, avec un chat fusionné.',
        en: 'Several Twitch streams on one screen, with one merged chat.',
      },
      summary: {
        fr: 'Visionneuse multi-streams pour Twitch : plusieurs lives côte à côte, réorganisés par glisser-déposer, et tous les chats réunis dans un seul fil. Un site statique en React et TypeScript, sans compte et sans backend.',
        en: 'A multi-stream viewer for Twitch: several live streams side by side, rearranged with drag and drop, and every chat merged into one feed. A static React and TypeScript site, with no account and no backend.',
      },
      body: {
        fr: [
          "EmeraldCast permet de regarder autant de streams Twitch que l'on veut sur un seul écran. On passe d'une grille à un mode focus (un stream principal et une barre latérale redimensionnable), on réorganise les tuiles par glisser-déposer et on choisit quel stream garde le son pendant que les autres restent muets.",
          "Tout se passe dans le navigateur, sans serveur. Les lecteurs utilisent les embeds officiels de Twitch, la recherche de chaînes, les catégories et le statut en direct (spectateurs, durée, fin de live) passent par l'API GraphQL publique de Twitch, et le chat unifié se connecte en lecture seule à la passerelle IRC de Twitch via WebSocket, avec les emotes et une couleur par chaîne.",
          "Le projet a d'abord eu un serveur et des paquets partagés, que j'ai retirés une fois que tout pouvait être fait côté client : moins de pièces à héberger, et une application qui se déploie comme une simple page statique.",
          'Côté usage, il y a une palette de commandes (⌘K), des raccourcis clavier, des murs de streams sauvegardés, des liens de partage qui encodent toute la configuration, et une synchronisation entre onglets. Tout ce qui est enregistré reste dans le localStorage.',
        ],
        en: [
          'EmeraldCast lets you watch as many Twitch streams as you want on one screen. You switch between a grid and a focus mode (one main stream and a resizable sidebar), rearrange tiles with drag and drop, and pick which stream keeps its audio while the rest stay muted.',
          "Everything runs in the browser, with no server. Players use Twitch's official embeds, channel search, categories and live status (viewers, uptime, ended broadcasts) go through Twitch's public GraphQL API, and the unified chat connects read-only to Twitch's IRC gateway over WebSocket, with emotes and one colour per channel.",
          'The project started with a server and shared packages, which I removed once everything could run on the client: fewer pieces to host, and an app that deploys as a plain static page.',
          'On the usability side there is a command palette (⌘K), keyboard shortcuts, saved stream walls, share links that encode the whole setup, and sync across tabs. Everything saved stays in localStorage.',
        ],
      },
      highlights: {
        fr: [
          'Grille ou mode focus, réorganisation par glisser-déposer (dnd-kit)',
          'Chat unifié en direct via la passerelle IRC WebSocket de Twitch',
          "Recherche, catégories et statut en direct via l'API GraphQL de Twitch",
          'Palette de commandes ⌘K, raccourcis clavier, murs sauvegardés et liens de partage',
          'Application 100 % statique : pas de compte, pas de backend',
        ],
        en: [
          'Grid or focus layout, drag-and-drop reordering (dnd-kit)',
          "Live unified chat through Twitch's IRC WebSocket gateway",
          "Search, categories and live status through Twitch's GraphQL API",
          '⌘K command palette, keyboard shortcuts, saved walls and share links',
          'Fully static app: no account, no backend',
        ],
      },
      techs: ['React', 'TypeScript', 'Vite', 'SCSS', 'dnd-kit', 'Vitest', 'Vercel'],
      repo: 'https://github.com/Zeikrom251/EmeraldCast',
      url: 'https://emeraldcast.vercel.app',
    },
  ],

  // ---- TECH SKILLS ---------------------------------------------------------
  // The cards under "technical skills". Each one expands to show `detail`.
  techSkills: [
    {
      slug: 'react',
      icon: '/tech/react.svg',
      title: 'React & Next.js',
      type: { fr: 'Développement front-end', en: 'Front-end development' },
      detail: {
        headline: {
          fr: 'Des interfaces qui restent lisibles quand le projet grossit',
          en: 'Interfaces that stay readable as the project grows',
        },
        body: {
          fr: "C'est ce que j'utilise tous les jours, sur Undercut comme pour Les Simracers X. Je m'attache surtout à garder une frontière nette entre l'état, les données et l'affichage, parce que c'est là que les projets deviennent pénibles à maintenir.",
          en: 'This is what I use every day, on Undercut and for Les Simracers X. What I care about most is keeping a clean boundary between state, data and rendering, because that is where projects become painful to maintain.',
        },
        points: {
          fr: [
            "Front-end complet d'Undercut en React, SCSS et Tailwind CSS",
            "Site officiel de Les Simracers X, pour la visibilité et l'image de l'association",
            'Ce portfolio, en Next.js App Router et SCSS modules',
          ],
          en: [
            "Undercut's entire front end, in React, SCSS and Tailwind CSS",
            "Les Simracers X's official website, built for the association's visibility and image",
            'This portfolio, in Next.js App Router and SCSS modules',
          ],
        },
      },
    },
    {
      slug: 'typescript',
      icon: '/tech/typescript.svg',
      title: 'TypeScript',
      type: { fr: 'Typage et fiabilité', en: 'Typing and reliability' },
      detail: {
        headline: {
          fr: "Casser à la compilation plutôt qu'en production",
          en: 'Break at compile time rather than in production',
        },
        body: {
          fr: "Sur Undercut, les types sont partagés entre le client, l'API et le bot Discord via un monorepo Turborepo. Quand le schéma d'un pronostic change, ça casse aux trois endroits concernés, tout de suite.",
          en: 'On Undercut, types are shared between the client, the API and the Discord bot through a Turborepo monorepo. When the shape of a prediction changes, it breaks in all three places, immediately.',
        },
        points: {
          fr: [
            'Types partagés en monorepo entre trois applications',
            'Typage strict activé sur tous mes projets personnels',
            'Dictionnaires de traduction vérifiés par le compilateur sur ce site',
          ],
          en: [
            'Shared types across three applications in a monorepo',
            'Strict mode enabled on all my personal projects',
            'Translation dictionaries checked by the compiler on this site',
          ],
        },
      },
    },
    {
      slug: 'nestjs',
      icon: '/tech/nestjs.svg',
      title: 'NestJS & Node.js',
      type: { fr: 'Développement back-end', en: 'Back-end development' },
      detail: {
        headline: {
          fr: 'Des API dont on peut deviner la forme sans lire le code',
          en: 'APIs whose shape you can guess without reading the code',
        },
        body: {
          fr: "J'ai construit l'API REST d'Undercut de zéro avec NestJS et Prisma, et des bots Discord en Node.js qui automatisent la gestion des championnats de Les Simracers X.",
          en: 'I built the Undercut REST API from scratch with NestJS and Prisma, and Node.js Discord bots that automate championship management for Les Simracers X.',
        },
        points: {
          fr: [
            'API REST complète pour Undercut, avec authentification BetterAuth',
            'Bots Discord sur mesure (Discord.js) pour gérer des championnats esport de bout en bout',
            "Back-office d'administration en Express.js chez Diligence",
          ],
          en: [
            'Full REST API for Undercut, with BetterAuth authentication',
            'Custom Discord bots (Discord.js) that run esports championships end to end',
            'Admin back office in Express.js at Diligence',
          ],
        },
      },
    },
    {
      slug: 'postgresql',
      icon: '/tech/postgresql.svg',
      title: 'SQL & Prisma',
      type: { fr: 'Modélisation de données', en: 'Data modelling' },
      detail: {
        headline: {
          fr: 'Le schéma en premier, le reste suit',
          en: 'Schema first, everything else follows',
        },
        body: {
          fr: 'Je commence presque toujours par le modèle de données. Prisma me sert à garder le schéma et les types alignés, et les migrations lisibles quand le modèle change en cours de saison.',
          en: 'I almost always start from the data model. Prisma keeps the schema and the types aligned, and the migrations readable when the model changes mid-season.',
        },
        points: {
          fr: [
            'Modèle Undercut sous MySQL : utilisateurs, amis, courses, pronostics, classements',
            'Migrations Prisma versionnées et rejouables',
            'Maintenance de bases PostgreSQL complexes chez Tilkal',
          ],
          en: [
            'Undercut model on MySQL: users, friends, races, predictions, standings',
            'Versioned, replayable Prisma migrations',
            'Maintained complex PostgreSQL databases at Tilkal',
          ],
        },
      },
    },
    {
      slug: 'git',
      icon: '/tech/git.svg',
      title: 'Git & CI/CD',
      type: { fr: 'Industrialisation', en: 'Tooling and delivery' },
      detail: {
        headline: {
          fr: 'Livrer sans retenir sa respiration',
          en: 'Ship without holding your breath',
        },
        body: {
          fr: "GitLab CI chez Tilkal, GitHub Actions sur mes projets. Chez Tilkal, j'ai mis en place des pipelines CI/CD et écrit des plans de tests d'intégration, ce qui m'a appris autant sur les tests que sur la patience.",
          en: 'GitLab CI at Tilkal, GitHub Actions on my own projects. At Tilkal I set up CI/CD pipelines and wrote integration test plans, which taught me as much about tests as about patience.',
        },
        points: {
          fr: [
            'Déploiement continu sur Vercel et Render pour Undercut',
            "Pipelines CI/CD GitLab CI et plans de tests d'intégration chez Tilkal",
            'Jeux de données factices structurés pour accélérer et fiabiliser les recettes',
          ],
          en: [
            'Continuous deployment to Vercel and Render for Undercut',
            'GitLab CI pipelines and integration test plans at Tilkal',
            'Structured mock datasets to speed up and harden acceptance testing',
          ],
        },
      },
    },
  ],

  // ---- ABOUT -----------------------------------------------------------
  // The two "About" blocks (me / my work). `flip` mirrors the layout so the
  // picture alternates sides.
  about: [
    {
      id: 'me',
      highlight: { fr: 'À propos', en: 'About' },
      rest: { fr: 'de moi', en: 'me' },
      body: {
        fr: [
          "Je m'appelle Ryan Chikhi et j'ai 22 ans. J'ai commencé par un BTS systèmes numériques, où j'ai appris à raisonner en termes de contraintes avant de raisonner en termes de code.",
          "J'ai enchaîné avec la formation Full Stack Developer de la 3W Academy, puis une alternance chez Tilkal. C'est là que j'ai appris ce qu'on n'apprend pas en cours : lire du code écrit par quelqu'un d'autre, refactoriser sans casser l'existant, et défendre un choix technique en revue.",
          'En dehors du code, je fais du simracing depuis trois ans (Le Mans Ultimate, Assetto Corsa Competizione) et de la photo depuis sept ans : rue, portraits, paysages.',
        ],
        en: [
          'My name is Ryan Chikhi and I am 22. I started with a technical diploma in digital systems, where I learned to reason about constraints before reasoning about code.',
          "Then came the Full Stack Developer programme at 3W Academy, followed by an apprenticeship at Tilkal. That is where I learned what a course cannot teach you: reading someone else's code, refactoring without breaking what already worked, and defending a technical decision in review.",
          'Away from code, I have been sim racing for three years (Le Mans Ultimate, Assetto Corsa Competizione) and taking photos for seven: street, portraits, landscapes.',
        ],
      },
      picture: {
        src: '/pic1.jpg',
        caption: {
          fr: 'Quelque part entre deux refactos, en train de manœuvrer un bateau.',
          en: 'Somewhere between two refactors, handling a boat.',
        },
      },
    },
    {
      id: 'work',
      highlight: { fr: 'Mes projets', en: 'My projects' },
      rest: { fr: 'et mon travail', en: 'and my work' },
      flip: true,
      body: {
        fr: [
          "Je développe Undercut, une application de pronostics de sport automobile inspirée d'un bot Discord utilisé par plus de 30 000 personnes. C'est mon terrain d'essai : monorepo, CI/CD, authentification, ORM.",
          "Je suis aussi lead developer de Les Simracers X, une association d'esport : bots Discord qui automatisent les championnats, site officiel, et encadrement de l'équipe de développement.",
          "Côté technique, je jongle entre React, TypeScript, NestJS et Prisma, et je m'intéresse de près aux outils d'IA appliqués au développement (GitHub Copilot, Claude Code, Mistral Vibe).",
        ],
        en: [
          'I build Undercut, a motorsport predictions app inspired by a Discord bot used by 30,000+ people. It is my proving ground: monorepo, CI/CD, authentication, ORM.',
          'I am also lead developer at Les Simracers X, an esports association: Discord bots that automate its championships, the official website, and leading the development team.',
          'On the technical side I move between React, TypeScript, NestJS and Prisma, with a strong interest in AI tools applied to development (GitHub Copilot, Claude Code, Mistral Vibe).',
        ],
      },
      picture: {
        src: '/pic2.png',
        // The source is 1872x969. Cropping a dashboard to 4/3 cut off the
        // sidebar and forced the browser to upscale it.
        aspect: '1872 / 969',
        caption: {
          fr: "Le tableau de bord d'Undercut, un dimanche de Grand Prix.",
          en: "Undercut's dashboard on a race Sunday.",
        },
      },
    },
  ],

  // ---- PLACE (location blurb) ------------------------------------------
  place: {
    highlight: { fr: 'Bonjour de Paris', en: 'Hello from Paris' },
    body: {
      fr: [
        "Je vis et je travaille à Paris. J'ai étudié à Versailles et dans le 15e, et je suis passé par la 3W Academy dans le 14e, donc je connais assez bien la ligne 4.",
        'Je suis ouvert aux postes sur place comme à distance, et je réponds vite.',
      ],
      en: [
        'I live and work in Paris. I studied in Versailles and in the 15th, and went through 3W Academy in the 14th, so I know line 4 fairly well.',
        'I am open to on-site and remote roles, and I answer quickly.',
      ],
    },
    picture: {
      src: '/pic3.jpg',
      // Portrait source: the default 4/3 landscape frame cropped the top off
      // the tower.
      aspect: '3756 / 5008',
      caption: {
        fr: 'Paris, un dimanche matin, avant que la ville se réveille.',
        en: 'Paris on a Sunday morning, before the city wakes up.',
      },
    },
  },

  // ---- EDUCATION ---------------------------------------------------------
  // Listed newest first.
  education: [
    {
      id: '3wa',
      school: '3W Academy',
      degree: {
        fr: 'Formation Développeur Full Stack (FSD)',
        en: 'Full Stack Developer Program (FSD)',
      },
      dates: { start: '2025-01-01', end: '2026-01-31' },
      location: 'Paris 14ᵉ',
      logo: '/logos/3wa-mark.svg',
      logoBg: '#1b1b28',
      accent: 'linear-gradient(135deg, #0e2418, #2d5a41)',
    },
    {
      id: 'jules-ferry',
      school: 'Lycée Jules Ferry',
      degree: { fr: 'BTS SNIR', en: 'BTS (Higher National Diploma), SNIR' },
      specialty: {
        fr: 'Systèmes numériques, option informatique et réseaux',
        en: 'Digital Systems, IT and Networks',
      },
      dates: { start: '2022-09-01', end: '2024-06-30' },
      location: 'Versailles',
      accent: 'linear-gradient(135deg, #b7791f, #e8b54a)',
    },
    {
      id: 'fresnel',
      school: 'Lycée Fresnel',
      degree: { fr: 'Baccalauréat technologique STI2D', en: 'STI2D Technology Baccalaureate' },
      specialty: {
        fr: "Sciences et technologies de l'industrie et du développement durable",
        en: 'Industrial and Sustainable Development Sciences and Technologies',
      },
      dates: { start: '2021-09-01', end: '2022-07-31' },
      location: 'Paris 15ᵉ',
      accent: 'linear-gradient(135deg, #a8432a, #d9683f)',
    },
  ],

  // ---- EXPERIENCE ---------------------------------------------------------
  // Listed newest first. `dates.end: null` would mean "ongoing" (not used
  // currently, but supported by the type).
  experiences: [
    {
      id: 'simracers-x',
      company: 'Les Simracers X',
      role: { fr: 'Lead developer full stack', en: 'Lead full stack developer' },
      kind: { fr: "Association d'esport", en: 'Esports association' },
      dates: { start: '2024-12-01', end: '2026-09-30' },
      summary: {
        fr: "Lead developer d'une association d'esport de simracing : outils d'automatisation des championnats, site officiel et encadrement de l'équipe de développement.",
        en: 'Lead developer for a sim racing esports association: championship automation tools, the official website, and leading the development team.',
      },
      tasks: {
        fr: [
          "Conception et développement de bots Discord sur mesure pour l'automatisation et la gestion intégrale des championnats esport",
          'Création du site web officiel de la structure pour optimiser sa visibilité, son image de marque et son exposition médiatique',
          "Encadrement technique et management opérationnel de l'équipe de développement et des membres du projet",
        ],
        en: [
          'Designed and developed custom Discord bots for full automation and management of esports championships',
          "Built the organization's official website to boost its visibility, brand image and media exposure",
          'Provided technical leadership and operational management of the development team and project members',
        ],
      },
      techs: [
        'React',
        'TypeScript',
        'NestJS',
        'MySQL',
        'Docker',
        'Gitlab',
        'GitLab CI',
        'Github',
        'Github Actions',
      ],
      logo: '/logos/lsx.png',
      accent: 'linear-gradient(135deg, #0e2418, #2d5a41)',
    },
    {
      id: 'tilkal',
      company: 'Tilkal',
      role: { fr: 'Développeur full stack', en: 'Full stack developer' },
      kind: { fr: 'Alternance · 3W Academy', en: 'Apprenticeship · 3W Academy' },
      dates: { start: '2025-01-06', end: '2026-02-28' },
      summary: {
        fr: 'Alternance sur une plateforme SaaS dédiée à la traçabilité produit : développement et optimisation continue, bases de données PostgreSQL, tests et CI/CD.',
        en: 'Apprenticeship on a SaaS platform dedicated to product traceability: continuous development and optimisation, PostgreSQL databases, testing and CI/CD.',
      },
      tasks: {
        fr: [
          "Développement et optimisation continue d'une plateforme SaaS dédiée à la traçabilité produit",
          'Maintenance de bases de données relationnelles complexes sous PostgreSQL',
          'Conception de jeux de données factices structurés pour accélérer et fiabiliser les campagnes de recette',
          "Élaboration et exécution de plans de tests d'intégration pour garantir la robustesse et la qualité des livrables",
          'Gestion du contrôle de version avec Git/GitLab et mise en place de pipelines CI/CD via GitLab CI',
        ],
        en: [
          'Developed and continuously optimised a SaaS platform dedicated to product traceability',
          'Maintained complex relational databases on PostgreSQL',
          'Designed structured mock datasets to speed up acceptance testing and make it more reliable',
          'Wrote and ran integration test plans to ensure the robustness and quality of deliverables',
          'Managed version control with Git/GitLab and set up CI/CD pipelines with GitLab CI',
        ],
      },
      techs: ['React', 'TypeScript', 'NestJS', 'GraphQL', 'PostgreSQL', 'Docker', 'GitLab CI'],
      logo: '/logos/tilkal.png',
      accent: 'linear-gradient(135deg, #b7791f, #e8b54a)',
    },
    {
      id: 'diligence',
      company: 'Diligence',
      role: { fr: 'Développeur web', en: 'Web developer' },
      kind: { fr: 'Stage · 1ʳᵉ année de BTS SNIR', en: 'Internship · 1st-year BTS SNIR' },
      dates: { start: '2023-05-09', end: '2023-06-23' },
      summary: {
        fr: "Premier stage en entreprise : gestion de contenu sous WordPress et développement d'un back-office sur mesure avec Express.js.",
        en: 'First industry placement: WordPress content management and building a bespoke back office with Express.js.',
      },
      tasks: {
        fr: [
          'Développement et personnalisation de sites web avec le CMS WordPress',
          "Conception d'un back-office d'administration avec Express.js et Node.js",
        ],
        en: [
          'Developed and customised websites with the WordPress CMS',
          'Built an admin back office with Express.js and Node.js',
        ],
      },
      techs: ['Node.js', 'Express.js', 'WordPress'],
      accent: 'linear-gradient(135deg, #a8432a, #d9683f)',
    },
    {
      id: 'ccas',
      company: 'C.C.A.S',
      role: { fr: 'Animateur', en: 'Camp counselor' },
      kind: { fr: 'Saisonnier', en: 'Seasonal' },
      dates: { start: '2021-10-17', end: '2022-10-15' },
      summary: {
        fr: "Encadrement de groupes d'enfants de 4 à 12 ans en colonies de vacances à Strasbourg et Annecy. Une bonne école pour apprendre à expliquer clairement et à garder son calme.",
        en: 'Supervised groups of children aged 4 to 12 at summer camps in Strasbourg and Annecy. A good school for learning to explain things clearly and stay calm.',
      },
      tasks: {
        fr: [
          "Encadrement et prise en charge globale de groupes d'enfants de 4 à 12 ans lors de séjours de vacances",
          "Conception et animation de projets pédagogiques favorisant le travail d'équipe, l'autonomie et la responsabilité",
        ],
        en: [
          'Supervised and took full responsibility for groups of children aged 4 to 12 during holiday camps',
          'Designed and led educational activities that fostered teamwork, autonomy and responsibility',
        ],
      },
      techs: [],
      accent: 'linear-gradient(135deg, #0e2418, #2d5a41)',
    },
  ],

  // ---- SOFT SKILLS (traits) -----------------------------------------------
  traits: [
    {
      id: 'product',
      title: { fr: 'Vision produit', en: 'Product thinking' },
      body: {
        fr: "Je pense un projet comme un produit, pas comme un ticket. Avant d'écrire du code je cherche à comprendre qui va s'en servir et ce qui doit être simple pour cette personne.",
        en: 'I think about a project as a product, not a ticket. Before writing code I try to understand who will use it and what needs to be effortless for them.',
      },
    },
    {
      id: 'ownership',
      title: { fr: 'Bout en bout', en: 'End to end' },
      body: {
        fr: "Base de données, API, interface, déploiement : je suis à l'aise sur toute la chaîne. Ça me permet de choisir où résoudre un problème plutôt que de le pousser au voisin.",
        en: 'Database, API, interface, deployment: I am comfortable across the whole chain. That lets me pick where to solve a problem instead of pushing it to whoever is next.',
      },
    },
    {
      id: 'opensource',
      title: { fr: 'Open source', en: 'Open source' },
      body: {
        fr: "J'ai contribué à Leaf-it-to-me pendant mon alternance. Lire et corriger le code des autres reste la façon la plus rapide que je connaisse de progresser.",
        en: "I contributed to Leaf-it-to-me during my apprenticeship. Reading and fixing other people's code is still the fastest way I know to get better.",
      },
    },
    {
      id: 'communication',
      title: { fr: 'Expliquer et encadrer', en: 'Explaining and leading' },
      body: {
        fr: "Un an à encadrer des enfants en colonie m'a appris à expliquer sans jargon et à garder mon calme. Ça me sert aujourd'hui pour encadrer l'équipe de développement de Les Simracers X, et en revue de code.",
        en: 'A year running youth camps taught me to explain without jargon and stay calm. I use that today leading the development team at Les Simracers X, and in code review.',
      },
    },
  ],

  // Not rendered as a visual section: consumed by StructuredData for Person JSON-LD.
  skills: [
    {
      id: 'frontend',
      title: { fr: 'Frontend', en: 'Frontend' },
      items: [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'HTML5',
        'CSS3',
        'SCSS',
        'Tailwind CSS',
      ],
    },
    {
      id: 'backend',
      title: { fr: 'Backend', en: 'Backend' },
      items: ['Node.js', 'NestJS', 'Express.js', 'REST API', 'GraphQL', 'Discord.js', 'BetterAuth'],
    },
    {
      id: 'data',
      title: { fr: 'Bases de données', en: 'Databases' },
      items: ['MySQL', 'PostgreSQL', 'SQL', 'Prisma'],
    },
    {
      id: 'tooling',
      title: { fr: 'Outils & CI/CD', en: 'Tooling & CI/CD' },
      items: [
        'Git',
        'GitHub',
        'GitHub Actions',
        'GitLab',
        'GitLab CI',
        'Turborepo',
        'Vercel',
        'Render',
        'Railway',
      ],
    },
    {
      id: 'ai',
      title: { fr: "Outils d'IA", en: 'AI tools' },
      items: ['GitHub Copilot', 'Claude Code', 'Mistral Vibe'],
    },
  ],

  languages: [
    { name: { fr: 'Français', en: 'French' }, level: 'Native' },
    { name: { fr: 'Anglais', en: 'English' }, level: 'B2' },
    { name: { fr: 'Arabe', en: 'Arabic' }, level: 'B2' },
    { name: { fr: 'Kabyle', en: 'Kabyle' }, level: 'A2' },
  ],
}

export function getProject(slug: string) {
  return resume.projects.find((project) => project.slug === slug)
}
