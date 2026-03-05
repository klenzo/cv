import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Messaoud HARROUZ',
    photoBackEmoji: '🚀',
    title: {
      fr: 'Tech Lead / Lead - Développeur Web',
    },
    subtitle: {
      fr: '+7 ans d\'expérience — PHP / Laravel / WordPress – Automation & AI',
    },
    location: 'Lyon (Saint-Priest), France',
  },

  seo: {
    title: 'Messaoud Harrouz — Developer Tech Lead - PHP / Laravel / WordPress',
    description: 'Tech Lead PHP spécialisé Laravel, WordPress et TMA.',
  },

  languages: {
    default: 'fr',
    available: ['fr'],
    labels: { fr: 'FR' },
  },

  contact: [
    { type: 'linkedin', label: 'H. Messaoud', href: 'https://www.linkedin.com/in/messaoud-harrouz/' },
    { type: 'github', label: 'CV Sur GitHub', href: 'https://klenzo.github.io/cv/' },
    { type: 'location', label: 'Lyon (Saint-Priest), France' },
  ],

  skills: [
    {
      title: { fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { fr: 'Français' }, level: { fr: 'Natif' } },
        { name: { fr: 'Anglais' }, level: { fr: 'Technique' }, details: 'Anglais technique non conversationnel' },
      ],
    },
    {
      title: { fr: 'Backend' },
      type: 'badges',
      items: [
        { name: 'PHP' },
        { name: 'Laravel' },
        { name: 'WordPress' },
        { name: 'WooCommerce' },
        { name: 'Symfony (junior)' },
      ],
    },
    {
      title: { fr: 'Frontend' },
      type: 'badges',
      items: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'SCSS / Less' },
        { name: 'Vue.js' },
        { name: 'JavaScript' },
        { name: 'React (IA)' },
        { name: 'Livewire' },
      ],
    },
    {
      title: { fr: 'Bases de données' },
      type: 'badges',
      items: [
        { name: 'MySQL' },
	      { name: 'PostgreSQL' },
        { name: 'SQL Server' },
        { name: 'Informix' },
        { name: 'SQLite' },
        { name: 'MariaDB' },
      ],
    },
    {
      title: { fr: 'DevOps & Systèmes' },
      type: 'badges',
      items: [
        { name: 'Linux' },
        { name: 'Docker' },
        { name: 'Bash' },
        { name: 'SSH' },
      ],
    },
    {
      title: { fr: 'Versioning & outils' },
      type: 'badges',
      items: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'GitLab' },
        { name: 'Bitbucket' },
        { name: 'Jira' },
        { name: 'Redmine' },
        { name: 'Trello' },
        { name: 'PhpStorm' },
        { name: 'VS Code' },
        { name: 'Monday' },
        { name: 'EasyVista' },
      ],
    },
    {
      title: { fr: 'Méthodologies' },
      type: 'text',
      items: [
        { name: { fr: 'TMA applicative, support N3, chiffrage, delivery et amélioration continue' } },
      ],
    },
    {
      title: { fr: 'Qualités' },
      type: 'text',
      items: [
        { name: { fr: '- Résolution de problèmes complexes, amélioration continue.' } },
        { name: { fr: '- Communication technique, collaboration et accompagnement des équipes.' } },
      ],
    },
  ],

  experiences: [
    {
      id: 'ortyz',
      company: { fr: 'ORTYZ' },
      role: { fr: 'Président / Développeur web freelance' },
      type: { fr: 'Freelance' },
      period: { fr: 'Août 2022 - Présent' },
      description: {
        fr: 'Création de sites et applications web sur mesure pour divers clients.',
      },
      techs: ['PHP', 'Laravel', 'WordPress', 'MySQL', 'Docker', 'Linux'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Agence web indépendante spécialisée dans le développement web et les applications sur mesure.',
        },
        tasks: {
          fr: [
            'Analyse des besoins clients et cadrage technique',
            'Conception et développement d\'applications web Laravel',
            'Création et refonte de sites WordPress',
            'Gestion de projet, chiffrage et relation client',
          ],
        },
        env: {
          fr: 'PHP / Laravel / WordPress / MySQL / Docker / Linux',
        },
      },
    },

    {
      id: 'groupama',
      company: { fr: 'Groupama Lyon' },
      role: { fr: 'Développeur web' },
      type: { fr: 'Freelance' },
      period: { fr: 'Juin 2022 - Décembre 2024' },
      description: {
        fr: 'TMA + développement applicatif — réduction des incidents de 70%',
      },
      techs: ['PHP', 'Laravel', 'SQL Server', 'MySQL', 'Docker', 'Linux'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Mission au sein d\'une équipe de développement sur des applications métiers.',
        },
        tasks: {
          fr: [
            'Maintenance corrective et évolutive des applications (TMA)',
            'Développement de nouvelles fonctionnalités',
            'Analyse des besoins métiers et chiffrage',
            'Support N3 et résolution d\'incidents',
          ],
        },
        env: {
          fr: 'PHP / Laravel / SQL Server / Docker / Linux',
        },
      },
    },

    {
      id: 'it-akademy',
      company: { fr: 'IT Akademy' },
      role: { fr: 'Formateur développement web' },
      type: { fr: 'Freelance' },
      period: { fr: 'Mars 2022 - Présent' },
      description: {
        fr: 'Formation d\'étudiants aux technologies du développement web.',
      },
      techs: ['HTML', 'CSS', 'PHP', 'MySQL'],
    },

    {
      id: 'acoss-freelance',
      company: { fr: 'ACOSS Lyon' },
      role: { fr: 'Développeur PHP' },
      type: { fr: 'Freelance' },
      period: { fr: 'Octobre 2021 - Janvier 2022' },
      description: {
        fr: 'Développement PHP et TMA de l\'outil ordonnanceur.',
      },
      techs: ['PHP', 'MySQL', 'Linux'],
    },

    {
      id: 'handigital',
      company: { fr: 'Handigital' },
      role: { fr: 'Formateur web' },
      type: { fr: 'Freelance' },
      period: { fr: 'Octobre 2021 - Avril 2022' },
      description: {
        fr: 'Formation aux bases du développement web.',
      },
      techs: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
    },

    {
      id: 'acoss',
      company: { fr: 'ACOSS Lyon' },
      role: { fr: 'Développeur web' },
      type: { fr: 'CDI' },
      period: { fr: 'Octobre 2019 - Juillet 2021' },
      description: {
        fr: 'Développement et maintenance d\'applications internes liées aux cotisations.',
      },
      techs: ['PHP', 'Informix', 'Linux'],
    },

    {
      id: 'comaxess-alternance',
      company: { fr: 'COMAXESS' },
      role: { fr: 'Développeur web' },
      type: { fr: 'Alternance' },
      period: { fr: 'Septembre 2016 - Août 2018' },
      description: {
        fr: 'Développement et maintenance de sites web clients.',
      },
      techs: ['PHP', 'WordPress', 'PrestaShop', 'Linux'],
    },

    {
      id: 'comaxess-stage',
      company: { fr: 'COMAXESS' },
      role: { fr: 'Développeur web' },
      type: { fr: 'Stage' },
      period: { fr: 'Avril 2016 - Mai 2016' },
      description: {
        fr: 'Participation à la maintenance et aux évolutions de projets web.',
      },
      techs: ['PHP', 'WordPress'],
    },

    {
      id: 'bioforce',
      company: { fr: 'Bioforce' },
      role: { fr: 'Technicien informatique' },
      type: { fr: 'Stage' },
      period: { fr: 'Mai 2015 - Juin 2015' },
      description: {
        fr: 'Gestion et maintenance du parc informatique.',
      },
      techs: ['Windows'],
    },
  ],

  education: [
    {
      school: { fr: 'IT Akademy' },
      degree: { fr: 'Titre RNCP Bac+4' },
      period: '2018',
    },
    {
      school: { fr: 'IP Formation' },
      degree: { fr: 'Titre RNCP Bac+2' },
      period: '2016',
    },
    {
      school: { fr: 'Lycée Condorcet' },
      degree: { fr: 'Bac STI2D' },
      period: '2014',
    },
  ],

  projects: [],

  hobbies: [],

  theme: { preset: 'slate' },

  labels: {
    sections: {
      contact: { fr: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES' },
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      education: { fr: 'FORMATION' },
      projects: { fr: 'PROJETS' },
      hobbies: { fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :' },
      moreTasks: { fr: 'autres missions...' },
      training: { fr: 'Formations :' },
      techEnv: { fr: 'Env. technique :' },
      technologies: { fr: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails' },
      switchTheme: { fr: 'Changer le thème' },
      downloadPdf: { fr: 'Télécharger le PDF' },
    },
  },
}