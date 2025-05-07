// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'terokkar', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['terokkar/genome_section_report', 'terokkar/microbiome_section_report'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'MJC Biology 101 PCR Lab 12/1/2022',
          description:
            'This was my first PCR. The lab involved amplifying a gene on chromosome 16 to check for the presence of an Alu insert. Out of five students, three (including myself) were homozygous for the allele without the insert, one was homozygous with the insert, and one was heterozygous. This was our final lab for Biology 101 in Fall 2022 and it ran from November to December.',
          imageUrl:
            'https://github.com/terokkar/terokkar.github.io/raw/main/bio101_PCRgel.jpg',
          link: '',
        },
        {
          title: 'PCR Crochet 12/8/2022',
          description:
            'We were asked to draw our PCR gel for a lab report, but I instead designed and crocheted this version. I gifted the finished piece to my professor. The pattern consists of a rectangular piece made with half double crochet stitches, skipped stitches for wells, color changes for bands, and a slip stitch border at both ends. I used size 3 crochet thread, embroidery floss, and a 2.0 mm crochet hook.',
          imageUrl:
            'https://github.com/terokkar/terokkar.github.io/raw/main/crochet_PCR.png',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'HAM GitHub',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'holly-m-8303a7210',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'hmoffett@csustan.edu',
  },
  resume: {
    fileUrl:
      'https://github.com/terokkar/terokkar.github.io/raw/main/MoffettCV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Biology',
    'Chemistry',
    'Microbiology',
    'Microscopy',
    'Aseptic technique',
    'Bioinformatics (Genome assembly, QIIME2, Kraken2, HISAT2)',
    'Python (Pandas, data parsing)',
    'Ethics and HIPAA Compliance',
  ],
  experiences: [
    {
      company: 'The Brass Tap',
      position: 'Cook',
      from: 'May 2024',
      to: 'Present',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'American Heart Association BLS',
      body: '',
      year: '2024-present',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Stanislaus County',
      degree: 'GED',
      from: 'May 2020',
      to: 'October 2020',
    },
    {
      institution: 'Modesto Junior College',
      degree: 'AS Biology with Honors',
      from: 'October 2020',
      to: 'April 2024',
    },
    {
      institution: 'Modesto Junior College',
      degree: 'AS Chemistry with Honors',
      from: 'October 2020',
      to: 'April 2024',
    }, 
    {
      institution: 'Modesto Junior College',
      degree: 'AA General Studies: Natural Sciences with Honors',
      from: 'October 2020',
      to: 'April 2024',
    }, 
    {
      institution: 'California State University Stanislaus',
      degree: 'BS Biological Sciences',
      from: 'August 2024',
      to: 'Present',
    }, 
  ],
  publications: [
    {
      title: 'Draft Genome Sequence of Intestinibacter bartletti DSM 16795, a Human Gut Isolate Associated with Autism Microbiome Studies',
      conferenceName: '',
      journalName: 'Microbiology Resource Announcements',
      authors: 'JGI, DSMV, Students & Professor to be filled in later',
      link: 'https://github.com/terokkar/terokkar.github.io/raw/main/Draft%20Genome%20Sequence%20of%20Intestinibacter%20bartletti%20DSM%2016795%2C%20a%20Human%20Gut%20Isolate%20Associated%20with%20Autism%20Microbiome%20Studies.pdf',
      description:
        'This is a manuscript in submission. Here we present the draft genome sequence of Intestinibacter bartletti DSM 16795, a human gut isolate of interest in autism-associated microbiome studies. The genome spans 2.97 Mb across 22 contigs, with a GC content of 28.84% and 100% estimated completeness. Key genomic features include virulence factors, antibiotic resistance genes, biosynthetic clusters, and CRISRP-Cas loci.',
    },
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
