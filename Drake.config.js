// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: 'Drake',
  domain: 'template.karngyan.com', // add without https:// , used in meta tags and share urls
  image: 'images/bigheadkarngyan.png',
  email: 'chaudl113@gmail.com',
  googleAnalyticsV4: {
    enabled: false,
    id: '',
  },
  plausibleAnalytics: {
    enabled: true,
    domain: 'template.karngyan.com',
    trackLocalhost: false,
    // leave it empty if plausible is not self hosted
    apiHost: 'https://analytics.lookatx.dev', // default: https://plausible.io
  },
  // enable if you want comments and likes on posts
  // see how it looks on karngyan.com
  firebase: {
    enabled: true,
  },
  social: {
    github: 'chaudl113',
    linkedin: 'karngyan',
    facebook: 'karnsometimes',
    twitter: 'gyankarn',
    instagram: 'karngyan.dev',
    codestats: 'tnlong1214', // https://codestats.net make a profile if you dont already have one.
  },
  buyMeACoffee: {
    enabled: true,
    url: 'https://www.buymeacoffee.com/karngyan',
  },
  projects: {
    enabled: true,
  },
  blog: {
    enabled: true,
  },
  resume: {
    enabled: true,
    pdfUrl: '/RESUME_GYAN_KARN_DARK.pdf', // add files in static folder
  },
  uses: {
    enabled: true,
    meta: [
      { title: 'OS', value: 'Windows 10 Pro' },
      { title: 'Memory', value: '8GB 2667 MHz DDR4' },
      { title: 'Keyboard', value: 'KANANIC TK1 - White Brown Switch' },
      { title: 'Mouse', value: 'Logitech Silent Pebble' },
      { title: 'Monitor', value: 'LG QHD (2560 x 1440) 27 Inch IPS Display' },
      {
        title: 'Laptop • Processor • Graphics',
        value:
          'Laptop Dell Inspiron 5559 i5 6200U • AMD Radeon R5 M335 + Intel HD Graphics 520',
      },
    ],
  },
  workedAt: {
    // add logos in static and at max add 3/4
    enabled: true,
    meta: [
      {
        name: 'SendPost',
        src: '/images/sendpost.png',
        url: 'https://sendpost.io',
      },
      { name: 'Amazon', src: '/images/amazon.png', url: 'https://amazon.in' },
      {
        name: 'InterviewReady',
        src: '/images/interviewready-io.png',
        url: 'https://get.interviewready.io',
      },
      { name: 'CrioDo', src: '/images/crio.png', url: 'https://crio.do' },
    ],
  },
  loadingIndicator: {
    name: 'pulse',
    // https://tobiasahlin.com/spinkit/
    // circle
    // cube-grid
    // fading-circle
    // folding-cube
    // chasing-dots
    // nuxt
    // pulse
    // rectangle-bounce
    // rotating-plane
    // three-bounce
    // wandering-cubes
  },
  strings: {
    en_US: {
      download: 'download',
      nav: {
        home: 'home',
        blog: 'blog',
        projects: 'projects',
        uses: 'uses',
        resume: 'résumé',
        buyMeACoffee: 'buy me a beer',
        signIn: 'sign in',
        signOut: 'sign out',
      },
      hero: {
        iBlogTech: 'i blog tech',
        haveALook: 'have a look',
        friendlyNeighborhood: 'your friendly neighborhood',
        description:
          'i am a software engineer and a part time freelancer. i blog tech, write a weekend newsletter called software shots, and tinker with side projects every now n then.',
        words: ['developer', 'designer', 'engineer', 'programmer', 'encoder'],
      },
      githubCalendar: {
        header: 'contributions',
        subtext: 'github calendar heatmap',
      },
      blog: {
        header: 'blog',
        subtext:
          'i try to write once in a while. let me know your thoughts in comments or mail@karngyan.com',
      },
      recentBlog: {
        header: 'recent blogs',
        subtext: 'it takes a lot of time to write man',
      },
      uses: {
        header: 'uses',
        subtext:
          'a quick summary of what I use on a daily basis to code and some codestats.net flex',
      },
      projects: {
        header: 'projects',
        subtext:
          'this page lists some of my personal and work projects. every project has some story, click on the title to read',
      },
    },
  },
};
