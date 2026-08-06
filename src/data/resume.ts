import type { Resume } from './types'

export const resume: Resume = {
  name: 'Ryan Chikhi',
  location: 'Paris, France',
  title: {
    fr: 'Développeur fullstack',
    en: 'Fullstack developer',
  },

  intro: {
    fr: "Je construis des applications web de bout en bout, de la modélisation des données jusqu'à l'interface. React, TypeScript et NestJS au quotidien.",
    en: 'I build web applications end to end, from the data model to the interface. React, TypeScript and NestJS day to day.',
  },

  about: [
    {
      id: 'me',
      highlight: { fr: 'À propos', en: 'About' },
      rest: { fr: 'de moi', en: 'me' },
      body: {
        fr: [
          "Je m'appelle Ryan Chikhi et j'ai 21 ans. J'ai commencé par un BTS systèmes numériques, où j'ai appris à raisonner en termes de contraintes avant de raisonner en termes de code.",
          "J'ai enchaîné avec la formation Full Stack Developer de la 3W Academy, puis une alternance chez Tilkal. C'est là que j'ai appris ce qu'on n'apprend pas en cours : lire du code écrit par quelqu'un d'autre, refactoriser sans casser l'existant, et défendre un choix technique en revue.",
        ],
        en: [
          'My name is Ryan Chikhi and I am 21. I started with a technical diploma in digital systems, where I learned to reason about constraints before reasoning about code.',
          "Then came the Full Stack Developer programme at 3W Academy, followed by an apprenticeship at Tilkal. That is where I learned what a course cannot teach you: reading someone else's code, refactoring without breaking what already worked, and defending a technical decision in review.",
        ],
      },
      picture: {
        caption: {
          fr: 'Quelque part entre deux refactos, un café à la main.',
          en: 'Somewhere between two refactors, coffee in hand.',
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
          "Je développe Undercut, une application de pronostics de Formule 1 née d'un bot Discord utilisé par plus de 30 000 personnes. C'est mon terrain d'essai : monorepo, CI, authentification, ORM.",
          'Côté technique, je jongle entre React, TypeScript, NestJS et Prisma pour construire des applications que les gens ont envie de garder ouvertes. Quand un choix technique me coûte cher, je le découvre en général sur ce projet en premier.',
        ],
        en: [
          'I build Undercut, a Formula 1 predictions app that grew out of a Discord bot used by 30,000+ people. It is my proving ground: monorepo, CI, authentication, ORM.',
          'On the technical side I move between React, TypeScript, NestJS and Prisma to build applications people actually want to keep open. When a technical decision turns out to be expensive, this is usually where I find out first.',
        ],
      },
      picture: {
        caption: {
          fr: "Le tableau de bord d'Undercut, un dimanche de Grand Prix.",
          en: "Undercut's dashboard on a race Sunday.",
        },
      },
    },
  ],

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
      title: { fr: 'Expliquer simplement', en: 'Explaining plainly' },
      body: {
        fr: "Un an à encadrer des enfants en colonie m'a appris à expliquer sans jargon et à garder mon calme. C'est étonnamment utile en revue de code.",
        en: 'A year running youth camps taught me to explain without jargon and stay calm. That turns out to be unexpectedly useful in code review.',
      },
    },
  ],

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
          fr: "C'est ce que j'utilise tous les jours, chez Tilkal comme sur Undercut. Je m'attache surtout à garder une frontière nette entre l'état, les données et l'affichage, parce que c'est là que les projets deviennent pénibles à maintenir.",
          en: 'This is what I use every day, at Tilkal and on Undercut. What I care about most is keeping a clean boundary between state, data and rendering, because that is where projects become painful to maintain.',
        },
        points: {
          fr: [
            "Refactorisation d'une vue produit chez Tilkal pour clarifier les responsabilités",
            "Front-end complet d'Undercut, du design system aux pages de classement",
            'Ce portfolio, en Next.js App Router et SCSS modules',
          ],
          en: [
            'Refactored a product view at Tilkal to clarify responsibilities',
            "Undercut's entire front end, from design system to leaderboard pages",
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
          fr: "J'ai travaillé sur une API NestJS/GraphQL chez Tilkal, et j'ai construit celle d'Undercut de zéro : authentification, système d'amis, calcul de points après chaque Grand Prix.",
          en: 'I worked on a NestJS/GraphQL API at Tilkal, and built the Undercut one from scratch: authentication, friends system, and point scoring after each Grand Prix.',
        },
        points: {
          fr: [
            'API REST complète pour Undercut, avec authentification et rôles',
            'Job de scoring idempotent : rejouer une course ne double jamais les points',
            'Contribution à une API GraphQL en production chez Tilkal',
          ],
          en: [
            'Full REST API for Undercut, with authentication and roles',
            "Idempotent scoring job: replaying a race never doubles anyone's points",
            'Contributed to a production GraphQL API at Tilkal',
          ],
        },
      },
    },
    {
      slug: 'postgresql',
      icon: '/tech/postgresql.svg',
      title: 'PostgreSQL & Prisma',
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
            'Modèle Undercut : utilisateurs, amis, courses, pronostics, classements',
            'Migrations Prisma versionnées et rejouables',
            'PostgreSQL en production chez Tilkal',
          ],
          en: [
            'Undercut model: users, friends, races, predictions, standings',
            'Versioned, replayable Prisma migrations',
            'PostgreSQL in production at Tilkal',
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
          fr: "GitLab CI chez Tilkal, GitHub Actions sur mes projets. J'ai contribué à ajouter des scénarios de tests automatisés à une chaîne existante, ce qui m'a appris autant sur les tests que sur la patience.",
          en: 'GitLab CI at Tilkal, GitHub Actions on my own projects. I helped add automated test scenarios to an existing pipeline, which taught me as much about tests as about patience.',
        },
        points: {
          fr: [
            'Déploiement continu sur Vercel et Render pour Undercut',
            'Ajout de scénarios de tests automatisés dans la CI de Tilkal',
            'Contribution open source sur Leaf-it-to-me',
          ],
          en: [
            'Continuous deployment to Vercel and Render for Undercut',
            "Added automated test scenarios to Tilkal's CI",
            'Open-source contribution to Leaf-it-to-me',
          ],
        },
      },
    },
  ],

  skills: [
    {
      id: 'frontend',
      title: { fr: 'Frontend', en: 'Frontend' },
      items: ['TypeScript', 'React', 'Next.js', 'JavaScript', 'SCSS', 'Tailwind CSS', 'HTML'],
    },
    {
      id: 'backend',
      title: { fr: 'Backend', en: 'Backend' },
      items: ['Node.js', 'NestJS', 'GraphQL', 'Prisma', 'Discord.js'],
    },
    {
      id: 'data',
      title: { fr: 'Bases de données', en: 'Databases' },
      items: ['PostgreSQL', 'MySQL'],
    },
    {
      id: 'tooling',
      title: { fr: 'Outils & CI', en: 'Tooling & CI' },
      items: ['Git', 'GitHub Actions', 'GitLab CI', 'Turborepo', 'Vercel'],
    },
  ],

  languages: [
    { name: { fr: 'Français', en: 'French' }, level: 'C2' },
    { name: { fr: 'Anglais', en: 'English' }, level: 'B2' },
    { name: { fr: 'Arabe', en: 'Arabic' }, level: 'B2' },
    { name: { fr: 'Kabyle', en: 'Kabyle' }, level: 'A2' },
  ],

  experiences: [
    {
      id: 'tilkal',
      company: 'Tilkal',
      role: { fr: 'Développeur fullstack', en: 'Fullstack developer' },
      kind: { fr: 'Alternance · 3W Academy', en: 'Apprenticeship · 3W Academy' },
      dates: { start: '2025-01-06', end: '2026-02-28' },
      summary: {
        fr: 'Alternance sur une plateforme de traçabilité produit : développement produit interne et contributions open source, en React/TypeScript côté client et NestJS/GraphQL côté serveur.',
        en: 'Apprenticeship on a product traceability platform: internal product work and open-source contributions, React/TypeScript on the client and NestJS/GraphQL on the server.',
      },
      tasks: {
        fr: [
          "Contribution à Leaf-it-to-me, un outil open source de visualisation et d'édition de JSON",
          "Refactorisation d'une vue produit pour clarifier la séparation des responsabilités et simplifier le parcours utilisateur",
          'Mise en place de la génération de données factices pour les besoins de test',
          "Ajout de scénarios de tests automatisés dans la chaîne d'intégration continue",
        ],
        en: [
          'Contributed to Leaf-it-to-me, an open-source JSON visualisation and editing tool',
          'Refactored a product view to clarify separation of concerns and simplify the user journey',
          'Set up fake data generation to support the test suite',
          'Added automated test scenarios to the continuous integration pipeline',
        ],
      },
      techs: ['React', 'TypeScript', 'NestJS', 'GraphQL', 'PostgreSQL', 'GitLab CI'],
      logo: '/logos/tilkal.png',
      accent: 'linear-gradient(135deg, #b0198a, #e0559f)',
    },
    {
      id: 'diligence',
      company: 'Diligence',
      role: { fr: 'Développeur web', en: 'Web developer' },
      kind: { fr: 'Stage · BTS 1ʳᵉ année', en: 'Internship · 1st year' },
      dates: { start: '2023-05-09', end: '2023-06-23' },
      summary: {
        fr: "Premier stage en entreprise : gestion de contenu sous WordPress et développement d'un back-office sur mesure avec Express.js.",
        en: 'First industry placement: WordPress content management and building a bespoke back office with Express.js.',
      },
      tasks: {
        fr: [
          'Administration et personnalisation de sites sous WordPress',
          "Développement d'un back-office en Node.js / Express.js",
        ],
        en: [
          'Administered and customised WordPress sites',
          'Built a back office with Node.js and Express.js',
        ],
      },
      techs: ['Node.js', 'Express.js', 'WordPress'],
      accent: 'linear-gradient(135deg, #7b2fa8, #b06ad4)',
    },
    {
      id: 'ccas',
      company: 'C.C.A.S',
      role: { fr: 'Animateur', en: 'Youth camp leader' },
      kind: { fr: 'Saisonnier', en: 'Seasonal' },
      dates: { start: '2021-10-17', end: '2022-10-15' },
      summary: {
        fr: "Encadrement de groupes d'enfants de 4 à 12 ans en colonies de vacances à Strasbourg et Annecy. Une bonne école pour apprendre à expliquer clairement et à garder son calme.",
        en: 'Supervised groups of children aged 4 to 12 at summer camps in Strasbourg and Annecy. A good school for learning to explain things clearly and stay calm.',
      },
      tasks: {
        fr: [
          "Encadrement quotidien de groupes d'enfants de 4 à 12 ans",
          "Conception et animation d'activités sur des séjours de plusieurs semaines",
        ],
        en: [
          'Day-to-day supervision of groups of children aged 4 to 12',
          'Designed and ran activities across multi-week stays',
        ],
      },
      techs: [],
      accent: 'linear-gradient(135deg, #c2557f, #e8a0b8)',
    },
  ],

  projects: [
    {
      slug: 'undercut',
      name: 'Undercut',
      logo: '/logos/undercut.svg',
      kind: { fr: 'Projet personnel', en: 'Side project' },
      accent: 'linear-gradient(140deg, #0f5c36 0%, #1e8a52 55%, #4dc98a 100%)',
      year: '2025',
      role: { fr: 'Conception et développement', en: 'Design and development' },
      tagline: {
        fr: 'Pronostics de Formule 1 entre amis, sur une saison complète.',
        en: 'Formula 1 predictions between friends, across a full season.',
      },
      summary: {
        fr: 'Application fullstack où les fans de F1 déposent leurs pronostics avant chaque Grand Prix, marquent des points automatiquement et se classent sur une saison. Construite from scratch en monorepo, avec une API NestJS, Prisma et un frontend React.',
        en: 'Fullstack application where F1 fans submit predictions before each Grand Prix, score points automatically and climb a season-long leaderboard. Built from scratch as a monorepo, with a NestJS API, Prisma and a React frontend.',
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
          'Scoring idempotent déclenché après chaque Grand Prix',
          "Authentification, système d'amis et classements saisonniers",
          'Déploiement continu via GitHub Actions sur Vercel et Render',
        ],
        en: [
          'Turborepo monorepo: types shared across the client, the API and the Discord bot',
          'Idempotent scoring job triggered after each Grand Prix',
          'Authentication, friends system and season-long leaderboards',
          'Continuous deployment through GitHub Actions to Vercel and Render',
        ],
      },
      techs: [
        'TypeScript',
        'React',
        'SCSS',
        'NestJS',
        'Prisma',
        'MySQL',
        'BetterAuth',
        'Turborepo',
        'GitHub Actions',
        'Vercel',
      ],
      repo: 'https://github.com/Zeikrom251/undercut.click',
      url: 'https://www.undercut.click',
    },
  ],

  // Images only, no copy. Drop a file in `public/gallery/`, set `src`, and write
  // an `alt` that describes what is on screen: it is the only thing a screen
  // reader gets. An entry without `src` renders an empty placeholder tile.
  gallery: [
    {
      id: 'undercut-dashboard',
      wide: true,
      alt: {
        fr: "Le tableau de bord d'Undercut un dimanche de Grand Prix.",
        en: "Undercut's dashboard on a race Sunday.",
      },
    },
    {
      id: 'undercut-standings',
      alt: {
        fr: 'Le classement Undercut en fin de saison.',
        en: 'The Undercut end-of-season standings.',
      },
    },
    {
      id: 'undercut-predictions',
      alt: {
        fr: 'La grille de pronostics avant le départ.',
        en: 'The predictions grid before lights out.',
      },
    },
    {
      id: 'undercut-bot',
      alt: {
        fr: 'Le bot Discord Undercut dans une conversation.',
        en: 'The Undercut Discord bot in a conversation.',
      },
    },
    {
      id: 'portfolio',
      wide: true,
      alt: {
        fr: 'La page d’accueil de ce portfolio.',
        en: 'The home page of this portfolio.',
      },
    },
  ],

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
      caption: {
        fr: 'Paris, un dimanche matin, avant que la ville se réveille.',
        en: 'Paris on a Sunday morning, before the city wakes up.',
      },
    },
  },

  education: [
    {
      id: '3wa',
      school: '3W Academy',
      degree: { fr: 'Formation Full Stack Developer', en: 'Full Stack Developer programme' },
      dates: { start: '2025-01-01', end: '2026-01-31' },
      location: 'Paris 14ᵉ',
      logo: '/logos/3wa-mark.svg',
      logoBg: '#1b1b28',
      accent: 'linear-gradient(135deg, #b0198a, #e0559f)',
    },
    {
      id: 'jules-ferry',
      school: 'Lycée Jules Ferry',
      degree: { fr: 'BTS Systèmes numériques', en: 'Higher Technician Certificate' },
      specialty: {
        fr: 'Option informatique et réseaux',
        en: 'Digital systems, computing and networks',
      },
      dates: { start: '2022-09-01', end: '2024-06-30' },
      location: 'Versailles',
      accent: 'linear-gradient(135deg, #7b2fa8, #b06ad4)',
    },
    {
      id: 'fresnel',
      school: 'Lycée Fresnel',
      degree: { fr: 'Baccalauréat STI2D', en: 'French Baccalaureate, STI2D' },
      specialty: {
        fr: "Sciences et technologies de l'industrie et du développement durable",
        en: 'Science and technology for industry and sustainable development',
      },
      dates: { start: '2021-09-01', end: '2022-07-31' },
      location: 'Paris 15ᵉ',
      accent: 'linear-gradient(135deg, #c2557f, #e8a0b8)',
    },
  ],
}

export function getProject(slug: string) {
  return resume.projects.find((project) => project.slug === slug)
}
