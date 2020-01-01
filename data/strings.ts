const Shared = {
  Footer: {
    preImage: 'Made with',
    imageAlt: 'a chili',
    postImage: 'by the Spicy Sea Shells',
  },
  Header: {
    title: 'Spicy Sea Shells',
    introExtendedOpening: 'Who are we?',
    introBase: 'We are a collective of software developers, business analysts and quality analysts',
    introExtended: 'who met on a training course by ThoughtWorks',
    blogCTA: "Together we're running the",
    blogCTALink: 'Spicy Blog',
    logoAlt: 'Spicy Sea Shells logo',
  },
};

const About = {
  pageTitle: 'About | Spicy Sea Shells',
  pageDescription:
    'About page of the Spicy Sea Shells, a collective of software developers, business analysts and quality analysts',
  socialMediaAlt: ({ platform }: { platform: string }) => `logo of ${platform}`,
};

const Blog = {
  pageTitle: 'Spicy Blog | Spicy Sea Shells',
  pageDescription:
    'Blog of the Spicy Sea Shells, a collective of software developers, business analysts and quality analysts',
  title: 'Spicy Blog',
  heroPreLink: "We're the",
  heroLink: 'Spicy Sea Shells',
  heroPostLink: 'and this is our blog.',
  latestHeading: 'Latest',
  homeLinkAlt: 'Homepage / Blog',
  aboutLink: 'About',
};

const Home = {
  pageTitle: 'Spicy Sea Shells',
  pageDescription:
    'Homepage of the Spicy Sea Shells, a collective of software developers, business analysts and quality analysts',
};

const Post = {
  pageTitle: ({ title }: { title: string }) => `${title} | Spicy Sea Shells`,
  pageDescription: ({ title }: { title: string }) =>
    `Blog of the Spicy Sea Shells | Blogpost about ${title}`,
  crosspost: ({ hasPrefix }: { hasPrefix: boolean }) =>
    `This is a crosspost from${hasPrefix ? ' the' : ''}`,
  author: ({ author }: { author?: string }) => `By ${author}`,
};

export default { ...Shared, About, Blog, Home, Post };
